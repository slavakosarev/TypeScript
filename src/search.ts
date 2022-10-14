import { APIlocal } from './APIlocal';
import { TFavorite } from './types';

export interface IApartResponse {
  id?: number,
  name?: string,
  image?: string,
  price?: number,
  description?: string,
  remoteness?: number,
  bookedDates?: {
    checkIn: Date,
    checkOut: Date
  }
}

function dateToUnixStamp(date: Date) {
  return date.getTime() / 1000
}

function responseToJson(requestPromise) {
  return requestPromise
    .then((response) => {

      return response.text()
    })
    .then((responseText: string) => {

      return JSON.parse(responseText)
    })
}

export async function searchApartment(): Promise<string> {

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('checkin') !== '') {

    const checkInDate = new Date(urlParams.get('checkin'));
    const checkOutDate = new Date(urlParams.get('checkout'));
    const maxPrice = urlParams.get('price');

    let url = `http://localhost:5500/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;

    if (maxPrice.length > 0) {
      url += `&maxPrice=${maxPrice}`
    }

    const response = await fetch(url);
    const responseText = await response.text();
    const data = JSON.parse(responseText);

    if (!data) {
      throw Error('Нет апартаментов по указанным параметрам')
    }
    else {

      if (data.length > 0) {

        let str = '<div class="search-list-block"><ul class="results-list">';

        data.forEach((result_2: {
          price: number,
          id: string,
          image: string,
          name: string,
          remoteness: string,
          description: string
        }) => {

          let active = '';

          if (APIlocal.get('favoriteItems') != null) {

            JSON.parse(APIlocal.get('favoriteItems')).forEach((favorite: TFavorite) => {
              if (favorite.id === result_2.id.toString()) {

                active = 'active'
              }
            })
          }

          if (+maxPrice >= result_2.price || +maxPrice < 1) {

            str += `<li id="book_${result_2.id}" class="result">
              <div class="result-container">
                <div class="result-img-container">
                  <div class="favorites ${active}" data-fav="${result_2.id}"></div>
                  <img class="result-img" src="${result_2.image}" alt="${result_2.name}">
                </div>	
                <div class="result-info">
                  <div class="result-info--header">
                    <p>${result_2.name}</p>
                    <p class="price">${result_2.price}&#8381;</p>
                  </div>
                  <div class="result-info--map"><i class="map-icon"></i> ${result_2.remoteness}км от вас</div>
                  <div class="result-info--descr">${result_2.description}</div>
                  <div class="result-info--footer">
                    <div>
                      <button onclick="book(${result_2.id})">Забронировать</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>`
          }
        });
        str += '</ul></div>';

        return str
      }
      else {
        return '<p class="paddinged centered">Нет квартир в списке, нажмите поиск</p>';
      }
    }
  }
}

export function book(placeId: string | number, checkInDate: Date, checkOutDate: Date) {
  return responseToJson(fetch(
    `http://localhost:3030/places/${placeId}?` +
    `checkInDate=${dateToUnixStamp(checkInDate)}&` +
    `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
    { method: 'PATCH' }
  ));
}

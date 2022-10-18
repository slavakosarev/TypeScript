import { responseToJson, dateToUnixStamp } from './search.js'
import { APIlocal } from './APIlocal.js'
import { renderToast } from './lib.js'

export function book(placeId: string | number, checkInDate: Date | null, checkOutDate: Date | null) {

  if (placeId && checkInDate && checkOutDate) {

    const data = responseToJson(fetch(

      `http://localhost:5500/places/${placeId}?` +
      `checkInDate=${dateToUnixStamp(checkInDate)}&` +
      `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
      { method: 'PATCH' }
    ));
    if (data) {

      const bookRes = {
        'id': placeId,
        'checkIn': checkInDate.getTime(),
        'checkOut': checkOutDate.getTime()
      }
      renderToast(
        { text: `Подтвердите бронь номера <b>${placeId}</b> <br>с <i>${new Date(checkInDate).toLocaleString('en-CA')}</i> <br>по <i>${new Date(checkOutDate).toLocaleString('ru-RU')}</i>`, type: 'success' },
        {
          name: 'Ок', handler: () => {
            console.log('Уведомление закрыто')
            APIlocal.set('booked', bookRes)
          }
        }
      )
    }
  }
  else {
    return false
  }
}



export function bookStart(): any {

  document.querySelectorAll('.result-info--footer button').forEach((elem) => {
    elem.addEventListener('click', (e: MouseEvent) => {

      const checkInDate: Date = new Date(document.getElementById('check-in-date').getAttribute('value'))
      const checkOutDate: Date = new Date(document.getElementById('check-out-date').getAttribute('value'))
      const target = e.target as Element;
      const placeId: string | number = target.closest('.result').getAttribute('id').substring(5);

      book(placeId, checkInDate, checkOutDate);
    });
  });
}

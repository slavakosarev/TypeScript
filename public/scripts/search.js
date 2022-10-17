var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { APIlocal } from './APIlocal';
function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
function responseToJson(requestPromise) {
    return requestPromise
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    });
}
export function searchApartment() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('checkin') !== '') {
            const checkInDate = new Date(urlParams.get('checkin'));
            const checkOutDate = new Date(urlParams.get('checkout'));
            const maxPrice = urlParams.get('price');
            let url = `http://localhost:5500/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;
            if (maxPrice.length > 0) {
                url += `&maxPrice=${maxPrice}`;
            }
            const response = yield fetch(url);
            const responseText = yield response.text();
            const data = JSON.parse(responseText);
            if (!data) {
                throw Error('Нет апартаментов по указанным параметрам');
            }
            else {
                if (data.length > 0) {
                    let str = '<div class="search-list-block"><ul class="results-list">';
                    data.forEach((result_2) => {
                        let active = '';
                        if (APIlocal.get('favoriteItems') != null) {
                            JSON.parse(APIlocal.get('favoriteItems')).forEach((favorite) => {
                                if (favorite.id === result_2.id.toString()) {
                                    active = 'active';
                                }
                            });
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
            </li>`;
                        }
                    });
                    str += '</ul></div>';
                    return str;
                }
                else {
                    return '<p class="paddinged centered">Нет квартир в списке, нажмите поиск</p>';
                }
            }
        }
    });
}
export function book(placeId, checkInDate, checkOutDate) {
    return responseToJson(fetch(`http://localhost:3030/places/${placeId}?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&`, { method: 'PATCH' }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBZ0J0QyxTQUFTLGVBQWUsQ0FBQyxJQUFVO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQTtBQUM5QixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsY0FBYztJQUNwQyxPQUFPLGNBQWM7U0FDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFFakIsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDeEIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsWUFBb0IsRUFBRSxFQUFFO1FBRTdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCxNQUFNLFVBQWdCLGVBQWU7O1FBRW5DLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUQsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUVuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEMsSUFBSSxHQUFHLEdBQUcsNENBQTRDLGVBQWUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUM7WUFFL0osSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLENBQUE7YUFDL0I7WUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQTthQUN4RDtpQkFDSTtnQkFFSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUVuQixJQUFJLEdBQUcsR0FBRywwREFBMEQsQ0FBQztvQkFFckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBT2IsRUFBRSxFQUFFO3dCQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFFaEIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRTs0QkFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBbUIsRUFBRSxFQUFFO2dDQUN4RSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQ0FFMUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtpQ0FDbEI7NEJBQ0gsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7d0JBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTs0QkFFaEQsR0FBRyxJQUFJLGdCQUFnQixRQUFRLENBQUMsRUFBRTs7OzBDQUdKLE1BQU0sZUFBZSxRQUFRLENBQUMsRUFBRTtpREFDekIsUUFBUSxDQUFDLEtBQUssVUFBVSxRQUFRLENBQUMsSUFBSTs7Ozt5QkFJN0QsUUFBUSxDQUFDLElBQUk7dUNBQ0MsUUFBUSxDQUFDLEtBQUs7OzJFQUVzQixRQUFRLENBQUMsVUFBVTtvREFDMUMsUUFBUSxDQUFDLFdBQVc7Ozs4Q0FHMUIsUUFBUSxDQUFDLEVBQUU7Ozs7O2tCQUt2QyxDQUFBO3lCQUNQO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsSUFBSSxhQUFhLENBQUM7b0JBRXJCLE9BQU8sR0FBRyxDQUFBO2lCQUNYO3FCQUNJO29CQUNILE9BQU8sdUVBQXVFLENBQUM7aUJBQ2hGO2FBQ0Y7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELE1BQU0sVUFBVSxJQUFJLENBQUMsT0FBd0IsRUFBRSxXQUFpQixFQUFFLFlBQWtCO0lBQ2xGLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FDekIsZ0NBQWdDLE9BQU8sR0FBRztRQUMxQyxlQUFlLGVBQWUsQ0FBQyxXQUFXLENBQUMsR0FBRztRQUM5QyxnQkFBZ0IsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQ2hELEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUNwQixDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJbG9jYWwgfSBmcm9tICcuL0FQSWxvY2FsJztcbmltcG9ydCB7IFRGYXZvcml0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcGFydFJlc3BvbnNlIHtcbiAgaWQ/OiBudW1iZXIsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIGltYWdlPzogc3RyaW5nLFxuICBwcmljZT86IG51bWJlcixcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gIHJlbW90ZW5lc3M/OiBudW1iZXIsXG4gIGJvb2tlZERhdGVzPzoge1xuICAgIGNoZWNrSW46IERhdGUsXG4gICAgY2hlY2tPdXQ6IERhdGVcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVG9Vbml4U3RhbXAoZGF0ZTogRGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwXG59XG5cbmZ1bmN0aW9uIHJlc3BvbnNlVG9Kc29uKHJlcXVlc3RQcm9taXNlKSB7XG4gIHJldHVybiByZXF1ZXN0UHJvbWlzZVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2VUZXh0OiBzdHJpbmcpID0+IHtcblxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hBcGFydG1lbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gIGlmICh1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykgIT09ICcnKSB7XG5cbiAgICBjb25zdCBjaGVja0luRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNraW4nKSk7XG4gICAgY29uc3QgY2hlY2tPdXREYXRlID0gbmV3IERhdGUodXJsUGFyYW1zLmdldCgnY2hlY2tvdXQnKSk7XG4gICAgY29uc3QgbWF4UHJpY2UgPSB1cmxQYXJhbXMuZ2V0KCdwcmljZScpO1xuXG4gICAgbGV0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjU1MDAvcGxhY2VzP2NoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrSW5EYXRlKX0mY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmNvb3JkaW5hdGVzPTU5LjkzODYsMzAuMzE0MWA7XG5cbiAgICBpZiAobWF4UHJpY2UubGVuZ3RoID4gMCkge1xuICAgICAgdXJsICs9IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBFcnJvcign0J3QtdGCINCw0L/QsNGA0YLQsNC80LXQvdGC0L7QsiDQv9C+INGD0LrQsNC30LDQvdC90YvQvCDQv9Cw0YDQsNC80LXRgtGA0LDQvCcpXG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgbGV0IHN0ciA9ICc8ZGl2IGNsYXNzPVwic2VhcmNoLWxpc3QtYmxvY2tcIj48dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3RcIj4nO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaCgocmVzdWx0XzI6IHtcbiAgICAgICAgICBwcmljZTogbnVtYmVyLFxuICAgICAgICAgIGlkOiBzdHJpbmcsXG4gICAgICAgICAgaW1hZ2U6IHN0cmluZyxcbiAgICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgcmVtb3RlbmVzczogc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICAgICAgfSkgPT4ge1xuXG4gICAgICAgICAgbGV0IGFjdGl2ZSA9ICcnO1xuXG4gICAgICAgICAgaWYgKEFQSWxvY2FsLmdldCgnZmF2b3JpdGVJdGVtcycpICE9IG51bGwpIHtcblxuICAgICAgICAgICAgSlNPTi5wYXJzZShBUElsb2NhbC5nZXQoJ2Zhdm9yaXRlSXRlbXMnKSkuZm9yRWFjaCgoZmF2b3JpdGU6IFRGYXZvcml0ZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZmF2b3JpdGUuaWQgPT09IHJlc3VsdF8yLmlkLnRvU3RyaW5nKCkpIHtcblxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCttYXhQcmljZSA+PSByZXN1bHRfMi5wcmljZSB8fCArbWF4UHJpY2UgPCAxKSB7XG5cbiAgICAgICAgICAgIHN0ciArPSBgPGxpIGlkPVwiYm9va18ke3Jlc3VsdF8yLmlkfVwiIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzICR7YWN0aXZlfVwiIGRhdGEtZmF2PVwiJHtyZXN1bHRfMi5pZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiJHtyZXN1bHRfMi5pbWFnZX1cIiBhbHQ9XCIke3Jlc3VsdF8yLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzdWx0XzIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3Jlc3VsdF8yLnByaWNlfSYjODM4MTs8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtyZXN1bHRfMi5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZGVzY3JcIj4ke3Jlc3VsdF8yLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJib29rKCR7cmVzdWx0XzIuaWR9KVwiPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3RyICs9ICc8L3VsPjwvZGl2Pic7XG5cbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnPHAgY2xhc3M9XCJwYWRkaW5nZWQgY2VudGVyZWRcIj7QndC10YIg0LrQstCw0YDRgtC40YAg0LIg0YHQv9C40YHQutC1LCDQvdCw0LbQvNC40YLQtSDQv9C+0LjRgdC6PC9wPic7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29rKHBsYWNlSWQ6IHN0cmluZyB8IG51bWJlciwgY2hlY2tJbkRhdGU6IERhdGUsIGNoZWNrT3V0RGF0ZTogRGF0ZSkge1xuICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXMvJHtwbGFjZUlkfT9gICtcbiAgICBgY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZgICtcbiAgICBgY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmAsXG4gICAgeyBtZXRob2Q6ICdQQVRDSCcgfVxuICApKTtcbn1cbiJdfQ==
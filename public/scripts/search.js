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
export function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
export function responseToJson(requestPromise) {
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
        if (urlParams) {
            const checkInDate = new Date(urlParams.get('checkin'));
            const checkOutDate = new Date(urlParams.get('checkout'));
            const maxPrice = urlParams.get('price');
            let url = `http://localhost:5500/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;
            if (+maxPrice > 0) {
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
                      <button>Забронировать</button>
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
        return this;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBZ0J0QyxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLGNBQWM7SUFDM0MsT0FBTyxjQUFjO1NBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBRWpCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUU3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsTUFBTSxVQUFnQixlQUFlOztRQUVuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQUksU0FBUyxFQUFFO1lBRWIsTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sWUFBWSxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLFFBQVEsR0FBa0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2RCxJQUFJLEdBQUcsR0FBRyw0Q0FBNEMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQztZQUUvSixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLENBQUE7YUFDL0I7WUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQTthQUN4RDtpQkFDSTtnQkFFSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUVuQixJQUFJLEdBQUcsR0FBRywwREFBMEQsQ0FBQztvQkFFckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBT2IsRUFBRSxFQUFFO3dCQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFFaEIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRTs0QkFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBbUIsRUFBRSxFQUFFO2dDQUN4RSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQ0FFMUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtpQ0FDbEI7NEJBQ0gsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7d0JBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTs0QkFFaEQsR0FBRyxJQUFJLGdCQUFnQixRQUFRLENBQUMsRUFBRTs7OzBDQUdKLE1BQU0sZUFBZSxRQUFRLENBQUMsRUFBRTtpREFDekIsUUFBUSxDQUFDLEtBQUssVUFBVSxRQUFRLENBQUMsSUFBSTs7Ozt5QkFJN0QsUUFBUSxDQUFDLElBQUk7dUNBQ0MsUUFBUSxDQUFDLEtBQUs7OzJFQUVzQixRQUFRLENBQUMsVUFBVTtvREFDMUMsUUFBUSxDQUFDLFdBQVc7Ozs7Ozs7O2tCQVF0RCxDQUFBO3lCQUNQO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsSUFBSSxhQUFhLENBQUM7b0JBRXJCLE9BQU8sR0FBRyxDQUFBO2lCQUNYO3FCQUNJO29CQUNILE9BQU8sdUVBQXVFLENBQUM7aUJBQ2hGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJbG9jYWwgfSBmcm9tICcuL0FQSWxvY2FsJztcbmltcG9ydCB7IFRGYXZvcml0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcGFydFJlc3BvbnNlIHtcbiAgaWQ/OiBudW1iZXIsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIGltYWdlPzogc3RyaW5nLFxuICBwcmljZT86IG51bWJlcixcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gIHJlbW90ZW5lc3M/OiBudW1iZXIsXG4gIGJvb2tlZERhdGVzPzoge1xuICAgIGNoZWNrSW46IERhdGUsXG4gICAgY2hlY2tPdXQ6IERhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVW5peFN0YW1wKGRhdGU6IERhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2VUb0pzb24ocmVxdWVzdFByb21pc2UpIHtcbiAgcmV0dXJuIHJlcXVlc3RQcm9taXNlXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZVRleHQ6IHN0cmluZykgPT4ge1xuXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpXG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEFwYXJ0bWVudCgpOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgaWYgKHVybFBhcmFtcykge1xuXG4gICAgY29uc3QgY2hlY2tJbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSh1cmxQYXJhbXMuZ2V0KCdjaGVja2luJykpO1xuICAgIGNvbnN0IGNoZWNrT3V0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHVybFBhcmFtcy5nZXQoJ2NoZWNrb3V0JykpO1xuICAgIGNvbnN0IG1heFByaWNlOiBzdHJpbmcgfCBudWxsID0gdXJsUGFyYW1zLmdldCgncHJpY2UnKTtcblxuICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1NTAwL3BsYWNlcz9jaGVja0luRGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja0luRGF0ZSl9JmNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChjaGVja091dERhdGUpfSZjb29yZGluYXRlcz01OS45Mzg2LDMwLjMxNDFgO1xuXG4gICAgaWYgKCttYXhQcmljZSA+IDApIHtcbiAgICAgIHVybCArPSBgJm1heFByaWNlPSR7bWF4UHJpY2V9YFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ9Cd0LXRgiDQsNC/0LDRgNGC0LDQvNC10L3RgtC+0LIg0L/QviDRg9C60LDQt9Cw0L3QvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNCw0LwnKVxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGxldCBzdHIgPSAnPGRpdiBjbGFzcz1cInNlYXJjaC1saXN0LWJsb2NrXCI+PHVsIGNsYXNzPVwicmVzdWx0cy1saXN0XCI+JztcblxuICAgICAgICBkYXRhLmZvckVhY2goKHJlc3VsdF8yOiB7XG4gICAgICAgICAgcHJpY2U6IG51bWJlcixcbiAgICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICAgIGltYWdlOiBzdHJpbmcsXG4gICAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICAgIHJlbW90ZW5lc3M6IHN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgICAgIH0pID0+IHtcblxuICAgICAgICAgIGxldCBhY3RpdmUgPSAnJztcblxuICAgICAgICAgIGlmIChBUElsb2NhbC5nZXQoJ2Zhdm9yaXRlSXRlbXMnKSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIEpTT04ucGFyc2UoQVBJbG9jYWwuZ2V0KCdmYXZvcml0ZUl0ZW1zJykpLmZvckVhY2goKGZhdm9yaXRlOiBURmF2b3JpdGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGZhdm9yaXRlLmlkID09PSByZXN1bHRfMi5pZC50b1N0cmluZygpKSB7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgrbWF4UHJpY2UgPj0gcmVzdWx0XzIucHJpY2UgfHwgK21heFByaWNlIDwgMSkge1xuXG4gICAgICAgICAgICBzdHIgKz0gYDxsaSBpZD1cImJvb2tfJHtyZXN1bHRfMi5pZH1cIiBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdm9yaXRlcyAke2FjdGl2ZX1cIiBkYXRhLWZhdj1cIiR7cmVzdWx0XzIuaWR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz1cIiR7cmVzdWx0XzIuaW1hZ2V9XCIgYWx0PVwiJHtyZXN1bHRfMi5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3VsdF8yLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtyZXN1bHRfMi5wcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+ICR7cmVzdWx0XzIucmVtb3RlbmVzc33QutC8INC+0YIg0LLQsNGBPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+JHtyZXN1bHRfMi5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN0ciArPSAnPC91bD48L2Rpdj4nO1xuXG4gICAgICAgIHJldHVybiBzdHJcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJzxwIGNsYXNzPVwicGFkZGluZ2VkIGNlbnRlcmVkXCI+0J3QtdGCINC60LLQsNGA0YLQuNGAINCyINGB0L/QuNGB0LrQtSwg0L3QsNC20LzQuNGC0LUg0L/QvtC40YHQujwvcD4nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuIl19
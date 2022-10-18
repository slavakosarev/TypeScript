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
        .then((response) => {
        return JSON.parse(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBZ0J0QyxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFBO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLGNBQW1CO0lBQ2hELE9BQU8sY0FBYztTQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtRQUN0QixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsTUFBTSxVQUFnQixlQUFlOztRQUVuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQUksU0FBUyxFQUFFO1lBRWIsTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sWUFBWSxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLFFBQVEsR0FBa0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2RCxJQUFJLEdBQUcsR0FBRyw0Q0FBNEMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQztZQUUvSixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxJQUFJLGFBQWEsUUFBUSxFQUFFLENBQUE7YUFDL0I7WUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQTthQUN4RDtpQkFDSTtnQkFFSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUVuQixJQUFJLEdBQUcsR0FBRywwREFBMEQsQ0FBQztvQkFFckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBT2IsRUFBRSxFQUFFO3dCQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFFaEIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRTs0QkFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBbUIsRUFBRSxFQUFFO2dDQUN4RSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQ0FFMUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtpQ0FDbEI7NEJBQ0gsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7d0JBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTs0QkFFaEQsR0FBRyxJQUFJLGdCQUFnQixRQUFRLENBQUMsRUFBRTs7OzBDQUdKLE1BQU0sZUFBZSxRQUFRLENBQUMsRUFBRTtpREFDekIsUUFBUSxDQUFDLEtBQUssVUFBVSxRQUFRLENBQUMsSUFBSTs7Ozt5QkFJN0QsUUFBUSxDQUFDLElBQUk7dUNBQ0MsUUFBUSxDQUFDLEtBQUs7OzJFQUVzQixRQUFRLENBQUMsVUFBVTtvREFDMUMsUUFBUSxDQUFDLFdBQVc7Ozs7Ozs7O2tCQVF0RCxDQUFBO3lCQUNQO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsSUFBSSxhQUFhLENBQUM7b0JBRXJCLE9BQU8sR0FBRyxDQUFBO2lCQUNYO3FCQUNJO29CQUNILE9BQU8sdUVBQXVFLENBQUM7aUJBQ2hGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJbG9jYWwgfSBmcm9tICcuL0FQSWxvY2FsJztcbmltcG9ydCB7IFRGYXZvcml0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcGFydFJlc3BvbnNlIHtcbiAgaWQ/OiBudW1iZXIsXG4gIG5hbWU/OiBzdHJpbmcsXG4gIGltYWdlPzogc3RyaW5nLFxuICBwcmljZT86IG51bWJlcixcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gIHJlbW90ZW5lc3M/OiBudW1iZXIsXG4gIGJvb2tlZERhdGVzPzoge1xuICAgIGNoZWNrSW46IERhdGUsXG4gICAgY2hlY2tPdXQ6IERhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVW5peFN0YW1wKGRhdGU6IERhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2VUb0pzb24ocmVxdWVzdFByb21pc2U6IGFueSkge1xuICByZXR1cm4gcmVxdWVzdFByb21pc2VcbiAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxuICAgIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hBcGFydG1lbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gIGlmICh1cmxQYXJhbXMpIHtcblxuICAgIGNvbnN0IGNoZWNrSW5EYXRlOiBEYXRlID0gbmV3IERhdGUodXJsUGFyYW1zLmdldCgnY2hlY2tpbicpKTtcbiAgICBjb25zdCBjaGVja091dERhdGU6IERhdGUgPSBuZXcgRGF0ZSh1cmxQYXJhbXMuZ2V0KCdjaGVja291dCcpKTtcbiAgICBjb25zdCBtYXhQcmljZTogc3RyaW5nIHwgbnVsbCA9IHVybFBhcmFtcy5nZXQoJ3ByaWNlJyk7XG5cbiAgICBsZXQgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTUwMC9wbGFjZXM/Y2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tPdXREYXRlKX0mY29vcmRpbmF0ZXM9NTkuOTM4NiwzMC4zMTQxYDtcblxuICAgIGlmICgrbWF4UHJpY2UgPiAwKSB7XG4gICAgICB1cmwgKz0gYCZtYXhQcmljZT0ke21heFByaWNlfWBcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEVycm9yKCfQndC10YIg0LDQv9Cw0YDRgtCw0LzQtdC90YLQvtCyINC/0L4g0YPQutCw0LfQsNC90L3Ri9C8INC/0LDRgNCw0LzQtdGC0YDQsNC8JylcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBsZXQgc3RyID0gJzxkaXYgY2xhc3M9XCJzZWFyY2gtbGlzdC1ibG9ja1wiPjx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPic7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChyZXN1bHRfMjoge1xuICAgICAgICAgIHByaWNlOiBudW1iZXIsXG4gICAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgICBpbWFnZTogc3RyaW5nLFxuICAgICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICByZW1vdGVuZXNzOiBzdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgICAgICB9KSA9PiB7XG5cbiAgICAgICAgICBsZXQgYWN0aXZlID0gJyc7XG5cbiAgICAgICAgICBpZiAoQVBJbG9jYWwuZ2V0KCdmYXZvcml0ZUl0ZW1zJykgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBKU09OLnBhcnNlKEFQSWxvY2FsLmdldCgnZmF2b3JpdGVJdGVtcycpKS5mb3JFYWNoKChmYXZvcml0ZTogVEZhdm9yaXRlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmYXZvcml0ZS5pZCA9PT0gcmVzdWx0XzIuaWQudG9TdHJpbmcoKSkge1xuXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoK21heFByaWNlID49IHJlc3VsdF8yLnByaWNlIHx8ICttYXhQcmljZSA8IDEpIHtcblxuICAgICAgICAgICAgc3RyICs9IGA8bGkgaWQ9XCJib29rXyR7cmVzdWx0XzIuaWR9XCIgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgJHthY3RpdmV9XCIgZGF0YS1mYXY9XCIke3Jlc3VsdF8yLmlkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3Jlc3VsdF8yLmltYWdlfVwiIGFsdD1cIiR7cmVzdWx0XzIubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXN1bHRfMi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7cmVzdWx0XzIucHJpY2V9JiM4MzgxOzwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAke3Jlc3VsdF8yLnJlbW90ZW5lc3N90LrQvCDQvtGCINCy0LDRgTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cmVzdWx0XzIuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdHIgKz0gJzwvdWw+PC9kaXY+JztcblxuICAgICAgICByZXR1cm4gc3RyXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICc8cCBjbGFzcz1cInBhZGRpbmdlZCBjZW50ZXJlZFwiPtCd0LXRgiDQutCy0LDRgNGC0LjRgCDQsiDRgdC/0LjRgdC60LUsINC90LDQttC80LjRgtC1INC/0L7QuNGB0Lo8L3A+JztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cbiJdfQ==
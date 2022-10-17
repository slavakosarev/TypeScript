import { renderBlock } from './lib.js';
import { searchApartment } from './search.js';
export function renderSearchStubBlock() {
  renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
;
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
;
export function renderSearchResultsBlock() {
  renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `);
  searchApartment().then(data => {
    renderBlock('search-list-block', data);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTNDLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7S0FLQyxDQUNGLENBQUE7QUFDSCxDQUFDO0FBQUEsQ0FBQztBQUVGLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFhO0lBQ3pELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7OztXQUdPLGFBQWE7O0tBRW5CLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdEQyxDQUNGLENBQUE7SUFFRCxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUIsV0FBVyxDQUNULG1CQUFtQixFQUNuQixJQUFJLENBQ0wsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xyXG5pbXBvcnQgeyBzZWFyY2hBcGFydG1lbnQgfSBmcm9tICcuL3NlYXJjaCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCkge1xyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcclxuICAgIGBcclxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxyXG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cclxuICAgICAgPHA+0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC40YHQuiwg0LfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0LgmbmJzcDvQvdCw0LbQvNC40YLQtSBcItCd0LDQudGC0LhcIjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxyXG4gICAgYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHMtYmxvY2tcIj5cclxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxyXG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jaygpIHtcclxuICByZW5kZXJCbG9jayhcclxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtaGVhZGVyXCI+XHJcbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tZmlsdGVyXCI+PC9pPiDQodC+0YDRgtC40YDQvtCy0LDRgtGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJyZXN1bHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgYWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiLi9pbWcvcmVzdWx0LTEucG5nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cdFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHA+WUFSRCBSZXNpZGVuY2UgQXBhcnQtaG90ZWw8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPjEzMDAwJiM4MzgxOzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gMi410LrQvCDQvtGCINCy0LDRgTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+0JrQvtC80YTQvtGA0YLQvdGL0Lkg0LDQv9Cw0YDRgi3QvtGC0LXQu9GMINCyINGB0LDQvNC+0Lwg0YHQtdGA0LTRhtC1INCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YDQs9CwLiDQmiDRg9GB0LvRg9Cz0LDQvCDQs9C+0YHRgtC10Lkg0L3QvtC80LXRgNCwINGBINCy0LjQtNC+0Lwg0L3QsCDQs9C+0YDQvtC0INC4INCx0LXRgdC/0LvQsNGC0L3Ri9C5IFdpLUZpLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cInJlc3VsdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdm9yaXRlc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz1cIi4vaW1nL3Jlc3VsdC0yLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgPC9kaXY+XHRcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxwPkFreWFuIFN0LlBldGVyc2J1cmc8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPjEzMDAwJiM4MzgxOzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gMS4x0LrQvCDQvtGCINCy0LDRgTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWRlc2NyXCI+0J7RgtC10LvRjCBBa3lhbiBTdC1QZXRlcnNidXJnINGBINCx0LXRgdC/0LvQsNGC0L3Ri9C8IFdpLUZpINC90LAg0LLRgdC10Lkg0YLQtdGA0YDQuNGC0L7RgNC40Lgg0YDQsNGB0L/QvtC70L7QttC10L0g0LIg0LjRgdGC0L7RgNC40YfQtdGB0LrQvtC8INC30LTQsNC90LjQuCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9CwLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgYFxyXG4gIClcclxuXHJcbiAgc2VhcmNoQXBhcnRtZW50KCkudGhlbihkYXRhID0+IHtcclxuICAgIHJlbmRlckJsb2NrKFxyXG4gICAgICAnc2VhcmNoLWxpc3QtYmxvY2snLFxyXG4gICAgICBkYXRhXHJcbiAgICApXHJcbiAgfSlcclxuXHJcbn1cclxuIl19

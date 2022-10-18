import { renderBlock } from './lib.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(results, sort) {
    const placeItems = [];
    let optionsNames = [
        'Сначала дешёвые',
        'Сначала дорогие',
        'Сначала ближе'
    ];
    let options = optionsNames.map((option) => {
        if (option == sort) {
            return `<option selected>${option}</option>`;
        }
        else {
            return `<option>${option}</option>`;
        }
    });
    if (Object.keys(results).length != 0) {
        results.forEach((place) => {
            placeItems.push(`
          <li class="result">
          <div class="result-container">
            <div class="result-img-container">
              <div data-id=${place.id} data-name=${JSON.stringify(place.name)})} data-image=${place.image} class="favorites js-favorite"></div>
              <img class="result-img" src="${place.image}" alt="">
            </div>	
            <div class="result-info">
              <div class="result-info--header">
                <p>${place.name}</p>
                <p class="price">${place.price}&#8381;</p>
              </div>
              <div class="result-info--map"><i class="map-icon"></i> ${place.remoteness}км от вас</div>
              <div class="result-info--descr">${place.description}</div>
              <div class="result-info--footer">
                <div>
                  <button>Забронировать</button>
                </div>
              </div>
            </div>
          </div>
        </li>
        `);
        });
    }
    else {
        placeItems.push(`<li class="result">Данные отсутсвуют</li>`);
    }
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="sort">
                ${options.join('')}
            </select>
        </div>
    </div>
    <ul class="results-list js-results-list">
    ${placeItems.join('')}
    </ul>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUl0QyxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFhO0lBQ3pELFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7OztXQUdPLGFBQWE7O0tBRW5CLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsT0FBZ0IsRUFBRSxJQUFhO0lBQ3RFLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUV0QixJQUFJLFlBQVksR0FBRztRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGVBQWU7S0FDaEIsQ0FBQztJQUNGLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUV4QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsT0FBTyxvQkFBb0IsTUFBTSxXQUFXLENBQUE7U0FDN0M7YUFDSTtZQUNILE9BQU8sV0FBVyxNQUFNLFdBQVcsQ0FBQTtTQUNwQztJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQ2I7Ozs7NkJBSXFCLEtBQUssQ0FBQyxFQUFFLGNBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLENBQUMsS0FBSzs2Q0FDNUQsS0FBSyxDQUFDLEtBQUs7Ozs7cUJBSW5DLEtBQUssQ0FBQyxJQUFJO21DQUNJLEtBQUssQ0FBQyxLQUFLOzt1RUFFeUIsS0FBSyxDQUFDLFVBQVU7Z0RBQ3ZDLEtBQUssQ0FBQyxXQUFXOzs7Ozs7Ozs7U0FTeEQsQ0FDRixDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUM7S0FFSjtTQUFNO1FBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQzlEO0lBR0QsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7O2tCQU1jLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzs7OztNQUs1QixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7S0FFcEIsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vc3RvcmUvZG9tYWluL3BsYWNlLmpzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiYmVmb3JlLXJlc3VsdHMtYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL3N0YXJ0LXNlYXJjaC5wbmdcIiAvPlxuICAgICAgPHA+0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC40YHQuiwg0LfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0LgmbmJzcDvQvdCw0LbQvNC40YLQtSBcItCd0LDQudGC0LhcIjwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrKHJlYXNvbk1lc3NhZ2UpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHMtYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL25vLXJlc3VsdHMucG5nXCIgLz5cbiAgICAgIDxwPiR7cmVhc29uTWVzc2FnZX08L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2socmVzdWx0czogUGxhY2VbXSwgc29ydD86IHN0cmluZykge1xuICBjb25zdCBwbGFjZUl0ZW1zID0gW107XG5cbiAgbGV0IG9wdGlvbnNOYW1lcyA9IFtcbiAgICAn0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LUnLFxuICAgICfQodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtScsXG4gICAgJ9Ch0L3QsNGH0LDQu9CwINCx0LvQuNC20LUnXG4gIF07XG4gIGxldCBvcHRpb25zID0gb3B0aW9uc05hbWVzLm1hcCgob3B0aW9uKSA9PiB7XG5cbiAgICBpZiAob3B0aW9uID09IHNvcnQpIHtcbiAgICAgIHJldHVybiBgPG9wdGlvbiBzZWxlY3RlZD4ke29wdGlvbn08L29wdGlvbj5gXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGA8b3B0aW9uPiR7b3B0aW9ufTwvb3B0aW9uPmBcbiAgICB9XG4gIH0pXG5cbiAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCAhPSAwKSB7XG4gICAgcmVzdWx0cy5mb3JFYWNoKChwbGFjZTogUGxhY2UpID0+IHtcbiAgICAgIHBsYWNlSXRlbXMucHVzaChcbiAgICAgICAgYFxuICAgICAgICAgIDxsaSBjbGFzcz1cInJlc3VsdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLWlkPSR7cGxhY2UuaWR9IGRhdGEtbmFtZT0ke0pTT04uc3RyaW5naWZ5KHBsYWNlLm5hbWUpfSl9IGRhdGEtaW1hZ2U9JHtwbGFjZS5pbWFnZX0gY2xhc3M9XCJmYXZvcml0ZXMganMtZmF2b3JpdGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3BsYWNlLmltYWdlfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwPiR7cGxhY2UubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7cGxhY2UucHJpY2V9JiM4MzgxOzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtwbGFjZS5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2UuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgYFxuICAgICAgKVxuXG4gICAgfSk7XG5cbiAgfSBlbHNlIHtcbiAgICBwbGFjZUl0ZW1zLnB1c2goYDxsaSBjbGFzcz1cInJlc3VsdFwiPtCU0LDQvdC90YvQtSDQvtGC0YHRg9GC0YHQstGD0Y7RgjwvbGk+YCk7XG4gIH1cblxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNvcnRcIj5cbiAgICAgICAgICAgICAgICAke29wdGlvbnMuam9pbignJyl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0IGpzLXJlc3VsdHMtbGlzdFwiPlxuICAgICR7cGxhY2VJdGVtcy5qb2luKCcnKX1cbiAgICA8L3VsPlxuICAgIGBcbiAgKVxufVxuIl19
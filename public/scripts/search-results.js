import { renderBlock } from "./lib.js";
export function renderSearchStubBlock() {
    renderBlock("search-results-block", `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock("search-results-block", `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(results, sort) {
    const placeItems = [];
    let optionsNames = ["Сначала дешёвые", "Сначала дорогие", "Сначала ближе"];
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
    renderBlock("search-results-block", `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="sort">
                ${options.join("")}
            </select>
        </div>
    </div>
    <ul class="results-list js-results-list">
    ${placeItems.join("")}
    </ul>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFxQjtJQUNqRSxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE9BQWdCLEVBQUUsSUFBYTtJQUN0RSxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFdEIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sb0JBQW9CLE1BQU0sV0FBVyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLFdBQVcsTUFBTSxXQUFXLENBQUM7U0FDckM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUMvQixVQUFVLENBQUMsSUFBSSxDQUNiOzs7OzZCQUlxQixLQUFLLENBQUMsRUFBRSxjQUFjLElBQUksQ0FBQyxTQUFTLENBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQ1gsaUJBQWlCLEtBQUssQ0FBQyxLQUFLOzZDQUNRLEtBQUssQ0FBQyxLQUFLOzs7O3FCQUluQyxLQUFLLENBQUMsSUFBSTttQ0FDSSxLQUFLLENBQUMsS0FBSzs7dUVBRXlCLEtBQUssQ0FBQyxVQUNyRTtnREFDd0MsS0FBSyxDQUFDLFdBQVc7Ozs7Ozs7OztTQVN4RCxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxVQUFVLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7a0JBTWMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Ozs7O01BSzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztLQUVwQixDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tIFwiLi9saWIuanNcIjtcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4vc3RvcmUvZG9tYWluL3BsYWNlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgIFwic2VhcmNoLXJlc3VsdHMtYmxvY2tcIixcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImJlZm9yZS1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZTogc3RyaW5nKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgIFwic2VhcmNoLXJlc3VsdHMtYmxvY2tcIixcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHMtYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL25vLXJlc3VsdHMucG5nXCIgLz5cbiAgICAgIDxwPiR7cmVhc29uTWVzc2FnZX08L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHJlc3VsdHM6IFBsYWNlW10sIHNvcnQ/OiBzdHJpbmcpIHtcbiAgY29uc3QgcGxhY2VJdGVtcyA9IFtdO1xuXG4gIGxldCBvcHRpb25zTmFtZXMgPSBbXCLQodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtVwiLCBcItCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1XCIsIFwi0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtVwiXTtcbiAgbGV0IG9wdGlvbnMgPSBvcHRpb25zTmFtZXMubWFwKChvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uID09IHNvcnQpIHtcbiAgICAgIHJldHVybiBgPG9wdGlvbiBzZWxlY3RlZD4ke29wdGlvbn08L29wdGlvbj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYDxvcHRpb24+JHtvcHRpb259PC9vcHRpb24+YDtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT0gMCkge1xuICAgIHJlc3VsdHMuZm9yRWFjaCgocGxhY2U6IFBsYWNlKSA9PiB7XG4gICAgICBwbGFjZUl0ZW1zLnB1c2goXG4gICAgICAgIGBcbiAgICAgICAgICA8bGkgY2xhc3M9XCJyZXN1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD0ke3BsYWNlLmlkfSBkYXRhLW5hbWU9JHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBwbGFjZS5uYW1lXG4gICAgICAgICl9KX0gZGF0YS1pbWFnZT0ke3BsYWNlLmltYWdlfSBjbGFzcz1cImZhdm9yaXRlcyBqcy1mYXZvcml0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz1cIiR7cGxhY2UuaW1hZ2V9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtwbGFjZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwbGFjZS5wcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAke3BsYWNlLnJlbW90ZW5lc3NcbiAgICAgICAgfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2UuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwbGFjZUl0ZW1zLnB1c2goYDxsaSBjbGFzcz1cInJlc3VsdFwiPtCU0LDQvdC90YvQtSDQvtGC0YHRg9GC0YHQstGD0Y7RgjwvbGk+YCk7XG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICBcInNlYXJjaC1yZXN1bHRzLWJsb2NrXCIsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNvcnRcIj5cbiAgICAgICAgICAgICAgICAke29wdGlvbnMuam9pbihcIlwiKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3QganMtcmVzdWx0cy1saXN0XCI+XG4gICAgJHtwbGFjZUl0ZW1zLmpvaW4oXCJcIil9XG4gICAgPC91bD5cbiAgICBgXG4gICk7XG59XG4iXX0=
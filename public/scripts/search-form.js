import { renderBlock } from './lib.js';
export function renderSearchFormBlock() {
    const dateNow = new Date(Date.now());
    const currentDate = dateNow.toLocaleDateString('en-CA');
    const getLastDayOfNextMonth = () => {
        let lastDayOfNextMonth = new Date(dateNow);
        lastDayOfNextMonth.setMonth(lastDayOfNextMonth.getMonth() + 2, 0);
        return lastDayOfNextMonth.toLocaleDateString('en-CA');
    };
    const checkInDefault = () => {
        let defaultDayIn = new Date(dateNow);
        defaultDayIn.setDate(defaultDayIn.getDate() + 1);
        return defaultDayIn.toLocaleDateString('en-CA');
    };
    const checkOutDefault = () => {
        let defaultDayOut = new Date(checkInDefault());
        defaultDayOut.setDate(defaultDayOut.getDate() + 2);
        return defaultDayOut.toLocaleDateString('en-CA');
    };
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDefault()}" min="${currentDate}" max="${getLastDayOfNextMonth()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDefault()}" min="${currentDate}" max="${getLastDayOfNextMonth()}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    const searchForm = document.getElementById('search-form-block');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputCity = searchForm.querySelector('#city');
        const inputCheckIn = searchForm.querySelector('#check-in-date');
        const inputCheckOut = searchForm.querySelector('#check-out-date');
        const inputMaxPrice = searchForm.querySelector('#max-price');
        ;
        const searchFormData = {
            city: inputCity.value,
            checkin: new Date(inputCheckIn.value).toLocaleString('en-CA'),
            checkout: new Date(inputCheckOut.value).toLocaleString('en-CA'),
            maxPrice: Boolean(inputMaxPrice.value) ? +inputMaxPrice.value : null
        };
        const search = (searchFormData) => {
            console.log(searchFormData);
        };
        search(searchFormData);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCO0lBRW5DLE1BQU0sT0FBTyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4RCxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtRQUNqQyxJQUFJLGtCQUFrQixHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN2RCxDQUFDLENBQUM7SUFFRixNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLElBQUksYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEQsQ0FBQyxDQUFDO0lBR0YsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxjQUFjLEVBQUUsVUFBVSxXQUFXLFVBQVUscUJBQXFCLEVBQUU7Ozs7NERBSXJFLGVBQWUsRUFBRSxVQUFVLFdBQVcsVUFBVSxxQkFBcUIsRUFBRTs7Ozs7Ozs7Ozs7O0tBWTlILENBQ0YsQ0FBQztJQUdGLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDOUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXFCLENBQUM7UUFDcEYsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBcUIsQ0FBQztRQUN0RixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBcUIsQ0FBQztRQU9oRixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQW9CO1lBQ3RDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQy9ELFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdEUsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsY0FBK0IsRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKCkge1xuXG4gIGNvbnN0IGRhdGVOb3c6IERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlTm93LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTtcblxuICBjb25zdCBnZXRMYXN0RGF5T2ZOZXh0TW9udGggPSAoKSA9PiB7XG4gICAgbGV0IGxhc3REYXlPZk5leHRNb250aCA9IG5ldyBEYXRlKGRhdGVOb3cpO1xuICAgIGxhc3REYXlPZk5leHRNb250aC5zZXRNb250aChsYXN0RGF5T2ZOZXh0TW9udGguZ2V0TW9udGgoKSArIDIsIDApO1xuICAgIHJldHVybiBsYXN0RGF5T2ZOZXh0TW9udGgudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpXG4gIH07XG5cbiAgY29uc3QgY2hlY2tJbkRlZmF1bHQgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHREYXlJbiA9IG5ldyBEYXRlKGRhdGVOb3cpO1xuICAgIGRlZmF1bHREYXlJbi5zZXREYXRlKGRlZmF1bHREYXlJbi5nZXREYXRlKCkgKyAxKTtcbiAgICByZXR1cm4gZGVmYXVsdERheUluLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrT3V0RGVmYXVsdCA9ICgpID0+IHtcbiAgICBsZXQgZGVmYXVsdERheU91dCA9IG5ldyBEYXRlKGNoZWNrSW5EZWZhdWx0KCkpO1xuICAgIGRlZmF1bHREYXlPdXQuc2V0RGF0ZShkZWZhdWx0RGF5T3V0LmdldERhdGUoKSArIDIpO1xuICAgIHJldHVybiBkZWZhdWx0RGF5T3V0LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKVxuICB9O1xuXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrSW5EZWZhdWx0KCl9XCIgbWluPVwiJHtjdXJyZW50RGF0ZX1cIiBtYXg9XCIke2dldExhc3REYXlPZk5leHRNb250aCgpfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tPdXREZWZhdWx0KCl9XCIgbWluPVwiJHtjdXJyZW50RGF0ZX1cIiBtYXg9XCIke2dldExhc3REYXlPZk5leHRNb250aCgpfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKTtcblxuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0tYmxvY2snKTtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaW5wdXRDaXR5ID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCcjY2l0eScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRDaGVja0luID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCcjY2hlY2staW4tZGF0ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRDaGVja091dCA9IHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBpbnB1dE1heFByaWNlID0gc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCcjbWF4LXByaWNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGludGVyZmFjZSBJU2VhcmNoRm9ybURhdGEge1xuICAgICAgY2l0eTogc3RyaW5nLFxuICAgICAgY2hlY2tpbjogRGF0ZSB8IHN0cmluZyxcbiAgICAgIGNoZWNrb3V0OiBEYXRlIHwgc3RyaW5nLFxuICAgICAgbWF4UHJpY2U/OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaEZvcm1EYXRhOiBJU2VhcmNoRm9ybURhdGEgPSB7XG4gICAgICBjaXR5OiBpbnB1dENpdHkudmFsdWUsXG4gICAgICBjaGVja2luOiBuZXcgRGF0ZShpbnB1dENoZWNrSW4udmFsdWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1DQScpLFxuICAgICAgY2hlY2tvdXQ6IG5ldyBEYXRlKGlucHV0Q2hlY2tPdXQudmFsdWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1DQScpLFxuICAgICAgbWF4UHJpY2U6IEJvb2xlYW4oaW5wdXRNYXhQcmljZS52YWx1ZSkgPyArIGlucHV0TWF4UHJpY2UudmFsdWUgOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0IHNlYXJjaCA9IChzZWFyY2hGb3JtRGF0YTogSVNlYXJjaEZvcm1EYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hGb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgc2VhcmNoKHNlYXJjaEZvcm1EYXRhKTtcbiAgfSk7XG5cbn1cbiJdfQ==
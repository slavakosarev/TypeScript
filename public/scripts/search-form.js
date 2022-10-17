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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCO0lBRW5DLE1BQU0sT0FBTyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4RCxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtRQUNqQyxJQUFJLGtCQUFrQixHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN2RCxDQUFDLENBQUM7SUFFRixNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLElBQUksYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEQsQ0FBQyxDQUFDO0lBR0YsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxjQUFjLEVBQUUsVUFBVSxXQUFXLFVBQVUscUJBQXFCLEVBQUU7Ozs7NERBSXJFLGVBQWUsRUFBRSxVQUFVLFdBQVcsVUFBVSxxQkFBcUIsRUFBRTs7Ozs7Ozs7Ozs7O0tBWTlILENBQ0YsQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDOUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQXFCLENBQUM7UUFDcEYsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBcUIsQ0FBQztRQUN0RixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBcUIsQ0FBQztRQU9oRixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQW9CO1lBQ3RDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSztZQUNyQixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQy9ELFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdEUsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsY0FBK0IsRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpIHtcclxuXHJcbiAgY29uc3QgZGF0ZU5vdzogRGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZU5vdy50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XHJcblxyXG4gIGNvbnN0IGdldExhc3REYXlPZk5leHRNb250aCA9ICgpID0+IHtcclxuICAgIGxldCBsYXN0RGF5T2ZOZXh0TW9udGggPSBuZXcgRGF0ZShkYXRlTm93KTtcclxuICAgIGxhc3REYXlPZk5leHRNb250aC5zZXRNb250aChsYXN0RGF5T2ZOZXh0TW9udGguZ2V0TW9udGgoKSArIDIsIDApO1xyXG4gICAgcmV0dXJuIGxhc3REYXlPZk5leHRNb250aC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJylcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja0luRGVmYXVsdCA9ICgpID0+IHtcclxuICAgIGxldCBkZWZhdWx0RGF5SW4gPSBuZXcgRGF0ZShkYXRlTm93KTtcclxuICAgIGRlZmF1bHREYXlJbi5zZXREYXRlKGRlZmF1bHREYXlJbi5nZXREYXRlKCkgKyAxKTtcclxuICAgIHJldHVybiBkZWZhdWx0RGF5SW4udG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tPdXREZWZhdWx0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRlZmF1bHREYXlPdXQgPSBuZXcgRGF0ZShjaGVja0luRGVmYXVsdCgpKTtcclxuICAgIGRlZmF1bHREYXlPdXQuc2V0RGF0ZShkZWZhdWx0RGF5T3V0LmdldERhdGUoKSArIDIpO1xyXG4gICAgcmV0dXJuIGRlZmF1bHREYXlPdXQudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpXHJcbiAgfTtcclxuXHJcblxyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcclxuICAgIGBcclxuICAgIDxmb3JtPlxyXG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+LS0hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrSW5EZWZhdWx0KCl9XCIgbWluPVwiJHtjdXJyZW50RGF0ZX1cIiBtYXg9XCIke2dldExhc3REYXlPZk5leHRNb250aCgpfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja091dERlZmF1bHQoKX1cIiBtaW49XCIke2N1cnJlbnREYXRlfVwiIG1heD1cIiR7Z2V0TGFzdERheU9mTmV4dE1vbnRoKCl9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9mb3JtPlxyXG4gICAgYFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0tYmxvY2snKTtcclxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dENpdHkgPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Q2hlY2tJbiA9IHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcignI2NoZWNrLWluLWRhdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRDaGVja091dCA9IHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0TWF4UHJpY2UgPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNtYXgtcHJpY2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGludGVyZmFjZSBJU2VhcmNoRm9ybURhdGEge1xyXG4gICAgICBjaXR5OiBzdHJpbmcsXHJcbiAgICAgIGNoZWNraW46IERhdGUgfCBzdHJpbmcsXHJcbiAgICAgIGNoZWNrb3V0OiBEYXRlIHwgc3RyaW5nLFxyXG4gICAgICBtYXhQcmljZT86IG51bWJlciB8IHN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRm9ybURhdGE6IElTZWFyY2hGb3JtRGF0YSA9IHtcclxuICAgICAgY2l0eTogaW5wdXRDaXR5LnZhbHVlLFxyXG4gICAgICBjaGVja2luOiBuZXcgRGF0ZShpbnB1dENoZWNrSW4udmFsdWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1DQScpLFxyXG4gICAgICBjaGVja291dDogbmV3IERhdGUoaW5wdXRDaGVja091dC52YWx1ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLUNBJyksXHJcbiAgICAgIG1heFByaWNlOiBCb29sZWFuKGlucHV0TWF4UHJpY2UudmFsdWUpID8gKyBpbnB1dE1heFByaWNlLnZhbHVlIDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2ggPSAoc2VhcmNoRm9ybURhdGE6IElTZWFyY2hGb3JtRGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hGb3JtRGF0YSlcclxuICAgIH07XHJcblxyXG4gICAgc2VhcmNoKHNlYXJjaEZvcm1EYXRhKTtcclxuICB9KTtcclxuXHJcbn1cclxuIl19
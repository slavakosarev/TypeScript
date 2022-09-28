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
            <input id="check-out-date" type="date" value="${checkOutDefault()}" min="${dateNow}" max="${getLastDayOfNextMonth()}" name="checkout" />
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCO0lBRW5DLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4RCxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtRQUNqQyxJQUFJLGtCQUFrQixHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN2RCxDQUFDLENBQUE7SUFFRCxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakQsQ0FBQyxDQUFBO0lBRUQsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLElBQUksYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEQsQ0FBQyxDQUFBO0lBRUQsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxjQUFjLEVBQUUsVUFBVSxXQUFXLFVBQVUscUJBQXFCLEVBQUU7Ozs7NERBSXJFLGVBQWUsRUFBRSxVQUFVLE9BQU8sVUFBVSxxQkFBcUIsRUFBRTs7Ozs7Ozs7Ozs7O0tBWTFILENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpIHtcblxuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZU5vdy50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XG5cbiAgY29uc3QgZ2V0TGFzdERheU9mTmV4dE1vbnRoID0gKCkgPT4ge1xuICAgIGxldCBsYXN0RGF5T2ZOZXh0TW9udGggPSBuZXcgRGF0ZShkYXRlTm93KTtcbiAgICBsYXN0RGF5T2ZOZXh0TW9udGguc2V0TW9udGgobGFzdERheU9mTmV4dE1vbnRoLmdldE1vbnRoKCkgKyAyLCAwKTtcbiAgICByZXR1cm4gbGFzdERheU9mTmV4dE1vbnRoLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKVxuICB9XG5cbiAgY29uc3QgY2hlY2tJbkRlZmF1bHQgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHREYXlJbiA9IG5ldyBEYXRlKGRhdGVOb3cpO1xuICAgIGRlZmF1bHREYXlJbi5zZXREYXRlKGRlZmF1bHREYXlJbi5nZXREYXRlKCkgKyAxKTtcbiAgICByZXR1cm4gZGVmYXVsdERheUluLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKVxuICB9XG5cbiAgY29uc3QgY2hlY2tPdXREZWZhdWx0ID0gKCkgPT4ge1xuICAgIGxldCBkZWZhdWx0RGF5T3V0ID0gbmV3IERhdGUoY2hlY2tJbkRlZmF1bHQoKSk7XG4gICAgZGVmYXVsdERheU91dC5zZXREYXRlKGRlZmF1bHREYXlPdXQuZ2V0RGF0ZSgpICsgMik7XG4gICAgcmV0dXJuIGRlZmF1bHREYXlPdXQudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tJbkRlZmF1bHQoKX1cIiBtaW49XCIke2N1cnJlbnREYXRlfVwiIG1heD1cIiR7Z2V0TGFzdERheU9mTmV4dE1vbnRoKCl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja091dERlZmF1bHQoKX1cIiBtaW49XCIke2RhdGVOb3d9XCIgbWF4PVwiJHtnZXRMYXN0RGF5T2ZOZXh0TW9udGgoKX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==
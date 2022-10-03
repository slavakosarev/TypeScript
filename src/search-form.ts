import { renderBlock } from './lib.js';

export function renderSearchFormBlock() {

  const dateNow: Date = new Date(Date.now());
  const currentDate = dateNow.toLocaleDateString('en-CA');

  const getLastDayOfNextMonth = () => {
    let lastDayOfNextMonth = new Date(dateNow);
    lastDayOfNextMonth.setMonth(lastDayOfNextMonth.getMonth() + 2, 0);
    return lastDayOfNextMonth.toLocaleDateString('en-CA')
  };

  const checkInDefault = () => {
    let defaultDayIn = new Date(dateNow);
    defaultDayIn.setDate(defaultDayIn.getDate() + 1);
    return defaultDayIn.toLocaleDateString('en-CA')
  };

  const checkOutDefault = () => {
    let defaultDayOut = new Date(checkInDefault());
    defaultDayOut.setDate(defaultDayOut.getDate() + 2);
    return defaultDayOut.toLocaleDateString('en-CA')
  };

  renderBlock(
    'search-form-block',
    `
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
    `
  )
}

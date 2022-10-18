import { responseToJson, dateToUnixStamp } from './search';
import { APIlocal } from './APIlocal';
import { renderToast } from './lib';

export function book(placeId: string | number, checkInDate: Date | null, checkOutDate: Date | null) {

  if (placeId && checkInDate && checkOutDate) {

    const data = responseToJson(fetch(
      `http://localhost:3030/places/${placeId}?` +
      `checkInDate=${dateToUnixStamp(checkInDate)}&` +
      `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
      { method: 'PATCH' }
    ));

    if (data) {

      const bookRes = {
        'id': placeId,
        'checkIn': checkInDate.getTime(),
        'checkOut': checkOutDate.getTime()
      }

      APIlocal.set('booked', bookRes)

      renderToast(
        { text: `Вы забронировали номер ${placeId} с ${new Date(checkInDate).toLocaleString('ru-RU')} по ${new Date(checkOutDate).toLocaleString('ru-RU')}`, type: 'success' },
        { name: 'Ок', handler: () => { console.log('Уведомление закрыто') } }
      )
    }
  }
  else {
    return false
  }
}

export function bookStart() {

  document.querySelectorAll('.result-info--footer button').forEach((elt) => {
    elt.addEventListener('click', (ev: MouseEvent) => {

      const checkInDate: Date = new Date(document.getElementById('check-in-date').getAttribute('value'));
      const checkOutDate: Date = new Date(document.getElementById('check-out-date').getAttribute('value'));
      const target = ev.target as Element;
      const placeId: string | number = target.closest('.result').getAttribute('id').substring(5);

      book(placeId, checkInDate, checkOutDate);
    });
  });
}

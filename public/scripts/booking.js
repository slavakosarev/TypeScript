import { responseToJson, dateToUnixStamp } from './search.js';
import { APIlocal } from './APIlocal.js';
import { renderToast } from './lib.js';
export function book(placeId, checkInDate, checkOutDate) {
  if (placeId && checkInDate && checkOutDate) {
    const data = responseToJson(fetch(`http://localhost:3030/places/${placeId}?` +
      `checkInDate=${dateToUnixStamp(checkInDate)}&` +
      `checkOutDate=${dateToUnixStamp(checkOutDate)}&`, { method: 'PATCH' }));
    if (data) {
      const bookRes = {
        'id': placeId,
        'checkIn': checkInDate.getTime(),
        'checkOut': checkOutDate.getTime()
      };
      APIlocal.set('booked', bookRes);
      renderToast({ text: `Вы забронировали номер ${placeId} с ${new Date(checkInDate).toLocaleString('ru-RU')} по ${new Date(checkOutDate).toLocaleString('ru-RU')}`, type: 'success' }, { name: 'Ок', handler: () => { console.log('Уведомление закрыто'); } });
    }
  }
  else {
    return false;
  }
}
export function bookStart() {
  document.querySelectorAll('.result-info--footer button').forEach((elt) => {
    elt.addEventListener('click', (ev) => {
      const checkInDate = new Date(document.getElementById('check-in-date').getAttribute('value'));
      const checkOutDate = new Date(document.getElementById('check-out-date').getAttribute('value'));
      const target = ev.target;
      const placeId = target.closest('.result').getAttribute('id').substring(5);
      book(placeId, checkInDate, checkOutDate);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib29raW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVwQyxNQUFNLFVBQVUsSUFBSSxDQUFDLE9BQXdCLEVBQUUsV0FBd0IsRUFBRSxZQUF5QjtJQUVoRyxJQUFJLE9BQU8sSUFBSSxXQUFXLElBQUksWUFBWSxFQUFFO1FBRTFDLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQy9CLGdDQUFnQyxPQUFPLEdBQUc7WUFDMUMsZUFBZSxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUc7WUFDOUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FDcEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLEVBQUU7WUFFUixNQUFNLE9BQU8sR0FBRztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDaEMsVUFBVSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUU7YUFDbkMsQ0FBQTtZQUVELFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBRS9CLFdBQVcsQ0FDVCxFQUFFLElBQUksRUFBRSwwQkFBMEIsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQ3RLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQ3RFLENBQUE7U0FDRjtLQUNGO1NBQ0k7UUFDSCxPQUFPLEtBQUssQ0FBQTtLQUNiO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTO0lBRXZCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3ZFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFjLEVBQUUsRUFBRTtZQUUvQyxNQUFNLFdBQVcsR0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25HLE1BQU0sWUFBWSxHQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyRyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBaUIsQ0FBQztZQUNwQyxNQUFNLE9BQU8sR0FBb0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNGLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2VUb0pzb24sIGRhdGVUb1VuaXhTdGFtcCB9IGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCB7IEFQSWxvY2FsIH0gZnJvbSAnLi9BUElsb2NhbCc7XG5pbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gJy4vbGliJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2socGxhY2VJZDogc3RyaW5nIHwgbnVtYmVyLCBjaGVja0luRGF0ZTogRGF0ZSB8IG51bGwsIGNoZWNrT3V0RGF0ZTogRGF0ZSB8IG51bGwpIHtcblxuICBpZiAocGxhY2VJZCAmJiBjaGVja0luRGF0ZSAmJiBjaGVja091dERhdGUpIHtcblxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZVRvSnNvbihmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMzAvcGxhY2VzLyR7cGxhY2VJZH0/YCArXG4gICAgICBgY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZgICtcbiAgICAgIGBjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tPdXREYXRlKX0mYCxcbiAgICAgIHsgbWV0aG9kOiAnUEFUQ0gnIH1cbiAgICApKTtcblxuICAgIGlmIChkYXRhKSB7XG5cbiAgICAgIGNvbnN0IGJvb2tSZXMgPSB7XG4gICAgICAgICdpZCc6IHBsYWNlSWQsXG4gICAgICAgICdjaGVja0luJzogY2hlY2tJbkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAnY2hlY2tPdXQnOiBjaGVja091dERhdGUuZ2V0VGltZSgpXG4gICAgICB9XG5cbiAgICAgIEFQSWxvY2FsLnNldCgnYm9va2VkJywgYm9va1JlcylcblxuICAgICAgcmVuZGVyVG9hc3QoXG4gICAgICAgIHsgdGV4dDogYNCS0Ysg0LfQsNCx0YDQvtC90LjRgNC+0LLQsNC70Lgg0L3QvtC80LXRgCAke3BsYWNlSWR9INGBICR7bmV3IERhdGUoY2hlY2tJbkRhdGUpLnRvTG9jYWxlU3RyaW5nKCdydS1SVScpfSDQv9C+ICR7bmV3IERhdGUoY2hlY2tPdXREYXRlKS50b0xvY2FsZVN0cmluZygncnUtUlUnKX1gLCB0eXBlOiAnc3VjY2VzcycgfSxcbiAgICAgICAgeyBuYW1lOiAn0J7QuicsIGhhbmRsZXI6ICgpID0+IHsgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKSB9IH1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2tTdGFydCgpIHtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0LWluZm8tLWZvb3RlciBidXR0b24nKS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXY6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgICAgY29uc3QgY2hlY2tJbkRhdGU6IERhdGUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2staW4tZGF0ZScpLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgICBjb25zdCBjaGVja091dERhdGU6IERhdGUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stb3V0LWRhdGUnKS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICBjb25zdCBwbGFjZUlkOiBzdHJpbmcgfCBudW1iZXIgPSB0YXJnZXQuY2xvc2VzdCgnLnJlc3VsdCcpLmdldEF0dHJpYnV0ZSgnaWQnKS5zdWJzdHJpbmcoNSk7XG5cbiAgICAgIGJvb2socGxhY2VJZCwgY2hlY2tJbkRhdGUsIGNoZWNrT3V0RGF0ZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl19

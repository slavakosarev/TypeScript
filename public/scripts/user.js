import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avatarUrl, favoriteItemsAmount) {
    const items = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `);
}
;
export function getUserData() {
    const item = localStorage.getItem('user');
    if (item)
        try {
            const user = JSON.parse(item);
            if (typeof user === 'object' && 'userName' in user && 'avatarUrl' in user)
                return { userName: user['userName'], avatarUrl: user['avatarUrl'] };
        }
        catch (error) {
            throw new Error(error);
        }
    return null;
}
;
export function getFavoritesAmount() {
    const amount = localStorage.getItem('FavoritesAmount');
    if (amount && !isNaN(Number(amount)))
        return +amount;
    else
        return 0;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFNBQWlCLEVBQUUsbUJBQTRCO0lBRS9GLE1BQU0sS0FBSyxHQUFvQixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUVqRyxXQUFXLENBQ1QsWUFBWSxFQUNaOztpQ0FFNkIsU0FBUyxVQUFVLFFBQVE7OzRCQUVoQyxRQUFROztrQ0FFRixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsS0FBSzs7OztLQUl4RixDQUNGLENBQUM7QUFDSixDQUFDO0FBQUEsQ0FBQztBQU9GLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE1BQU0sSUFBSSxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbEQsSUFBSSxJQUFJO1FBQ04sSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksSUFBSTtnQkFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFBO1NBQ3RFO1FBQ0QsT0FBTyxLQUFLLEVBQUU7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3ZCO0lBQ0gsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBQUEsQ0FBQztBQUVGLE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsTUFBTSxNQUFNLEdBQVksWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hFLElBQUksTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDOztRQUNaLE9BQU8sQ0FBQyxDQUFDO0FBQ2hCLENBQUM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKHVzZXJOYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50PzogbnVtYmVyKSB7XHJcblxyXG4gIGNvbnN0IGl0ZW1zOiBudW1iZXIgfCBzdHJpbmcgPSBCb29sZWFuKGZhdm9yaXRlSXRlbXNBbW91bnQpID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJztcclxuXHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICAndXNlci1ibG9jaycsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHthdmF0YXJVcmx9XCIgYWx0PVwiJHt1c2VyTmFtZX1cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke0Jvb2xlYW4oZmF2b3JpdGVJdGVtc0Ftb3VudCkgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtpdGVtc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICApO1xyXG59O1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgYXZhdGFyVXJsOiBzdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpOiBVc2VyIHwgbnVsbCB7XHJcbiAgY29uc3QgaXRlbTogc3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuXHJcbiAgaWYgKGl0ZW0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyOiB1bmtub3duID0gSlNPTi5wYXJzZShpdGVtKTtcclxuICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSAnb2JqZWN0JyAmJiAndXNlck5hbWUnIGluIHVzZXIgJiYgJ2F2YXRhclVybCcgaW4gdXNlcilcclxuICAgICAgICByZXR1cm4geyB1c2VyTmFtZTogdXNlclsndXNlck5hbWUnXSwgYXZhdGFyVXJsOiB1c2VyWydhdmF0YXJVcmwnXSB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIHJldHVybiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVzQW1vdW50KCk6IG51bWJlciB7XHJcbiAgY29uc3QgYW1vdW50OiB1bmtub3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0Zhdm9yaXRlc0Ftb3VudCcpO1xyXG4gIGlmIChhbW91bnQgJiYgIWlzTmFOKE51bWJlcihhbW91bnQpKSlcclxuICAgIHJldHVybiArYW1vdW50O1xyXG4gIGVsc2UgcmV0dXJuIDA7XHJcbn07XHJcbiJdfQ==
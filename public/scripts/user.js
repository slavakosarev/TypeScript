import { renderBlock } from './lib';
import { APIlocal } from './APIlocal';
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
    const item = APIlocal.get('user');
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
    const amount = APIlocal.get('FavoritesAmount');
    if (amount && !isNaN(Number(amount)))
        return +amount;
    else
        return 0;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QyxNQUFNLFVBQVUsZUFBZSxDQUFDLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxtQkFBNEI7SUFFL0YsTUFBTSxLQUFLLEdBQW9CLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBRWpHLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixTQUFTLFVBQVUsUUFBUTs7NEJBRWhDLFFBQVE7O2tDQUVGLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxLQUFLOzs7O0tBSXhGLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFBQSxDQUFDO0FBT0YsTUFBTSxVQUFVLFdBQVc7SUFDekIsTUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUxQyxJQUFJLElBQUk7UUFFTixJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJO2dCQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUE7U0FDdEU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDdkI7SUFDSCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxVQUFVLGtCQUFrQjtJQUVoQyxNQUFNLE1BQU0sR0FBVyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFdkQsSUFBSSxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUE7O1FBQ1gsT0FBTyxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliJztcbmltcG9ydCB7IEFQSWxvY2FsIH0gZnJvbSAnLi9BUElsb2NhbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlck5hbWU6IHN0cmluZywgYXZhdGFyVXJsOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ/OiBudW1iZXIpIHtcblxuICBjb25zdCBpdGVtczogbnVtYmVyIHwgc3RyaW5nID0gQm9vbGVhbihmYXZvcml0ZUl0ZW1zQW1vdW50KSA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgic7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyVXJsfVwiIGFsdD1cIiR7dXNlck5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7Qm9vbGVhbihmYXZvcml0ZUl0ZW1zQW1vdW50KSA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2l0ZW1zfVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn07XG5cbnR5cGUgVXNlciA9IHtcbiAgdXNlck5hbWU6IHVua25vd24sXG4gIGF2YXRhclVybDogdW5rbm93blxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKCk6IFVzZXIgfCBudWxsIHtcbiAgY29uc3QgaXRlbTogc3RyaW5nID0gQVBJbG9jYWwuZ2V0KCd1c2VyJyk7XG5cbiAgaWYgKGl0ZW0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcjogdW5rbm93biA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICBpZiAodHlwZW9mIHVzZXIgPT09ICdvYmplY3QnICYmICd1c2VyTmFtZScgaW4gdXNlciAmJiAnYXZhdGFyVXJsJyBpbiB1c2VyKVxuICAgICAgICByZXR1cm4geyB1c2VyTmFtZTogdXNlclsndXNlck5hbWUnXSwgYXZhdGFyVXJsOiB1c2VyWydhdmF0YXJVcmwnXSB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgIH1cbiAgcmV0dXJuIG51bGxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZXNBbW91bnQoKTogbnVtYmVyIHtcblxuICBjb25zdCBhbW91bnQ6IHN0cmluZyA9IEFQSWxvY2FsLmdldCgnRmF2b3JpdGVzQW1vdW50Jyk7XG5cbiAgaWYgKGFtb3VudCAmJiAhaXNOYU4oTnVtYmVyKGFtb3VudCkpKVxuICAgIHJldHVybiArYW1vdW50XG4gIGVsc2UgcmV0dXJuIDA7XG59O1xuIl19
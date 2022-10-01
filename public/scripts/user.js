import { renderBlock } from './lib.js';
export function renderUserBlock(name, linkOnAvatar, favoriteItemsAmount) {
    // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 0;
    // const hasFavoriteItems = favoriteItemsAmount ? true : false;
    const items = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${linkOnAvatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsWUFBb0IsRUFBRSxtQkFBMkI7SUFDN0YsMEVBQTBFO0lBQzFFLCtEQUErRDtJQUMvRCxNQUFNLEtBQUssR0FBb0IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFFakcsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFlBQVksVUFBVSxJQUFJOzs0QkFFL0IsSUFBSTs7a0NBRUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEtBQUs7Ozs7S0FJeEYsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKG5hbWU6IHN0cmluZywgbGlua09uQXZhdGFyOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlcikge1xuICAvLyBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAwO1xuICAvLyBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgaXRlbXM6IG51bWJlciB8IHN0cmluZyA9IEJvb2xlYW4oZmF2b3JpdGVJdGVtc0Ftb3VudCkgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2xpbmtPbkF2YXRhcn1cIiBhbHQ9XCIke25hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtCb29sZWFuKGZhdm9yaXRlSXRlbXNBbW91bnQpID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7aXRlbXN9XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuIl19
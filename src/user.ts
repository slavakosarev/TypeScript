import { renderBlock } from './lib.js';

export function renderUserBlock(name: string, linkOnAvatar: string, favoriteItemsAmount: number) {
  // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 0;
  // const hasFavoriteItems = favoriteItemsAmount ? true : false;
  const items: number | string = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${linkOnAvatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `
  );
}

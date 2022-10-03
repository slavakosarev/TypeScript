import { renderBlock } from './lib.js';

export function renderUserBlock(userName: string, avatarUrl: string, favoriteItemsAmount?: number) {

  const items: number | string = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `
  );
};

type User = {
  userName: string;
  avatarUrl: string
};

export function getUserData(): User | null {
  const item: string = localStorage.getItem('user');

  if (item)
    try {
      const user: unknown = JSON.parse(item);
      if (typeof user === 'object' && 'userName' in user && 'avatarUrl' in user)
        return { userName: user['userName'], avatarUrl: user['avatarUrl'] }
    }
    catch (error) {
      throw new Error(error)
    }
  return null
};

export function getFavoritesAmount(): number {
  const amount: unknown = localStorage.getItem('FavoritesAmount');
  if (amount && !isNaN(Number(amount)))
    return +amount;
  else return 0;
};

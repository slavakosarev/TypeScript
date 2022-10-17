import { renderSearchFormBlock } from './search-form';
import { renderSearchStubBlock } from './search-results';
import { toggleFavoriteItem } from './toggleFavorites';
import { renderUserBlock } from './user';
import { bookStart } from './booking';
import { renderToast } from './lib';

window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock('', '', 0);
  renderSearchFormBlock();
  renderSearchStubBlock();
  toggleFavoriteItem();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );
  setTimeout(() => {
    bookStart()
  }, 500)
})

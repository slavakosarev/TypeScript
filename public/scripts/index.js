import { renderSearchFormBlock } from './search-form';
import { renderSearchStubBlock } from './search-results';
import { toggleFavoriteItem } from './toggleFavorites';
import { renderUserBlock } from './user';
import { renderToast } from './lib';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('', '', 0);
    renderSearchFormBlock();
    renderSearchStubBlock();
    toggleFavoriteItem();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVwQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLHFCQUFxQixFQUFFLENBQUM7SUFDeEIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLFdBQVcsQ0FDVCxFQUFFLElBQUksRUFBRSwyREFBMkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQ3RGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQ3pFLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclNlYXJjaEZvcm1CbG9jayB9IGZyb20gJy4vc2VhcmNoLWZvcm0nO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoU3R1YkJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cyc7XG5pbXBvcnQgeyB0b2dnbGVGYXZvcml0ZUl0ZW0gfSBmcm9tICcuL3RvZ2dsZUZhdm9yaXRlcyc7XG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYic7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJVc2VyQmxvY2soJycsICcnLCAwKTtcbiAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKCk7XG4gIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpO1xuICB0b2dnbGVGYXZvcml0ZUl0ZW0oKTtcbiAgcmVuZGVyVG9hc3QoXG4gICAgeyB0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgnLCB0eXBlOiAnc3VjY2VzcycgfSxcbiAgICB7IG5hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4geyBjb25zb2xlLmxvZygn0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpIH0gfVxuICApO1xufSlcbiJdfQ==
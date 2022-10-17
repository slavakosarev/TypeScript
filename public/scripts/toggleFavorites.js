import { APIlocal } from './APIlocal';
export function toggleFavoriteItem() {
    setTimeout(() => {
        document.querySelectorAll('[data-fav]').forEach((item) => {
            item.addEventListener('click', (event) => {
                if (!(event.target instanceof HTMLDivElement)) {
                    return;
                }
                else {
                    const target = event.target;
                    const id = target.dataset.fav;
                    if (!item.classList.contains('active')) {
                        const id = event.target.dataset.fav.toString();
                        const favoriteItems = APIlocal.get('favoriteItems');
                        const favItemsObj = JSON.parse(favoriteItems);
                        const newItemToLS = {
                            'id': id,
                            'name': target.closest('.result-container').querySelectorAll('.result-info--header p')[0].textContent,
                            'image': target.closest('.result-container').querySelectorAll('.result-img')[0].getAttribute('src')
                        };
                        if (favItemsObj == null) {
                            const favItemsNew = [];
                            favItemsNew.push(newItemToLS);
                            APIlocal.set('favoriteItems', JSON.parse(JSON.stringify(favItemsNew)));
                        }
                        else {
                            favItemsObj.push(newItemToLS);
                            APIlocal.set('favoriteItems', favItemsObj);
                        }
                        target.classList.add('active');
                    }
                    else {
                        const favoriteItems = APIlocal.get('favoriteItems');
                        const favoriteObj = JSON.parse(favoriteItems);
                        favoriteObj.forEach((favorite, index) => {
                            if (favorite.id === id) {
                                favoriteObj.splice(index, 1);
                            }
                        });
                        if (favoriteObj.length) {
                            APIlocal.set('favoriteItems', favoriteObj);
                        }
                        target.classList.remove('active');
                    }
                }
                const favoritesAmount = JSON.parse(APIlocal.get('favoriteItems'));
                if (favoritesAmount) {
                    const len = +favoritesAmount.length;
                    const favoritesCount = len || 0;
                    document.querySelectorAll('p.fav')[0].innerHTML = `<i class="heart-icon active"></i>${favoritesCount}`;
                }
            });
        });
    }, 1000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlRmF2b3JpdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RvZ2dsZUZhdm9yaXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3RDLE1BQU0sVUFBVSxrQkFBa0I7SUFFaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksY0FBYyxDQUFDLEVBQUU7b0JBQzdDLE9BQU87aUJBQ1I7cUJBQ0k7b0JBQ0gsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXdCLENBQUM7b0JBQzlDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ3RDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDL0MsTUFBTSxhQUFhLEdBQWtCLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ25FLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzlDLE1BQU0sV0FBVyxHQUFHOzRCQUNsQixJQUFJLEVBQUUsRUFBRTs0QkFDUixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVzs0QkFDckcsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3lCQUNwRyxDQUFBO3dCQUVELElBQUksV0FBVyxJQUFJLElBQUksRUFBRTs0QkFDdkIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzRCQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN4RTs2QkFDSTs0QkFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzRCQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQzt5QkFDNUM7d0JBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2hDO3lCQUNJO3dCQUNILE1BQU0sYUFBYSxHQUFrQixRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNuRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUU5QyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTs0QkFFekQsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDdEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQzlCO3dCQUNILENBQUMsQ0FBQyxDQUFBO3dCQUNGLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTs0QkFDdEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQzVDO3dCQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjtnQkFDRCxNQUFNLGVBQWUsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFFOUUsSUFBSSxlQUFlLEVBQUU7b0JBRW5CLE1BQU0sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDcEMsTUFBTSxjQUFjLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFFaEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvQ0FBb0MsY0FBYyxFQUFFLENBQUM7aUJBQ3hHO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUVWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElsb2NhbCB9IGZyb20gJy4vQVBJbG9jYWwnO1xuaW1wb3J0IHsgVEZhdm9yaXRlLCBURmF2b3JpdGVzIH0gZnJvbSAnLi90eXBlcy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlSXRlbSgpIHtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mYXZdJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZGF0YXNldC5mYXY7XG5cbiAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5mYXYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlSXRlbXM6IHN0cmluZyB8IG51bGwgPSBBUElsb2NhbC5nZXQoJ2Zhdm9yaXRlSXRlbXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZhdkl0ZW1zT2JqID0gSlNPTi5wYXJzZShmYXZvcml0ZUl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1Ub0xTID0ge1xuICAgICAgICAgICAgICAnaWQnOiBpZCxcbiAgICAgICAgICAgICAgJ25hbWUnOiB0YXJnZXQuY2xvc2VzdCgnLnJlc3VsdC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0LWluZm8tLWhlYWRlciBwJylbMF0udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICdpbWFnZSc6IHRhcmdldC5jbG9zZXN0KCcucmVzdWx0LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHQtaW1nJylbMF0uZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmF2SXRlbXNPYmogPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBmYXZJdGVtc05ldyA9IFtdO1xuICAgICAgICAgICAgICBmYXZJdGVtc05ldy5wdXNoKG5ld0l0ZW1Ub0xTKVxuICAgICAgICAgICAgICBBUElsb2NhbC5zZXQoJ2Zhdm9yaXRlSXRlbXMnLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZhdkl0ZW1zTmV3KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGZhdkl0ZW1zT2JqLnB1c2gobmV3SXRlbVRvTFMpXG4gICAgICAgICAgICAgIEFQSWxvY2FsLnNldCgnZmF2b3JpdGVJdGVtcycsIGZhdkl0ZW1zT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZUl0ZW1zOiBzdHJpbmcgfCBudWxsID0gQVBJbG9jYWwuZ2V0KCdmYXZvcml0ZUl0ZW1zJyk7XG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UoZmF2b3JpdGVJdGVtcyk7XG5cbiAgICAgICAgICAgIGZhdm9yaXRlT2JqLmZvckVhY2goKGZhdm9yaXRlOiBURmF2b3JpdGUsIGluZGV4OiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICBpZiAoZmF2b3JpdGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgZmF2b3JpdGVPYmouc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChmYXZvcml0ZU9iai5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgQVBJbG9jYWwuc2V0KCdmYXZvcml0ZUl0ZW1zJywgZmF2b3JpdGVPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYXZvcml0ZXNBbW91bnQ6IFRGYXZvcml0ZXMgPSBKU09OLnBhcnNlKEFQSWxvY2FsLmdldCgnZmF2b3JpdGVJdGVtcycpKTtcblxuICAgICAgICBpZiAoZmF2b3JpdGVzQW1vdW50KSB7XG5cbiAgICAgICAgICBjb25zdCBsZW4gPSArZmF2b3JpdGVzQW1vdW50Lmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBmYXZvcml0ZXNDb3VudCA9IGxlbiB8fCAwO1xuXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncC5mYXYnKVswXS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJoZWFydC1pY29uIGFjdGl2ZVwiPjwvaT4ke2Zhdm9yaXRlc0NvdW50fWA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSwgMTAwMClcblxufVxuIl19
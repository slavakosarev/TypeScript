export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQW9CLEVBQUUsTUFBa0I7SUFDbEUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRXJCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUU1RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0QsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUE7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlVHlwZSwgQWN0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJsb2NrKGVsZW1lbnRJZDogc3RyaW5nLCBodG1sOiBzdHJpbmcpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdChtZXNzYWdlOiBNZXNzYWdlVHlwZSwgYWN0aW9uOiBBY3Rpb25UeXBlKSB7XHJcbiAgbGV0IG1lc3NhZ2VUZXh0ID0gJyc7XHJcblxyXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcclxuICAgIG1lc3NhZ2VUZXh0ID0gYFxyXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cclxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvYXN0LW1haW4tYWN0aW9uXCI+JHthY3Rpb24/Lm5hbWUgfHwgJ9CX0LDQutGA0YvRgtGMJ308L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICByZW5kZXJCbG9jayhcclxuICAgICd0b2FzdC1ibG9jaycsXHJcbiAgICBtZXNzYWdlVGV4dFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpO1xyXG5cclxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoYWN0aW9uICE9IG51bGwgJiYgYWN0aW9uLmhhbmRsZXIgIT0gbnVsbCkge1xyXG4gICAgICAgIGFjdGlvbi5oYW5kbGVyKClcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJUb2FzdChudWxsLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
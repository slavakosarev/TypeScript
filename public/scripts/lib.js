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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3pDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUE7S0FDRjtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFNUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUNqQjtZQUNELFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFBO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJsb2NrKGVsZW1lbnRJZDogc3RyaW5nLCBodG1sOiBzdHJpbmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0KG1lc3NhZ2UsIGFjdGlvbikge1xuICBsZXQgbWVzc2FnZVRleHQgPSAnJztcblxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCAn0JfQsNC60YDRi9GC0YwnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3RvYXN0LWJsb2NrJyxcbiAgICBtZXNzYWdlVGV4dFxuICApO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpO1xuXG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgfVxuICAgICAgcmVuZGVyVG9hc3QobnVsbCwgbnVsbCk7XG4gICAgfVxuICB9XG59Il19
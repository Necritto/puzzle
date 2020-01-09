import { BaseComponent } from '../../shared/component/base/base.component.js';

export class DragAndDropComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._dragAndDrop();
  }

  _dragAndDrop() {

    let isDragging = false;

    document.addEventListener('mousedown', function (event) {

      let dragElement = event.target.closest('.images li img');

      if (!dragElement) return;

      event.preventDefault();

      dragElement.ondragstart = function () {
        return false;
      };

      let shiftX;
      let shiftY;

      startDrag(dragElement, event.clientX, event.clientY);

      function onMouseUp() {
        finishDrag();
      }

      let currentDroppable = null;

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        dragElement.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        dragElement.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.work');

        if (currentDroppable !== droppableBelow) {

          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }

      function enterDroppable(element) {
        element.style.border = '2px solid #ffa802';
        isDragging = true;
      }

      function leaveDroppable(element) {
        element.style.border = '';
        isDragging = false;
      }

      function startDrag(element, clientX, clientY) {
        if (isDragging) {
          return;
        }

        document.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseup', onMouseUp);

        shiftX = clientX - element.getBoundingClientRect().left;
        shiftY = clientY - element.getBoundingClientRect().top;

        element.style.position = 'fixed';
        element.style.margin = '0px';

        moveAt(clientX, clientY);
      }

      function finishDrag() {
        if (!isDragging) {
          return;
        }

        isDragging = false;

        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';

        document.removeEventListener('mousemove', onMouseMove);
        dragElement.removeEventListener('mouseup', onMouseUp);
      }

      function moveAt(clientX, clientY) {
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;

        let newBottom = newY + dragElement.offsetHeight;

        if (newBottom > document.documentElement.clientHeight) {

          let docBottom = document.documentElement.getBoundingClientRect().bottom;

          let scrollY = Math.min(docBottom - newBottom, 10);

          if (scrollY < 0) scrollY = 0;

          window.scrollBy(0, scrollY);

          newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
        }

        if (newY < 0) {

          let scrollY = Math.min(-newY, 10);
          if (scrollY < 0) scrollY = 0;

          window.scrollBy(0, -scrollY);
          newY = Math.max(newY, 0);
        }

        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
          newX = document.documentElement.clientWidth - dragElement.offsetWidth;
        }

        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
      }
    });
  }
}
import { BaseComponent } from '../../shared/component/base/base.component.js';

export class LoadComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._renderChar();
    this._tick();
  }

  _renderChar() {
    const text = document.querySelector('.title');
    const splitText = text.textContent.split('');

    text.innerHTML = '';

    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += `<span>${splitText[i]}</span>`;
    }
  }

  _tick() {
    let count = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const spans = [...document.querySelectorAll('span')];
      for (let i = 0; i < spans.length; i++) {
        spans[i].classList.add(`s${i}`);
      }

      const span = document.querySelector(`.s${count}`);
      span.classList.add('fade');
      count++;
      if (count === spans.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  }
}
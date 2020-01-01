import { BaseComponent } from '../../shared/component/base/base.component.js';

export class LoadComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._renderLoader();
    this._renderChar();
    this._tick();
  }

  _renderLoader() {
    this._element.innerHTML =
      `
        <header class="header">
          <h1 class="title">Puzzle</h1>
        </header>
    `;
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
    setTimeout(onTick, 100);

    function onTick() {
      const span = document.querySelectorAll('span');

      span.forEach((item) => item.classList.add('fade'));
    }

    // function complete() {
    //   clearInterval(tick);
    //   tick = null;
    // }
  }
}
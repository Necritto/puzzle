import { BaseComponent } from '../../shared/component/base/base.component.js';

export class SliderComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._sliderRender();
  }


  _sliderRender() {
    const ul = document.querySelector('.images');

    for (let i = 1; i < 50; i++) {
      ul.innerHTML += `
        <li><img src="/src/assets/Img/${i}.png" width="80px" alt="${i} img"></li>
    `;
    }

    let indexImg = 1;
    let count = 1;
    let position = 0;
    let width = 80;
    const listElems = ul.querySelectorAll('li');

    for(let li of listElems) {
      li.classList.add(`img${indexImg}`);
      indexImg++;
    }

    document.querySelector('.arrow-wrap-prev').addEventListener('click', () => {
      position += width * count;
      position = Math.min(position, 0);
      ul.style.marginLeft = position + 'px';
    });

    document.querySelector('.arrow-wrap-next').addEventListener('click', () => {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      ul.style.marginLeft = position + 'px';
    }); 
  }
}
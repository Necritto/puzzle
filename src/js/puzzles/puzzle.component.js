import { BaseComponent } from '../shared/component/base/base.component.js';
import { LoadComponent } from '../puzzles/loadComponent/load.component.js';
import { WorkAreaComponent } from '../puzzles/workAreaComponent/workArea.component.js';
import { SliderComponent } from '../puzzles/sliderComponent/slider.component.js';

export class PuzzleComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._render();
    this._initLoadPage();
    this._hideMainSection();
    this._initPuzzle();
    this._initSlider();
    // this._initSourceBtn();
  }

  _render() {
    this._element.innerHTML =
      `
      <header class="header">
        <h1 class="title">Puzzle</h1>
      </header>
      <main class="main">
        <section class="description">
          <h2 class="description__title">Puzzle</h2>
          <p class="description__text">To assemble the picture,
            drag puzzles from the storage to the work area</p>
        </section>
        <section class="section-wrapper">
          <section class="carousel">
            <div class="arrow-wrap-prev">
              <button class="arrow prev">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div class="gallery">
              <ul class="images"></ul>
            </div>
            <div class="arrow-wrap-next">
              <button class="arrow next">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </section>
          <section class="work">
            <div class="work-area"></div>
          </section>
          <section class="tooltip">
            <div class="tooltip__area">
              <img class="tooltip__lamp" src="/src/assets/Img/lamp.svg" alt="tooltim img">
              <img class="tooltip__src" src="/src/assets/Img/source.jpg" width="400px" alt="source">
            </div>
          </section>
        </section>
        <button class="play">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Press me to start
        </button>
      </main>
    `;
  }

  _hideMainSection() {
    const main = this._element.querySelector('.main');
    setTimeout(() => main.style.display = 'none', 0);
    setTimeout(() => main.style.display = '', 1400);
  }

  _initLoadPage() {
    this._load = new LoadComponent({ element: this._element.querySelector('.header') });
    setTimeout(() => this._load.hide(), 1500);
  }

  _initPuzzle() {
    this._puzzle = new WorkAreaComponent({ element: this._element.querySelector('.work') });
  }

  _initSlider() {
    this._slider = new SliderComponent({ element: this._element.querySelector('.carousel') });
  }
}
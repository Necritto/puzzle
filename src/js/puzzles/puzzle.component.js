import { BaseComponent } from '../shared/component/base/base.component.js';
import { LoadComponent } from '../puzzles/loadComponent/load.component.js';
import { WorkAreaComponent } from '../puzzles/workAreaComponent/workArea.component.js';

export class PuzzleComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._render();
    this._initLoadPage();
    this._initPuzzle();
    // this._initCarousel();
    // this._initSlider();
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
            <div class="arrow-wrap">
              <button class="arrow prev">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div class="gallery">
              <ul class="images">
                <li><img src="/src/assets/Img/1.png" width="100px" alt="first img"></li>
              </ul>
            </div>
            <button class="arrow next">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </section>
          <section class="work">
            <div class="work-area"></div>
          </section>
          <section class="tooltip">
            <div class="tooltip__area">
              <img class="tooltip_lamp" src="/src/assets/Img/lamp.svg" alt="tooltim img">
              <img class="tooltip__src" src="/src/assets/Img/source.jpg" width="400px" alt="source">
            </div>
          </section>
        </section>
      </main>
    `;
  }

  _initLoadPage() {
    this._load = new LoadComponent({ element: this._element.querySelector('.header') });
    setTimeout(() => this._load.hide(), 1500);
  }

  _initPuzzle() {
    this._puzzle = new WorkAreaComponent({ element: this._element.querySelector('.work') });
  }
}
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
          <p class="description_text">To assemble the picture,
            drag puzzles from the storage to the work area</p>
        </section>
        <section class="carousel">
          <button class="arrow prev">⇦</button>
          <div class="gallery">
            <ul class="images">
              <li><img src="#" alt="#"></li>
            </ul>
          </div>
          <button class="arrow next">⇨</button>
        </section>
        <section class="work">
          <div class="work-area"></div>
        </section>
        <section class="tooltip">
          <div class="tooltip__area">
            <img src="#" alt="#" class="tooltip__src">
          </div>
        </section>
        <section class="slider">
          <div class="sword">
            <div class="hilt"></div>
          </div>
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
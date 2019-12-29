import { BaseComponent } from '../shared/component/base/base.component.js';
import { LoadComponent } from '../puzzles/loadComponent/load.component.js';

export class PuzzleComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._render();
    this._initLoadPage();
    // this._initPuzzle();
    // this._initCarousel();
    // this._initSlider();
    // this._initSourceBtn();
  }

  _initLoadPage() {
    this._load = new LoadComponent({ element: this._element.querySelector('.title') });
  }

  _render() {
    this._element.innerHTML =
      `

    `;
  }
}
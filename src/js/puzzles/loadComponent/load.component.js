import { BaseComponent } from '../shared/component/base/base.component.js';

export class LoadComponent extends BaseComponent {
  _loadRender() {
    this._element.innerHTML =
      `
        <header class="header">
          <h1 class="title">Puzzle</h1>
        </header>
    `;
  }
}
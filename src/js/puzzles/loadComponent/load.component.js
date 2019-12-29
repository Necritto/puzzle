import { BaseComponent } from '../../shared/component/base/base.component.js';

export class LoadComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._loadRender();
  }

  _loadRender() {
    this._element.innerHTML =
      `
        <header class="header">
          <h1 class="title">Puzzle</h1>
        </header>
    `;
  }
}
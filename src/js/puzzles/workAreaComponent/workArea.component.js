import { BaseComponent } from '../../shared/component/base/base.component.js';

export class WorkAreaComponent extends BaseComponent {
  constructor( {element}) {
    super({element});
    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <section class="work">
        <div class="work-area"></div>
      </section>
    `;
  }
}
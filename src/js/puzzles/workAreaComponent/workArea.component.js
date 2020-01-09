import { BaseComponent } from '../../shared/component/base/base.component.js';

export class WorkAreaComponent extends BaseComponent {
  constructor( {element}) {
    super({element});
    this._showWorkspace();
  }

  _showWorkspace() {
    const showBtn = document.querySelector('.play');
    const section = document.querySelector('.section-wrapper');
    const dscr = document.querySelector('.description');
    const tooltip = document.querySelector('.tooltip__lamp');
    const tooltipSrc = document.querySelector('.tooltip__src');

    section.style.display = 'none';
    tooltipSrc.classList.add('hide');

    showBtn.addEventListener('click', () => {
      section.style.display = 'flex';
      showBtn.style.display = 'none';
      dscr.style.display = 'none';
    });

    tooltip.addEventListener('click', () => {
      tooltipSrc.classList.toggle('hide');
      tooltipSrc.classList.toggle('show');
    });
  }
}
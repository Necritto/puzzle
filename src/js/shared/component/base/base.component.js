export class BaseComponent {
  constructor({ element }) {
    this._element = element;
    console.log(this._element);
    
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }
}
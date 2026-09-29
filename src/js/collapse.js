export default class Collapse {
  constructor(element) {
    if (!element) {
      console.warn('Collapse: передан пустой элемент');
      return;
    }

    this.element = element;
    this.header = element.querySelector('.collapse-header');
    this.content = element.querySelector('.collapse-content');
    this.icon = element.querySelector('.collapse-icon');

    if (!this.header || !this.content) {
      console.warn('Collapse: не найдены .collapse-header или .collapse-content внутри контейнера');
      return;
    }

    this.isOpen = element.classList.contains('collapse-open');

    this._toggle = this._toggle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.header.addEventListener('click', this._toggle);

    this._applyState();
  }

  open() {
    this.isOpen = true;
    this._applyState();
  }

  close() {
    this.isOpen = false;
    this._applyState();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this._applyState();
  }

  _toggle() {
    this.toggle();
  }

  _applyState() {
    const { element, header, content, icon } = this;

    if (this.isOpen) {
      element.classList.add('collapse-open');
      const height = content.scrollHeight;
      content.style.maxHeight = `${height}px`;

      if (icon) icon.textContent = '▼';
      if (header) header.setAttribute('aria-expanded', 'true');
    } else {
      element.classList.remove('collapse-open');
      content.style.maxHeight = '0px';

      if (icon) icon.textContent = '▶';
      if (header) header.setAttribute('aria-expanded', 'false');
    }
  }

  destroy() {
    if (this.header) {
      this.header.removeEventListener('click', this._toggle);
    }
    this.element = null;
    this.header = null;
    this.content = null;
    this.icon = null;
  }
}

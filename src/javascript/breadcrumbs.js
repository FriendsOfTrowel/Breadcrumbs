export default class TrowelBreadcrumbs {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelBreadcrumb(element);
    })
  }
}

class TrowelBreadcrumb {
  constructor(element) {
    this.element = element;
    this.toggleTriggers = [].slice.call(this.element.querySelectorAll('[data-breadcrumb="toggle"]'));
    this.list = this.element.querySelector('[data-breadcrumb="list"]');

    return this.listener();
  }

  isVisible() {
    return this.list.getAttribute('data-state') === "visible";
  }

  show() {
    return this.list.setAttribute('data-state', 'visible');
  }

  hide() {
    return this.list.setAttribute('data-state', 'hidden');
  }

  touchToggle() {
    return this.isVisible() ? this.hide() : this.show();
  }


  listener() {
    return this.toggleTriggers
      .map(toggleTrigger => toggleTrigger.addEventListener('click', this.touchToggle.bind(this)));
  }
}

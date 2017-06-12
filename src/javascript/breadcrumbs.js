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

  touchToggle() {
    let newState = 'hidden';
    if (this.list.getAttribute('data-state') === "hidden") newState = 'visible';

    return this.list.setAttribute('data-state', newState)
  }

  listener() {
    return this.toggleTriggers
      .map(toggleTrigger => toggleTrigger.addEventListener('click', this.touchToggle.bind(this)));
  }
}

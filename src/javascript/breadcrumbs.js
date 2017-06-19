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

    this.events = this.events();
    this.listener();
    this.element.dispatchEvent(this.events.mounted);
    return;
  }

  isVisible() {
    return this.list.getAttribute('data-state') === "visible";
  }

  show() {
    this.element.dispatchEvent(this.events.show);
    this.list.setAttribute('data-state', 'visible');
    this.element.dispatchEvent(this.events.shown);
    return;
  }

  hide() {
    this.element.dispatchEvent(this.events.hide);
    this.list.setAttribute('data-state', 'hidden');
    this.element.dispatchEvent(this.events.hidden);
    return;
  }

  toggle() {
    this.element.dispatchEvent(this.events.toggle);
    this.isVisible() ? this.hide() : this.show();
    this.element.dispatchEvent(this.events.toggled);
    return;
  }

  events() {
    const show = new Event('trowel.breadcrumb.show');
    const shown = new Event('trowel.breadcrumb.shown');
    const hide = new Event('trowel.breadcrumb.hide');
    const hidden = new Event('trowel.breadcrumb.hidden');
    const toggle = new Event('trowel.breadcrumb.toggle');
    const toggled = new Event('trowel.breadcrumb.toggled');
    const mounted = new Event('trowel.breadcrumb.mounted');

    return { show, shown, hide, hidden, toggle, toggled, mounted };
  }


  listener() {
    return this.toggleTriggers
      .map(toggleTrigger => toggleTrigger.addEventListener('click', this.toggle.bind(this)));
  }
}

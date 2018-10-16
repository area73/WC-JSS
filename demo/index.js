import { LitElement, html, property } from '@polymer/lit-element';
import './counter';
import './menuList';

// imperative way to interact with web component
// const counter = document.querySelector('x-counter');
//counter.value = 10;
// counter.addEventListener('valueChange', (e) => console.log(e));


// Declareative template binding to interact with web component
class XApp extends LitElement {
  constructor() {
    super();
    this.customValue = 5;
  }

  render() {
    return html`
      <x-counter
        @valueChange=${(e) => this.log(e)} 
        .value="${this.customValue}">
      </x-counter>
      <jss-menulist></jss-menulist>
    `;
  }

  log(e) {
    console.log(e);
  }
}

customElements.define('x-app', XApp);

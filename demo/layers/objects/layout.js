import { LitElement, html } from '@polymer/lit-element';
import layout from '../../objects/layout';


class Layout extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return html`
    <style>
    
      .layout {
        border: 1px solid red;
      }
      .layout__item {
        border: 1px solid blue;
      }
      ${layout}
    </style>    
    `
  }


  render() {
    return html`
      ${Layout.styles}
      <h1>Layout System</h1>
      <div class="layout">
          <div class=" layout__item"><p>1/3</p></div>
          <div class=" layout__item"><p>1/3</p></div>
          <div class=" layout__item"><p>1/3</p></div>
      </div>
    `;
  }

}

customElements.define('jss-layout', Layout);

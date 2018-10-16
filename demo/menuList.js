import { LitElement, html } from '@polymer/lit-element';

class MenuList extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return html`
    <style>
      .menu-list {
        border: 1px solid #ddd;
      }
    </style>    
    `
  }


  render() {
    return html`
      ${MenuList.styles}
      <div class="menu-list">
        <h2>Menu list</h2>
        <ul>
          <li>Objects</li>
          <li><a href="">Layout</a></li>
          <li>Utilities</li>
          <li><a href=""></a></li>
        </ul>
      </div>
    `;
  }

}

customElements.define('jss-menulist', MenuList);

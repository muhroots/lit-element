import { LitElement, html } from 'lit-element'

class Book extends LitElement {
  static get properties() {
    return {
      books: { type: Array },
    };
  }

  render() {
    return html`
      <ul>
        ${this.books.map(book => html`<li>${book.title}</li>`)}
      </ul>   
    `
  }
}

customElements.define('fgn-book', Book)
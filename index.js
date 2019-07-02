import { LitElement, html } from 'lit-element'
import './book'

class BookList extends LitElement {
  static get properties() {
    return {
      books: { type: Array },
    }
  }

  constructor() {
    super()

    this.books = [
      { title: 'Game of Thrones' },
      { title: 'The Ice Dragon' }
    ];
  }

  render() {
    return html`
      <fgn-book .books="${this.books}"></fgn-book>   
    `
  }
}

customElements.define('fgn-books', BookList)
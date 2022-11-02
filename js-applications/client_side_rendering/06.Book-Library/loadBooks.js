import { html, render } from './node_modules/lit-html/lit-html.js'
import {edit, deleteBook} from './updateDeleteBook.js'

export async function load() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let books = await response.json()

    for(let b of Object.keys(books)){
        books[b]._id=b;
    }

    let tbody = document.querySelector('tbody')
    let booksTemplate = html`${Object.values(books).map(b => {
        return html`<tr id=${b._id}>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>
            <button @click=${edit}>Edit</button>
            <button @click=${deleteBook}>Delete</button>
        </td>
    </tr>`
    })}`

    render(booksTemplate, tbody)
}
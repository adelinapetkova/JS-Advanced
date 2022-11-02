import { html, render } from './node_modules/lit-html/lit-html.js'
import {add} from './addBook.js'
import {load} from './loadBooks.js'

let body = document.querySelector('body')
let bodyTemplate = html`<button id="loadBooks" @click=${load} >LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input id="titleInput" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input id="authorInput" type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit" @click=${add}>
</form>

<form id="edit-form" style="display: none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input id="titleUpdate" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input id="authorUpdate" type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save" @click=${save}>
</form>`

render(bodyTemplate, body)

async function save(e) {
    e.preventDefault()

    let idOfBookToEdit=document.querySelector('input[name="id"]').value
    let newTitle=document.getElementById('titleUpdate').value
    let newAuthor=document.getElementById('authorUpdate').value

    let response=await fetch(`http://localhost:3030/jsonstore/collections/books/${idOfBookToEdit}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: newAuthor, title: newTitle })
    })

    if(response.ok){
        load()
    }

    document.getElementById('titleUpdate').value=''
    document.getElementById('authorUpdate').value=''

    let addForm=document.getElementById('add-form')
    let editForm=document.getElementById('edit-form')

    addForm.style.display=''
    editForm.style.display='none'
}

import { load } from "./loadBooks.js";

export async function edit(e){
    let row=e.target.parentNode.parentNode;

    let response=await fetch(`http://localhost:3030/jsonstore/collections/books/${row.id}`)
    let book=await response.json()

    let addForm=document.getElementById('add-form')
    let editForm=document.getElementById('edit-form')

    addForm.style.display='none'
    editForm.style.display=''

    let newTitle=document.getElementById('titleUpdate')
    let newAuthor=document.getElementById('authorUpdate')

    newTitle.value=book.title;
    newAuthor.value=book.author;

    let idField=document.querySelector('input[name="id"]')
    idField.value=row.id
}

export async function deleteBook(e){
    let row=e.target.parentNode.parentNode;

    await fetch(`http://localhost:3030/jsonstore/collections/books/${row.id}`, { method: 'DELETE' })

    load()
}
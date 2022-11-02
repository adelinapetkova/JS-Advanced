import { load } from "./loadBooks.js"

export async function add(e) {
    e.preventDefault()
    let title = document.getElementById('titleInput').value
    let author = document.getElementById('authorInput').value

    let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            author
        })
    })

    if (response.ok) {
        load()
    }
    document.getElementById('titleInput').value = ''
    document.getElementById('authorInput').value = ''
}
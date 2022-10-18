let loadBooksBtn = document.getElementById('loadBooks')
loadBooksBtn.addEventListener('click', loadBooks)

let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', addBook)

let form = document.getElementsByTagName('form')[0]

let formHeader = document.getElementById('formHeader')
let titleInput = document.getElementById('titleInput')
let authorInput = document.getElementById('authorInput')

let bookIdToEdit='';

async function loadBooks() {
    let tbody = document.getElementById('booksTable')
    tbody.innerHTML = ''

    let response = await fetch('http://localhost:3030/jsonstore/collections/books')
    let data = await response.json()

    for (let book in data) {
        let newRow = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.textContent = data[book].title

        let td2 = document.createElement('td')
        td2.textContent = data[book].author

        let td3 = document.createElement('td')

        let editButton = document.createElement('button')
        editButton.textContent = "Edit"
        editButton.addEventListener('click', edit)

        let deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener('click', remove)

        td3.appendChild(editButton)
        td3.appendChild(deleteButton)

        newRow.appendChild(td1)
        newRow.appendChild(td2)
        newRow.appendChild(td3)

        tbody.appendChild(newRow)

        function remove(e) {
            e.preventDefault()
            fetch(`http://localhost:3030/jsonstore/collections/books/${book}`, {
                method: 'DELETE'
            })

            newRow.remove()
        }

        function edit(e) {
            e.preventDefault()
            formHeader.textContent = "Edit FORM"
            titleInput.value = data[book].title
            authorInput.value = data[book].author
            submitBtn.textContent="Save"
            bookIdToEdit=book;
        }
    }
}

async function addBook(e) {
    e.preventDefault()
    let data = new FormData(form)
    let title = data.get('title')
    let author = data.get('author')

    try {
        if (title == "" || author == "") {
            throw new Error("All fields are required!")
        }

        let data = {
            "author": author,
            "title": title
        }

        if (bookIdToEdit=='') {
            await fetch('http://localhost:3030/jsonstore/collections/books', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }else{
            await fetch(`http://localhost:3030/jsonstore/collections/books/${bookIdToEdit}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            formHeader.textContent = "FORM"
            titleInput.value = ''
            authorInput.value = ''
            submitBtn.textContent="Submit"
            bookIdToEdit='';
        }

    } catch (err) {
        alert(err.message)
    }

    document.getElementById('titleInput').value = ''
    document.getElementById('authorInput').value = ''



    loadBooks()
}
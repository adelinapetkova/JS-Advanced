function attachEvents() {
    let entriesList = document.getElementById('phonebook')

    let loadBtn = document.getElementById('btnLoad')
    let createBtn = document.getElementById('btnCreate')

    let personField = document.getElementById('person')
    let phoneField = document.getElementById('phone')

    loadBtn.addEventListener('click', loadEntries)
    createBtn.addEventListener('click', createContact)

    async function loadEntries() {
        entriesList.innerHTML = '';
        let response = await fetch('http://localhost:3030/jsonstore/phonebook')
        let data = await response.json()

        for (let entry in data) {
            let newLi = document.createElement('li')
            newLi.textContent = `${data[entry].person}: ${data[entry].phone}`;
            let deleteBtn=document.createElement('button')
            deleteBtn.textContent="Delete"
            deleteBtn.addEventListener('click', deleteEntry)
            deleteBtn.setAttribute('id', data[entry]._id)
            newLi.appendChild(deleteBtn)
            entriesList.appendChild(newLi)
        }
    }

    async function createContact() {
        let data = {
            person: personField.value.trim(),
            phone: phoneField.value.trim(),
        }

        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })

        personField.value = ''
        phoneField.value = ''
    }

    async function deleteEntry(event) {
        let idToDelete=event.target.id;

        await fetch(`http://localhost:3030/jsonstore/phonebook/${idToDelete}`, {
            method: 'DELETE'
        })

        loadEntries()
    }
}

attachEvents();
let tbody = document.getElementById('results').children[1]

let form = document.getElementById('form')
form.addEventListener('submit', addStudent)

window.addEventListener('load', loadInfo)

async function addStudent() {
    let info=new FormData(form)

    let data={
        firstName: info.get('firstName'),
        lastName: info.get('lastName'),
        facultyNumber: info.get('facultyNumber'),
        grade: info.get('grade')
    }
    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
}

async function loadInfo() {
    tbody.innerHTML=''
    let response = await fetch('http://localhost:3030/jsonstore/collections/students')
    let data = await response.json()

    for (let student in data) {
        tbody.innerHTML += `<tr>
        <td>${data[student].firstName}</td>
        <td>${data[student].lastName}</td>
        <td>${data[student].facultyNumber}</td>
        <td>${data[student].grade}</td>
    </tr>`
    }
}
function attachEvents() {
    let messagesField=document.getElementById('messages')
    let nameField = document.querySelector("input[name='author']")
    let contentField = document.querySelector("input[name='content']")

    let submitBtn = document.getElementById('submit')
    let refreshBtn = document.getElementById('refresh')

    submitBtn.addEventListener('click', submit)
    refreshBtn.addEventListener('click', refresh)

    async function submit() {
        let data = {
            author: nameField.value,
            content: contentField.value
        }

        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    async function refresh() {
        messagesField.textContent='';
        let response = await fetch('http://localhost:3030/jsonstore/messenger')
        let data = await response.json()

        for(let message in data){
            messagesField.textContent+=`${data[message].author}: ${data[message].content}\n`;
        }


    }
}

attachEvents();
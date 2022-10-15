function getInfo() {
    let id = document.getElementById('stopId')
    let stopName = document.getElementById('stopName')
    let list = document.getElementById('buses')

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${id.value}`)
        .then(response => response.json())
        .then(data => {
            stopName.textContent = data.name;
            list.innerHTML='';
            for (let bus of Object.keys(data.buses)) {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                list.appendChild(newLi);
            }
        })
        .catch(err => {
            console.log(err)
            stopName.textContent = "Error"
            list.innerHTML = '';
        })
}
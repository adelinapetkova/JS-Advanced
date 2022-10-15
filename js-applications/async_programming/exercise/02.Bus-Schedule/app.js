function solve() {
    let currentStopName = 'Depot';
    let currentStopId = 'depot';
    let nextStopId = '0361';
    let infoSpan = document.getElementById('info')

    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                currentStopId = nextStopId;
                nextStopId = data.next;
                infoSpan.children[0].textContent = `Next stop ${data.name}`
                currentStopName = data.name;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(error => {
                console.log(error)
                infoSpan.children[0].textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    function arrive() {
        infoSpan.children[0].textContent = `Arriving at ${currentStopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
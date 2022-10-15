function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add');

    let areInputFieldsValid = true;
    let sections = document.getElementsByTagName('section');
    addButton.addEventListener('click', addArticle);

    let inputFields = [task, description, date];

    for (let field of inputFields) {
        if (field.value == null) {
            areInputFieldsValid = false;
            break;
        }
    }

    function addArticle() {
        console.log("hello")
        let articleDivSection = sections[1].children[1];
        if (areInputFieldsValid) {
            let article = document.createElement('article');

            let header = document.createElement('h3');
            header.textContent = task.value;
            console.log("hello")

            let descriptionElement = document.createElement('p');
            descriptionElement.textContent = "Description: " + description.value;

            let dateElement = document.createElement('p');
            dateElement.textContent = "Due Date: " + date.value;

            let divSection = document.createElement('div');
            divSection.className = "flex";

            let startButton = document.createElement('button');
            startButton.textContent = "Start";
            startButton.className = "green";

            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.className = "red";

            divSection.appendChild(startButton);
            divSection.appendChild(deleteButton);

            article.appendChild(header);
            article.appendChild(descriptionElement);
            article.appendChild(dateElement);
            article.appendChild(divSection);

            articleDivSection.appendChild(article);

        }
    }



}
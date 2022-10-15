function generateReport() {
    let dataRows=document.querySelectorAll('tbody tr');
    let headersRowElements=document.querySelectorAll('input[type="checkbox"]');

    let indicesOfColumnsToInclude=[];

    for(let i=0; i<headersRowElements.length; i++){
        if(headersRowElements[i].checked){
            indicesOfColumnsToInclude.push(i);
        }
    }

    let arrayOfObjects=[];

    for(let dataRow of dataRows){
        let currentObject={};
        let dataInCurrentRow=dataRow.children;

        for(let index of indicesOfColumnsToInclude){
            let key=(headersRowElements[index].parentElement.textContent).toLowerCase();
            currentObject[key.slice(0, key.length-1)]=dataInCurrentRow[index].textContent;
        }

        arrayOfObjects.push(currentObject);
    }

    document.getElementById('output').textContent=JSON.stringify(arrayOfObjects);

}
function solve() {
  let textareas=document.getElementsByTagName('textarea');
  let inputField=textareas[0];
  let outputField=textareas[1];

  let btns=document.getElementsByTagName('button');
  let generateBtn=btns[0];
  let buyBtn=btns[1];

  generateBtn.addEventListener('click', addRowInTable);
  buyBtn.addEventListener('click', buyProducts);

  function addRowInTable(){
    let arrayWithNewProducts=JSON.parse(inputField.value);

    for(let newProduct of arrayWithNewProducts){
      let newRow=document.createElement('tr');
      
      // image
      let imgTD=document.createElement('td')
      let imgHtml=document.createElement('img');
      imgHtml.src=newProduct.img;
      imgTD.appendChild(imgHtml);

      // name
      let nameTD=document.createElement('td');
      let nameHtml=document.createElement('p');
      nameHtml.textContent=newProduct["name"];
      nameTD.appendChild(nameHtml);

      // price
      let priceTD=document.createElement('td');
      let priceHtml=document.createElement('p');
      priceHtml.textContent=Number(newProduct["price"]);
      priceTD.appendChild(priceHtml);

      // decoration factor
      let decFactorTD=document.createElement('td');
      let decFactorHtml=document.createElement('p');
      decFactorHtml.textContent=newProduct["decFactor"];
      decFactorTD.appendChild(decFactorHtml);

      // checkbox
      let checkboxTD=document.createElement('td');
      let checkboxInput=document.createElement('input');
      checkboxInput.type='checkbox';
      checkboxTD.appendChild(checkboxInput);

      newRow.appendChild(imgTD);
      newRow.appendChild(nameTD);
      newRow.appendChild(priceTD);
      newRow.appendChild(decFactorTD);
      newRow.appendChild(checkboxTD);

      document.getElementsByTagName('tbody')[0].appendChild(newRow);
    }
  }

  function buyProducts(){
    let boughtProductsNames=[]
    let totalPrice=0;
    let sumOfDecFactors=0;
    let rowsArray=document.getElementsByTagName('tbody')[0].children;

    for(let row of rowsArray){
      if(row.children[4].children[0].checked){
        boughtProductsNames.push(row.children[1].children[0].textContent);
        totalPrice+=Number(row.children[2].children[0].textContent);
        sumOfDecFactors+=Number(row.children[3].children[0].textContent);
      }
    }

    outputField.value+=`Bought furniture: ${boughtProductsNames.join(', ')}\r\n`;
    outputField.value+=`Total price: ${totalPrice.toFixed(2)}\r\n`;
    outputField.value+=`Average decoration factor: ${sumOfDecFactors/boughtProductsNames.length}`
  }
}
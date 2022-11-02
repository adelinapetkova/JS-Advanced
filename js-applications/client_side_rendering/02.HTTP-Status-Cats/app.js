import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js'

let cardTemplate=(data) => html `
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250">
    <div class="info">
        <button class="showBtn" @click=${onClick}>Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>`;

let result=cats.map(cardTemplate)
let main=document.getElementById('allCats')
render(result, main)

function onClick(e){
    let cat=e.target.parentNode;
    let result=cat.querySelector('.status').style.display;

    if(result=="block"){
        cat.querySelector('.status').style.display="none";
    }else{
        cat.querySelector('.status').style.display="block";
    }

}
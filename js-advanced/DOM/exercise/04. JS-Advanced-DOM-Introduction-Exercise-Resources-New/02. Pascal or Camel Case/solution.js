function solve() {
  let text=document.getElementById('text').value;
  let textCase=document.getElementById('naming-convention').value;

  let words=text.split(' ');

  let result='';

  if(textCase=='Camel Case'){
    result+=words[0].toLowerCase();
    for(let i=1; i<words.length; i++){
      result+=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }else if(textCase=='Pascal Case'){
    for(let i=0; i<words.length; i++){
      result+=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }else{
    result='Error!'
  }

  document.getElementById('result').textContent=result;
}
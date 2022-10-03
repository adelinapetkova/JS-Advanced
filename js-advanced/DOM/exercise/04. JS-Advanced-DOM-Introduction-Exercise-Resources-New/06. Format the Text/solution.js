function solve() {
  let text=document.getElementById('input').value.split('.').filter(s => s.length!=0);
  let output=document.getElementById('output');
  let paragraph='';

  while(text.length>0){
    let textForParagraph=text.splice(0,3).join('. ')+'.';
    let p=document.createElement('p');
    p.textContent=textForParagraph;
    output.appendChild(p)
  }

}
function create(words) {
   let mainDiv=document.getElementById('content');
   for(let word of words){
      let newDiv=document.createElement('div');
      newDiv.addEventListener('click', showContent);

      let newParagraph=document.createElement('p');
      newParagraph.textContent=word;
      newParagraph.style.display='none';

      newDiv.appendChild(newParagraph);

      mainDiv.appendChild(newDiv);
   }

   function showContent(event){
      let paragraph=event.target.children[0];
      paragraph.style.display='';
   }
}
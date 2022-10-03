function search() {
   let towns=document.querySelectorAll('ul#towns li');

   let searchedText=document.getElementById('searchText').value;

   let counter=0;

   for(let town of towns){
      let name=town.textContent;
      town.style.fontWeight='none';
      town.style.textDecoration='none';
   }

   for(let town of towns){
      let name=town.textContent;
      if(name.includes(searchedText)){
         counter+=1;
         town.style.fontWeight='bolder';
         town.style.textDecoration='underline';
      }
   }

   document.getElementById('result').textContent=`${counter} matches found`;

}

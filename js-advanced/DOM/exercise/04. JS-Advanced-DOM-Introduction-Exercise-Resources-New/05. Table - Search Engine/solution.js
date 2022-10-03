function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows=document.querySelectorAll('tbody tr');
   let searchedText=document.getElementById('searchField');

   function onClick() {
      for(let row of rows){
         row.classList.remove('select');
         if(row.innerHTML.includes(searchedText.value)){
            row.className='select';
         }
      }
      searchedText.value='';
   }
}
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input=document.querySelector('#inputs textarea');
      let outputBestRestaurant=document.querySelector('#bestRestaurant p');
      let outputBestWorkers=document.querySelector('#workers p');
      let dataArray=JSON.parse(input.value);
      let restaurants={};

      for(let restaurant of dataArray){
         let [restaurantName, workersString]=restaurant.split(' - ');
         let workerSalaryPairs=workersString.split(', ');

         if(restaurants[restaurantName]==undefined){
            restaurants[restaurantName]={}
         }

         for(let pair of workerSalaryPairs){
            let [workerName, workerSalary]=pair.split(' ');

            restaurants[restaurantName][workerName]=Number(workerSalary);
         }
      }

      let bestRestaurantName="some name";
      let bestAverageSalary=0;
      let bestRestaurantWorkersObject;

      for(let restaurant in restaurants){
         let sumSalaries=0;
         for(let worker in restaurants[restaurant]){
            sumSalaries+=restaurants[restaurant][worker];
         }

         let averageSalaryOfCurrentRestaurant=sumSalaries/(Object.keys(restaurants[restaurant]).length);

         if (averageSalaryOfCurrentRestaurant>bestAverageSalary){
            bestAverageSalary=averageSalaryOfCurrentRestaurant;
            bestRestaurantName=restaurant;
            bestRestaurantWorkersObject=restaurants[restaurant];
         }
      }

      let sortableWorkers=[];
      for(let worker in bestRestaurantWorkersObject){
         sortableWorkers.push([worker, bestRestaurantWorkersObject[worker]])
      }

      sortableWorkers.sort(function(a,b){return b[1]-a[1]});

      outputBestWorkersString='';
      for(let el of sortableWorkers){
         outputBestWorkersString+=`Name: ${el[0]} With Salary: ${el[1]}`;
         outputBestWorkersString+=' ';  
      }

      outputBestRestaurant.textContent=`Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${sortableWorkers[0][1].toFixed(2)}`;
      outputBestWorkers.textContent=outputBestWorkersString;
   }
}
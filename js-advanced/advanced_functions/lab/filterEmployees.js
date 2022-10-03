function filterEmployees(data, criteria){
    data=JSON.parse(data);
    let [property, value]=criteria.split('-');
    let filteredEmployees;
    if(criteria==='all'){
        filteredEmployees=data;
    }else{
        filteredEmployees=data.filter(emp => emp[property]===value);
    }

    let place=0;
    for(let person of filteredEmployees){
        console.log(`${place}. ${person.first_name} ${person.last_name} - ${person.email}`)
        place++;
    }
}

filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'all')
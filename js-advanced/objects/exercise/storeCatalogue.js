function storeCatalogue(productsArray){
    productsArray.sort();

    let currentLetter='';
    for(let el of productsArray){
        if(el.charAt(0)!=currentLetter){
            currentLetter=el.charAt(0);
            console.log(currentLetter);
        }

        let [name, price]=el.split(' : ')
        console.log(`  ${name}: ${price}`)
    }
}

storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999', 
    'Rolex : 100000', 
    'Rollon : 10',
    'Rali Car : 2000000', 
    'Pesho : 0.000001', 
    'Barrel : 10'
])
function fruit(type, weigthInGrams, price){
    let weightInKilograms=weigthInGrams/1000;
    let neededMoney=weightInKilograms*price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);





function carsFactory(arr){
    let brands={};

    for(let data of arr){
        let [brand, model, quantity]=data.split(' | ');
        if(brands[brand]==undefined){
            brands[brand]={}
        }

        if(brands[brand][model]==undefined){
            brands[brand][model]=0;
        }

        brands[brand][model]+=Number(quantity);
    }

    for(let brand in brands){
        console.log(brand);
        let models=brands[brand];
        for(let model in models){
            console.log(`###${model} -> ${models[model]}`)
        }
    }
}

carsFactory([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'
])
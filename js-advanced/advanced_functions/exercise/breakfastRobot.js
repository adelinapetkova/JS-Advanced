function solution(){
    // protein, carbohydrate, fat, flavour
    let recipes={
        apple: [0, 1, 0, 2],
        lemonade: [0, 10, 0, 20],
        burger: [0, 5, 7, 3],
        eggs: [5, 0, 1, 1],
        turkey: [10, 10, 10, 10]
    }

    let stock={
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function(command){
        let splitCommand=command.split(' ');
        if(splitCommand[0]=='restock'){
            stock[splitCommand[1]]=Number(splitCommand[2]);
            return "Success";
        }else if(splitCommand[0]=='prepare'){
            let quantity=Number(splitCommand[2]);

            let neededProtein=Number(recipes[splitCommand[1]][0])*quantity;
            let neededCarbohydrate=Number(recipes[splitCommand[1]][1])*quantity;
            let neededFat=Number(recipes[splitCommand[1]][2])*quantity;
            let neededFlavour=Number(recipes[splitCommand[1]][3])*quantity;

            if(neededProtein<=stock.protein && neededCarbohydrate<=stock.carbohydrate && neededFat<=stock.fat && neededFlavour<=stock.flavour){
                stock.protein-=neededProtein;
                stock.carbohydrate-=neededCarbohydrate;
                stock.fat-=neededFat;
                stock.flavour-=neededFlavour;
                return "Success";
            }else{
                let product;
                if(neededProtein>stock.protein){
                    product='protein';
                }else if(neededCarbohydrate>stock.carbohydrate){
                    product='carbohydrate';
                }else if(neededFat>stock.fat){
                    product='fat';
                }else if(neededFlavour>stock.flavour){
                    product='flavour';
                }

                return `Error: not enough ${product} in stock`;
            }
        }else if(splitCommand[0]=='report'){
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

    }
}


let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4"));
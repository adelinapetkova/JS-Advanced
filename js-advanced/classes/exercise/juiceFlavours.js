function juiceFlavours(arr){
    let juiceQuantity={};
    let bottles={};

    for(let data of arr){
        let [flavour, quantity]=data.split(' => ');
        if(juiceQuantity[flavour]==undefined){
            juiceQuantity[flavour]=0;
        }

        juiceQuantity[flavour]+=Number(quantity);

        let newBottles=Math.floor(juiceQuantity[flavour]/1000)
        if(bottles[flavour]==undefined && newBottles>0){
            bottles[flavour]=0;
        }
        if(bottles[flavour]!=undefined){
            bottles[flavour]+=newBottles;
            juiceQuantity[flavour]-=newBottles*1000;
        }
    }

    for(let fl in bottles){
        console.log(`${fl} => ${bottles[fl]}`)
    }
}

juiceFlavours(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])
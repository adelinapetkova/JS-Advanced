function lowestPrice(data){
    const products={};

    for(let line of data){
        const info=line.split(' | ');
        const infoTown=info[0];
        const infoProduct=info[1];
        const infoPrice=Number(info[2]);

        if(products[infoProduct]==undefined){
            products[infoProduct]={town:infoTown, price:infoPrice};
        }else{
            if(products[infoProduct].price>infoPrice){
                products[infoProduct].price=infoPrice;
                products[infoProduct].town=infoTown;
            }
        }
    }

    for(let pr in products){
        console.log(`${pr} -> ${products[pr].price} (${products[pr].town})`)
    }
}

lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])
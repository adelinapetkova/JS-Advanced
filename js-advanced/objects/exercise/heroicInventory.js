function heroicInventory(heroesArray){
    const heroesData=[]
    for(let hero of heroesArray){
        const currentHero={}

        let data=hero.split(' / ');
        let name=data[0]
        let level=data[1]

        currentHero.name=name;
        currentHero.level=Number(level);
        currentHero.items=[];

        if(data.length==3){
            let itemsString=data[2]
            currentHero.items=itemsString.split(', ');
        }

        heroesData.push(currentHero);
    }

    console.log(JSON.stringify(heroesData))
}

heroicInventory(['Isacc / 25',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])
function carFactory(requirements){
    const car={};
    const smallEngine={ power: 90, volume: 1800}
    const normalEngine={ power: 120, volume: 2400}
    const monsterEngine={ power: 200, volume: 3500}

    const hatchback={type: 'hatchback', color: null}
    const coupe={type: 'coupe', color: null}


    car.model=requirements.model;

    if(requirements.power<=90){
        car.engine=smallEngine;
    }else if(requirements.power<=120){
        car.engine=normalEngine;
    }else{
        car.engine=monsterEngine;
    }

    if(requirements.carriage=='hatchback'){
        car.carriage=hatchback;
        car.carriage.color=requirements.color;
    }else{
        car.carriage=coupe;
        car.carriage.color=requirements.color;
    }

    if(requirements.wheelsize%2==0){
        requirements.wheelsize--;
    }

    car.wheels=[requirements.wheelsize, requirements.wheelsize, requirements.wheelsize, requirements.wheelsize]

    return car;

}

console.log(carFactory({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17
}))
function roadRadar(speed, area){
    speed=Number(speed);
    let speedLimit;

    switch(area){
        case 'motorway':speedLimit=130;break;
        case 'interstate':speedLimit=90;break;
        case 'city':speedLimit=50;break;
        case 'residential':speedLimit=20;break;
    }

    let difference=speed-speedLimit;

    if(speed<=speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }else if(difference<=20){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    }else if(difference<=40){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    }else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
    }

}

roadRadar('200', 'motorway')
function cookingByNumbers(number, ...commands){
    number=Number(number);

    for(let i=0; i<commands.length; i++){
        switch(commands[i]){
            case 'chop':number/=2;break;
            case 'dice':number=Math.sqrt(number);break;
            case 'spice':number+=1;break;
            case 'bake':number*=3;break;
            case 'fillet':number-=20*number/100;break;
        }

        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
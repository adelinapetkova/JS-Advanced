function carsFactory(arr){
    cars={};

    function create(name){
        cars[name]={};
    }

    function createInherits(name, parentName){
        cars[name]=Object.create(cars[parentName]);
    }

    function set(name, key, value){
        cars[name][key]=value;
    }

    function print(name){
        let obj=cars[name];
        let result=[];

        for(let key in obj){
            result.push(`${key}:${obj[key]}`);
        }

        console.log(result.join(','));
    }

    for(let com of arr){
        let commandParts=com.split(' ');

        if(commandParts[0]=='create' && commandParts.length==4){
            createInherits(commandParts[1], commandParts[3]);
        }else if(commandParts[0]=='create'){
            create(commandParts[1]);
        }else if(commandParts[0]=='set'){
            set(commandParts[1], commandParts[2], commandParts[3]);
        }else{
            print(commandParts[1]);
        }
    }

}

carsFactory(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])
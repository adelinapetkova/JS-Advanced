function args(...arguments){
    let typesCount={};

    for(let arg of arguments){
        console.log(`${typeof arg}: ${arg}`);
        if(typesCount[typeof arg]==undefined){
            typesCount[typeof arg]=0;
        }

        typesCount[typeof arg]+=1;
    }

    let sortable = [];
    for (let type in typesCount) {
        sortable.push([type, typesCount[type]]);
    }

    sortable.sort((a,b) => b[1]-a[1]);

    for(let t of sortable){
        console.log(`${t[0]} = ${t[1]}`)
    }
}

args('cat', 42, function () { console.log('Hello world!'); }, 34, 43, 'd')
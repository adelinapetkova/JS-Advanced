function townsToJSON(table){
    const result=[]
    const headings=table[0].slice(2, -2).split(' | ');

    for(let i=1; i<table.length; i++){
        const obj={};
        let info=table[i].slice(2, -2).split(' | ');
        for(let j=0; j<headings.length; j++){
            if(headings[j]=='Latitude' || headings[j]=='Longitude'){
                obj[headings[j]]=Number(Number(info[j]).toFixed(2))
            }else{
                obj[headings[j]]=info[j]
            }
        }

        result.push(obj)
    }

    return JSON.stringify(result);
}

console.log(townsToJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]))


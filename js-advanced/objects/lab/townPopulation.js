function townPopulation(townsArray){
    const result={};

    for(let pair of townsArray){
        let data=pair.split(' <-> ')
        let town=data[0];
        let pop=Number(data[1]);

        if(result[town]==undefined){
            result[town]=0;
        }

        result[town]+=pop;
    }

    for(let town in result){
        console.log(`${town} : ${result[town]}`)
    }
}

townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])
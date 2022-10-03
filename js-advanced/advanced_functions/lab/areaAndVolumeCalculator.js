function solve(area, vol, input) {
    let arr=JSON.parse(input);
    let result=[];

    for(let obj of arr){
        let current={}
        current.area=area.call(obj);
        current.volume=vol.call(obj);
        result.push(current);
    }

    return result;
    
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)
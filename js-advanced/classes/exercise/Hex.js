class Hex{
    constructor(value){
        this.value=value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let hexString = this.value.toString(16).toUpperCase();
        return '0x'+hexString;
    }

    plus(num){
        let newValue=0
        if(Number.isInteger(num)){
            newValue=this.value+num
        }else{
            newValue=this.value+num.valueOf();
        }

        return new Hex(newValue);
    }

    minus(num){
        let newValue=0
        if(Number.isInteger(num)){
            newValue=this.value-num
        }else{
            newValue=this.value-num.valueOf();
        }

        return new Hex(newValue);
    }

    parse(str){
        return parseInt(str, 16);
    }
}

let FF = new Hex(255);

console.log(FF.toString());

console.log(FF.valueOf() + 1 == 256);

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(a.minus(6).toString());
console.log(FF.parse('AAA'));


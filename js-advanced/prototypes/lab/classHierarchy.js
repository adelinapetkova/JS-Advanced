function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return 0;
        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius(){
            if(this.units=='mm'){
                return this._radius*10;
            }else if(this.units=='m'){
                return this._radius/100;
            }else{
                return this._radius;
            }
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width(){
            if(this.units=='mm'){
                return this._width*10;
            }else if(this.units=='m'){
                return this._width/100;
            }else{
                return this._width;
            }
        }

        get height(){
            if(this.units=='mm'){
                return this._height*10;
            }else if(this.units=='m'){
                return this._height/100;
            }else{
                return this._height;
            }
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let classes = classHierarchy();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;


let f = new Figure();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString());

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString());

r.changeUnits('cm');
console.log(r.area); // 12 
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483 
console.log(c.toString())

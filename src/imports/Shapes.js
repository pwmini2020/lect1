// this is old school ES6 class
export class Shape {
    constructor() {
        this.colour = "White";
    }

    printColour() {
        console.log(`Colour of shape is: ${this.colour}`);
    }
}

// this is new ES7 class
export class Rectangle extends Shape {

    constructor(a, b) {
        super();
        this.dimentionOne = a;
        this.dimentionTwo = b;
    }

    rectangleEdgeColour = "white";

    printSize = () => {
        console.log(`Size is: ${this.dimentionOne * this.dimentionTwo}`);
    }
}

import Shape from './Shape.js';

class Rectangle extends Shape {
    constructor(position, rotation, scale, color, width, height) {
        super(position, rotation, scale, color);
        this.width = width;
        this.height = height;
    }
}

export default Rectangle;

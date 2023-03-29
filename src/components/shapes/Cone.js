import Shape from './Shape.js';

class Cone extends Shape {
    constructor(position, rotation, scale, color, radius, height) {
        super(position, rotation, scale, color);
        this.radius = radius;
        this.height = height;
    }
}

export default Cone;

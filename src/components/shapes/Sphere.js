import Shape from './Shape.js';

class Sphere extends Shape {
    constructor(position, rotation, scale, color, radius) {
        super(position, rotation, scale, color);
        this.radius = radius;
    }
}

export default Sphere;

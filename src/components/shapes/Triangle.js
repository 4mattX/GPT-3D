import Shape from './Shape.js';

class Triangle extends Shape {
    constructor(position, rotation, scale, color, vertexA, vertexB, vertexC) {
        super(position, rotation, scale, color);
        this.vertexA = vertexA;
        this.vertexB = vertexB;
        this.vertexC = vertexC;
    }
}

export default Triangle;

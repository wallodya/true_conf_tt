import Shape from "./abstract-shape";

class Circle extends Shape {
    get area(): number {
        throw new Error("Method not implemented.");
    }
    get perimeter(): number {
        throw new Error("Method not implemented.");
    }
}

export default Circle
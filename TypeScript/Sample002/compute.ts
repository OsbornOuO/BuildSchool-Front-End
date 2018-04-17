
enum Operators {
    add,
    minus,
    multiple,
    divide
}

interface ICalculator {
    x: number;
    y: number;
    calcutate(op: Operators): number;
}
class Calculator implements ICalculator {
    x: number;
    y: number;
    op: Operators;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    calcutate(op: Operators): number {
        switch (op) {
            case Operators.add:
                return this.x + this.y;
            case Operators.minus:
                return this.x - this.y;
            case Operators.multiple:
                return this.x * this.y;
            case Operators.divide:
                return this.x / this.y;
        }
    }
}

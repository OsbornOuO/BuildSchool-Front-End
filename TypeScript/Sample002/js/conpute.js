var Operators;
(function (Operators) {
    Operators[Operators["add"] = 0] = "add";
    Operators[Operators["minus"] = 1] = "minus";
    Operators[Operators["multiple"] = 2] = "multiple";
    Operators[Operators["divide"] = 3] = "divide";
})(Operators || (Operators = {}));
var Calculator = (function () {
    function Calculator(x, y) {
        this.x = x;
        this.y = y;
    }
    Calculator.prototype.calcutate = function (op) {
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
    };
    return Calculator;
}());
//# sourceMappingURL=conpute.js.map
function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    return this.a == this.b && this.b == this.c && this.c == this.d;
};

let s1 = new Square(2, 2, 2, 2);
let s2 = new Square(2, 3, 2, 2);

console.log(s1.isSquare());
console.log(s2.isSquare());
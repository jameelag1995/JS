class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    #innerRgb() {
        return `${this.r}, ${this.g}, ${this.b}`;
    }
    rgb() {
        return `rgb(${this.#innerRgb()})`;
    }
    hex() {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
            16
        )}`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.#innerRgb()}, ${a})`;
    }
}
const white = new Color(255, 255, 255, "white");
console.log(white.colorName);
console.log(white.rgb());
console.log(white.hex());
const red = new Color(255, 0, 0, "red");
console.log(red.colorName);
console.log(red.rgb());
console.log(red.hex());
const blue = new Color(0, 0, 255, "blue");
console.log(blue.colorName);
console.log(blue.rgb());
console.log(blue.hex());

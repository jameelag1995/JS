class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
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
    hsl() {
        let c =
            Math.max(this.r, this.g, this.b) - Math.min(this.r, this.g, this.b);
        c = c / 255;
        let l =
            (Math.max(this.r, this.g, this.b) +
                Math.min(this.r, this.g, this.b)) /
            2;
        l = l / 255;
        let s;
        if (c == 0) {
            s = 0;
        } else if (l <= 0.5) {
            s = c / (2 * l);
        } else s = c / (2 - 2 * l);
        let h;
        if (c == 0) {
            h = 0;
        } else {
            if (Math.max(this.r, this.g, this.b) == this.r) {
                h = (this.g - this.b) / 255 / c;
            } else if (Math.max(this.r, this.g, this.b) == this.g) {
                h = 2 + (this.b - this.r) / 255 / c;
            } else {
                h = 4 + (this.r - this.g) / 255 / c;
            }
        }
        h = h * 60;
        if (h < 0) {
            h = h + 360;
        }
        s = s * 100;
        l = l * 100;
        return `hsl(${Math.round(h)},${Math.round(s)}%,${Math.round(l)}%)`;
    }
}
const white = new Color(255, 255, 255, "white");
console.log(white.name);
console.log(white.rgb());
console.log(white.hex());
const red = new Color(255, 0, 0, "red");
console.log(red.name);
console.log(red.rgb());
console.log(red.hex());
const blue = new Color(60, 124, 255, "blue");
console.log(blue.name);
console.log(blue.rgb());
console.log(blue.hex());
console.log(blue.hsl());

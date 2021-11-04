import p5Types from "p5";

export class Moon {
    pos: p5Types.Vector;
    mass: number;
    r: number;
    constructor(x: number, y: number, m: number, r: number, p5: p5Types) {
        this.pos = p5.createVector(x, y);
        this.mass = m;
        this.r = r
    }



    show(p5: p5Types) {
        p5.fill(255);
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}
import p5Types from "p5";

export class Moon {
    pos: p5Types.Vector;
    mass: number;
    vel: p5Types.Vector;
    acc: p5Types.Vector;

    r: number;
    constructor(x: number, y: number, m: number, r: number, p5: p5Types) {
        this.pos = p5.createVector(x, y);
        this.mass = m;
        this.r = r
        this.vel = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
    }

    applyForce(force: p5Types.Vector) {
        let f = p5Types.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update(p5: p5Types) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show(p5: p5Types) {
        p5.fill(255);
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}
import p5Types from "p5";
import { Mover } from "./Mover";

export class Attractor {
    pos: p5Types.Vector;
    mass: number;
    r: number;
    constructor(x: number, y: number, m: number, p5: p5Types) {
        this.pos = p5.createVector(x, y);
        this.mass = m;
        this.r = p5.sqrt(this.mass) * 2
    }

    attract(mover: Mover, p5: p5Types) {
        let force = p5Types.Vector.sub(this.pos, mover.pos);
        let distanceSq = p5.constrain(force.magSq(), 25, 2500);
        let G = 1;
        let strength = G * (this.mass * mover.mass) / distanceSq;
        force.setMag(strength);
        mover.applyForce(force);
    }

    show(p5: p5Types) {
        p5.fill(255);
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}

import p5Types from "p5";
import { Moon } from "./Moon";

export class Earth {
    pos: p5Types.Vector;
    mass: number;
    r: number;
    constructor(x: number, y: number, m: number, r: number, p5: p5Types) {
        this.pos = p5.createVector(x, y);
        this.mass = m;
        this.r = r
    }

    attract(moon: Moon, p5: p5Types) {
        let force = p5Types.Vector.sub(this.pos, moon.pos);
        let distanceSq = force.magSq();
        let G = 6.57;
        let strength = G * (this.mass * moon.mass) / distanceSq;
        force.setMag(strength);

        moon.applyForce(force);
    }


    show(p5: p5Types) {
        p5.fill(255);
        p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}
import p5Types from "p5";

export class Mover {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  mass: number;
  r: number;
  constructor(x: number, y: number, m: number, p5: p5Types) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(0.2, 0.2);
    this.acc = p5.createVector(0, 0);
    this.mass = m;
    this.r = p5.sqrt(this.mass) * 2
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
    p5.stroke(255, 100);
    p5.strokeWeight(2);
    p5.ellipse(this.pos.x, this.pos.y, 32);
  }
}

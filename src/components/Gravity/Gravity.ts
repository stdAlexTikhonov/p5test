import p5Types from "p5";

export class Gravity {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  r: number;
  constructor(x: number, y: number, p5: p5Types) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.r = 16;
  }

  edges(p5: p5Types) {
    if (this.pos.y > p5.height - this.r) {
      this.pos.y = p5.height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x > p5.width - this.r) {
      this.pos.x = p5.width - this.r;
      this.vel.x *= -1;
    }

    if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  applyForce(force: p5Types.Vector) {
    this.acc.add(force);
  }

  update(p5: p5Types) {

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show(p5: p5Types) {
    p5.background(0);
    p5.stroke(255, 100);
    p5.strokeWeight(2);
    p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

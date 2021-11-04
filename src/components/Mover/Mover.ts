import p5Types from "p5";

export class Mover {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  constructor(x: number, y: number, p5: p5Types) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));

    this.acc = p5.createVector(0, 0);
  }

  update(p5: p5Types) {
    // let mouse = p5.createVector(p5.mouseX, p5.mouseY);
    // this.acc = p5Types.Vector.sub(mouse, this.pos);

    // this.acc.setMag(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

  }

  show(p5: p5Types) {
    p5.background(0);
    p5.stroke(255, 100);
    p5.strokeWeight(2);
    p5.ellipse(this.pos.x, this.pos.y, 32);
  }
}

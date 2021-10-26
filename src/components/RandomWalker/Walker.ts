import p5Types from "p5";

export class Walker {
  pos: p5Types.Vector;
  p5: p5Types;
  constructor(x: number, y: number, p5: p5Types) {
    this.pos = p5.createVector(x, y);
    this.p5 = p5;
  }

  update() {
    this.pos.x += this.p5.random(-1, 1);
    this.pos.y += this.p5.random(-1, 1);
  }

  show() {
    this.p5.stroke(255, 100);
    this.p5.strokeWeight(2);
    this.p5.point(this.pos.x, this.pos.y);
  }
}

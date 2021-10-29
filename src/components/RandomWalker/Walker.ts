import p5Types from "p5";

export class Walker {
  pos: p5Types.Vector;

  constructor(x: number, y: number, p5: p5Types) {
    this.pos = p5.createVector(x, y);
  }

  update(p5: p5Types) {
    this.pos.x += p5.random(-1, 1);
    this.pos.y += p5.random(-1, 1);
  }

  show(p5: p5Types) {
    p5.stroke(255, 100);
    p5.strokeWeight(2);
    p5.point(this.pos.x, this.pos.y);
  }
}

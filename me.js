class Me {
  
  constructor(x,y,m) {
    this.pos = createVector(x,y);
    this.mass = m;
    this.r = this.mass / 5;
  }
  
  attract(others) {
    let dir = p5.Vector.sub(this.pos, others.pos);
    let dirSq = constrain(dir.magSq(), 25, 500);
    let G = 5;
    let universalgrav = G * (this.mass * others.mass) / dirSq;
    dir.setMag(universalgrav);
    others.applyForce(dir);
  }
  
  
  show() {
    noStroke();
    fill(255, 50, 50);
    ellipse(this.pos.x, this.pos.y, this.r*2);    
  }
}
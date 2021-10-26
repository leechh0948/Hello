let others = [];
let me;

function setup() {
  createCanvas(720, 720);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(25, 50);
    others[i] = new Others(x, y, m);
  }
  me = new Me(random(width), random(height), 100);
  background(0);
}

function draw() {
 background(0, 5);
  for (let i = 0; i < others.length; i++) {
    others[i].update();
    others[i].show();
    others[i].edges();
    me.attract(others[i]);
  }
  if (mouseIsPressed) {
    me.pos.x = mouseX;
    me.pos.y = mouseY;
  }
  me.show();
}

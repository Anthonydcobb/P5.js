let bubbles = [];


function setup() {
  createCanvas(600, 400);
  // for (let i = 0; i < 10; i++) {
  //   x = random(0,600);
  //   y = random(0,600);
  //   r = random(0,50);
  //   bubbles[i] = new Bubble(x, y, r);
  // }

}


function mousePressed() {
  let r = random(10,50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);

}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();

  }


}

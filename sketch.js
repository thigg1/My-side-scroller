let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys = [];
let img;
let snowyMountain;
let snowTree;

function setup() {
  createCanvas(400, 400);
  //laoding assets
  //soundFormats('mp3');
  //mySound = loadSound("assets/energy.mp3");
  img = loadImage("snowmobile.png");
  let img2 = loadImage("Goldcoin.png");
  snowyMountain = loadImage("background.jpg");
  snowTree = loadImage("snowTree.png");

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);

  for (let i = 0; i < 30; i++) {
    enemys.push(new Baddies(img2));
  }
  
  for (let i = 0; i < 10; i++){
    enemys.push(new Dangers(snowTree));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 3 === 0) {
    open();
  } else if (sNum % 3 === 1) {
    game();
  } else if (sNum % 3 === 2) {
    close();
  }
}

function open() {
  background(20, 200, 10);
  text("Enjoy your time!", 100, 100);
  //mySound.play();
}

function close() {
  background(200, 20, 10);
  text("Thanks for playing!", 100, 100);
}

function game() {
  background("white");
  image(snowyMountain, 0, 0, 400, 400);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();

  for (let i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
}

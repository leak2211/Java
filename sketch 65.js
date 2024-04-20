let clouds = [];
let trees = [];
let mountains = [];
let collectibles = [];

function setup() {
  createCanvas(800, 600);
  
  
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(100);
    let cloud = new Cloud(x, y);
    clouds.push(cloud);
  }
  
  
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(400, height);
    let tree = new Tree(x, y);
    trees.push(tree);
  }
  
  
  for (let i = 0; i < 3; i++) {
    let x = random(width);
    let mountain = new Mountain(x);
    mountains.push(mountain);
  }
  
 
  for (let i = 0; i < 12; i++) {
    let x = random(width);
    let y = random(400, height);
    let collectible = new Collectible(x, y);
    collectibles.push(collectible);
  }
}

function draw() {
  background(23);
  
 
  for (let cloud of clouds) {
    cloud.display();
    cloud.move();
  }
  
 
  for (let tree of trees) {
    tree.display();
  }
  

  for (let mountain of mountains) {
    mountain.display();
  }
  
  
  for (let collectible of collectibles) {
    collectible.display();
  }
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(0.5, 1);
  }
  
  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 50, 30);
    ellipse(this.x + 20, this.y - 10, 50, 30);
    ellipse(this.x + 40, this.y, 50, 30);
  }
  
  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -50;
    }
  }
}

class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    fill(139, 69, 19);
    rect(this.x, this.y, 20, 60);
    fill(0, 128, 0);
    ellipse(this.x + 10, this.y - 20, 50, 50);
    ellipse(this.x - 10, this.y - 20, 50, 50);
    ellipse(this.x + 5, this.y - 40, 50, 50);
  }
}

class Mountain {
  constructor(x) {
    this.x = x;
    this.y = height;
  }
  
  display() {
    fill(169, 169, 169);
    triangle(this.x, this.y - 200, this.x + 100, this.y, this.x - 100, this.y);
  }
}

class Collectible {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 20, 20);
  }
}
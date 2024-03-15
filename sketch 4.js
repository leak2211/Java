var groundHeight;
var mountain1;
var mountain2;
var tree;
var moon;
var sun;
var darkness;
var cloudsa;
var cloudsb;
var cloudsc;





function setup() {
  createCanvas(800, 600);
  groundHeight = (height / 3) * 2;

  mountain1 = {
    x: 400,
    y: groundHeight,
    height: 320,
    width: 230
  };
  mountain2 = {
    x: 550,
    y: groundHeight,
    height: 200,
    width: 130
  };

  tree = {
    x: 150,
    y: groundHeight + 20,
    trunkWidth: 40,
    trunkHeight: 150,
    canopyWidth: 120,
    canopyHeight: 100
  };

  sun = {
    x: 150,
    y: 70,
    diameter: 80,
  };

  moon = {
    x: 700,
    y: 70,
    diameter: 80,
    brightness: 255 
  };
  cloudsa = {
    x: 50,
    y: 350,
    diameter: 80,
  };
  cloudsb = {
    x: 100,
    y: 275,
    diameter: 50,
  };
  cloudsc = {
    x: 10,
    y: 275,
    diameter: 60,
  }


  darkness = 0;
}

function draw() {
  background(150, 200, 255);
  noStroke();

  fill(255, 255, 0);
  ellipse(sun.x, sun.y + mouseX / 2, sun.diameter);

  fill(255, 255, 255);
  ellipse(cloudsa.x, cloudsa.y / 2, cloudsa.diameter);

  fill(255, 255, 255);
  ellipse(cloudsb.x, cloudsb.y / 2, cloudsb.diameter);

  fill(255, 255, 255);
  ellipse(cloudsc.x, cloudsc.y / 2, cloudsc.diameter);

  

  // Рисуем луну с учетом яркости
  fill(255, 255, 255, moon.brightness); // Цвет луны с учетом яркости
  ellipse(moon.x, moon.y, moon.diameter);

  fill(70, 200, 0);
  rect(0, groundHeight, width, height - groundHeight);

  fill(120);
  triangle(mountain1.x, mountain1.y,
    mountain1.x + mountain1.width, mountain1.y,
    mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

  triangle(mountain2.x, mountain2.y,
    mountain2.x + mountain2.width, mountain2.y,
    mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

  // Рисуем дерево
  fill(139, 69, 19); // Коричневый цвет ствола
  rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
  fill(34, 139, 34); // Зеленый цвет листвы
  ellipse(tree.x + tree.trunkWidth / 2, tree.y - tree.canopyHeight / 2, tree.canopyWidth, tree.canopyHeight);

  // Делаем сцену темной
  fill(0, darkness); // Черный цвет с учетом уровня темноты
  rect(0, 0, width, height);

  // Обновляем значения для яркости луны, позиции солнца и уровня темноты
  moon.brightness = map(mouseX, 0, width, 0, 255); // Изменяем яркость луны в зависимости от положения мыши
  cloudsa.x = map(mouseX, 900, 0, width, 100, 0);
  cloudsb.x = map(mouseX, 930, 0, width, 70, 0);
  cloudsc.x = map(mouseX, 855, 0, width, 130, 0);
  sun.x = map(mouseX, 0, width, 50, 250); // Изменяем позицию солнца в зависимости от положения мыши
  darkness = map(mouseX, 0, width, 0, 100); // Изменяем уровень темноты в зависимости от положения мыши
}

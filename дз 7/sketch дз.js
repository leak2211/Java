var robotWidths;
var robotHeights;
var headWidths;
var eyeSizes;
var noseSizes;

function setup() {
    // Создаем canvas для робота
    createCanvas(1000, 700);
    robotWidths = [70, 100, 150];
    robotHeights = [50, 120, 110];
    headWidths = [0.7, 0.8, 1.2];
    eyeSizes = [26, 30, 34];
    noseSizes = [15, 20, 25];
}

function draw() {
    // Устанавливаем обводку
    strokeWeight(2);
    // Сдвигаем начало координат вниз, чтобы роботы не перекрывались
    translate(0, 400);

    // РОБОТ 1
    // Сдвигаемся вправо от начала координат
    translate(200, 0);

    // Тело робота
    fill(200);
    rect(-robotWidths[0] / 2, -robotHeights[0] - 130, robotWidths[0], 130);
    rect(-70, -robotHeights[0] - 130, 30, 100);
    rect(40, -robotHeights[0] - 130, 30, 100);
    rect(-30, -robotHeights[0], 30, robotHeights[0]);
    rect(0, -robotHeights[0], 30, robotHeights[0]);

    // Голова робота
    fill(200);
    rect(-50 * headWidths[0], -robotHeights[0] - 230, 100 * headWidths[0], 100, 10);

    // Уши робота
    fill(255, 0, 0);
    rect(-50 * headWidths[0] - 10, -robotHeights[0] - 200, 10, 33);
    rect(50 * headWidths[0], -robotHeights[0] - 200, 10, 33);

    // Антенна робота
    fill(250, 250, 0);
    ellipse(0, -robotHeights[0] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[0] - 233, 20, 10);

    // Глаза робота
    fill(255);
    ellipse(-25 * headWidths[0], -robotHeights[0] - 200, eyeSizes[0], eyeSizes[0]);
    point(-25 * headWidths[0], -robotHeights[0] - 200);
    ellipse(25 * headWidths[0], -robotHeights[0] - 200, eyeSizes[0], eyeSizes[0]);
    point(25 * headWidths[0], -robotHeights[0] - 200);

    // Нос робота
    fill(255, 0, 0);
    triangle(0, -robotHeights[0] - 190, -noseSizes[0], -robotHeights[0] - 170, noseSizes[0], -robotHeights[0] - 170);

    // Рот робота
    noFill();
    beginShape();
    vertex(-23, -robotHeights[0] - 155);
    vertex(-15, -robotHeights[0] - 145);
    vertex(-9, -robotHeights[0] - 155);
    vertex(-1, -robotHeights[0] - 145);
    vertex(7, -robotHeights[0] - 155);
    vertex(15, -robotHeights[0] - 145);
    vertex(23, -robotHeights[0] - 155);
    endShape();

    // РОБОТ 2
    // Сдвигаемся вправо от предыдущего робота
    translate(250, 0);

    // Тело робота
    fill(200);
    rect(-robotWidths[1] / 2, -robotHeights[1] - 130, robotWidths[1], 130);
    rect(-robotWidths[1] / 2 + 30, -robotHeights[1] - 130, 30, 100);
    rect(robotWidths[1] / 2 - 30, -robotHeights[1] - 130, 30, 100);
    rect(-30, -robotHeights[1], 30, robotHeights[1]);
    rect(0, -robotHeights[1], 30, robotHeights[1]);

    // Голова робота
    fill(200);
    rect(-50 * headWidths[1], -robotHeights[1] - 230, 100 * headWidths[1], 100, 10);

    // Уши робота
    fill(255, 0, 0);
    rect(-50 * headWidths[1] - 10, -robotHeights[1] - 200, 10, 33);
    rect(50 * headWidths[1], -robotHeights[1] - 200, 10, 33);

    // Антенна робота
    fill(250, 250, 0);
    ellipse(0, -robotHeights[1] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[1] - 233, 20, 10);

    // Глаза робота
    fill(255);
    ellipse(-25 * headWidths[1], -robotHeights[1] - 200, eyeSizes[1], eyeSizes[1]);
    point(-25 * headWidths[1], -robotHeights[1] - 200);
    ellipse(25 * headWidths[1], -robotHeights[1] - 200, eyeSizes[1], eyeSizes[1]);
    point(25 * headWidths[1], -robotHeights[1] - 200);

    // Нос робота
    fill(255, 0, 0);
    triangle(0, -robotHeights[1] - 190, -noseSizes[1], -robotHeights[1] - 170, noseSizes[1], -robotHeights[1] - 170);

    // Рот робота
    noFill();
    beginShape();
    vertex(-23, -robotHeights[1] - 155);
    vertex(-15, -robotHeights[1] - 145);
    vertex(-9, -robotHeights[1] - 155);
    vertex(-1, -robotHeights[1] - 145);
    vertex(7, -robotHeights[1] - 155);
    vertex(15, -robotHeights[1] - 145);
    vertex(23, -robotHeights[1] - 155);
    endShape();

    // РОБОТ 3
    // Сдвигаемся вправо от предыдущего робота
    translate(300, 0);

    // Тело робота
    fill(200);
    rect(-robotWidths[2] / 2, -robotHeights[2] - 130, robotWidths[2], 130);
    rect(-robotWidths[2] / 2 + 30, -robotHeights[2] - 130, 30, 100);
    rect(robotWidths[2] / 2 - 30, -robotHeights[2] - 130, 30, 100);
    rect(-30, -robotHeights[2], 30, robotHeights[2]);
    rect(0, -robotHeights[2], 30, robotHeights[2]);

    // Голова робота
    fill(200);
    rect(-50 * headWidths[2], -robotHeights[2] - 230, 100 * headWidths[2], 100, 10);

    // Уши робота
    fill(255, 0, 0);
    rect(-50 * headWidths[2] - 10, -robotHeights[2] - 200, 10, 33);
    rect(50 * headWidths[2], -robotHeights[2] - 200, 10, 33);

    // Антенна робота
    fill(250, 250, 0);
    ellipse(0, -robotHeights[2] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[2] - 233, 20, 10);

    // Глаза робота
    fill(255);
    ellipse(-25 * headWidths[2], -robotHeights[2] - 200, eyeSizes[2], eyeSizes[2]);
    point(-25 * headWidths[2], -robotHeights[2] - 200);
    ellipse(25 * headWidths[2], -robotHeights[2] - 200, eyeSizes[2], eyeSizes[2]);
    point(25 * headWidths[2], -robotHeights[2] - 200);

    // Нос робота
    fill(255, 0, 0);
    triangle(0, -robotHeights[2] - 190, -noseSizes[2], -robotHeights[2] - 170, noseSizes[2], -robotHeights[2] - 170);

    // Рот робота
    noFill();
    beginShape();
    vertex(-23, -robotHeights[2] - 155);
    vertex(-15, -robotHeights[2] - 145);
    vertex(-9, -robotHeights[2] - 155);
    vertex(-1, -robotHeights[2] - 145);
    vertex(7, -robotHeights[2] - 155);
    vertex(15, -robotHeights[2] - 145);
    vertex(23, -robotHeights[2] - 155);
    endShape();
}

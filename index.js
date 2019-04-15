let w
let h
let counter
let globeImage
let stars = []

function setup() {
    w = 600
    h = 600
    bird = new Bird();
    o1 = new Obstacles();
    counter = 0;
    globeImage = loadImage("globe.png")
    stars.push(new Star());
}

function draw() {

    createCanvas(w, h);
    background(0);

    for (let i = stars.length - 1; i >= 0; i--) {
        stars[i].update();
        stars[i].show();
        if (stars[i].offscreen()) {
            stars.splice(i, 1)
        }
    }
    bird.show()
    bird.update()
    o1.show()
    o1.update()
    checkCollision();
    fill(220)
    noStroke()
    rect(0, h - 50, 165, h);
    fill(0)
    textSize(32);
    text("Score: " + nf(counter, 3), 5, h - 15)
    if (frameCount % 2 == 0) {
        stars.push(new Star());
    }

    if(frameCount < 60) {
        textSize(32);
        fill(255);
        text("Press SPACE to fly!",150, h/3);
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.velocity = bird.velocity - 5;
        bird.velocity = max(bird.velocity, -8);
    } else if (keyCode === UP_ARROW) {
        stars.push(new Star());
    } else if (keyCode === RETURN) {
        resetSketch();
    }
}

function resetSketch() {
    bird.velocity = -3;
    bird.y = h / 2;
    o1.topY = 0;
    o1.bottomY = h;
    o1.x = w / 2 - 1;
    counter = 0;
    fill(255, 0, 0, 100)
    rect(0, 0, w, h)
    stars = []
    frameCount = 0;
}

function checkCollision() {
    if ((bird.y - bird.radius < o1.topY || bird.y + bird.radius > o1.bottomY) && (o1.x < w / 2 + bird.radius && o1.x > w / 2 - 30 - bird.radius)) {
        resetSketch();
    }
}

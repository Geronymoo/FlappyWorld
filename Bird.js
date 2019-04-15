class Bird {
    constructor() {
        this.y = h / 2
        this.velocity = 0
        this.acceleration = 0.3
        this.radius = 15
    }

    show() {
        fill(255)
        imageMode(CENTER)
        image(globeImage, w / 2, this.y, this.radius * 2, this.radius * 2)
    }

    update() {
        this.velocity = this.velocity + this.acceleration
        this.y = this.y + this.velocity

        if (this.y > height - this.radius || this.y < 0 + this.radius) {
            resetSketch();
        }
    }


}
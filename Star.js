class Star {
    constructor() {
        this.x = w
        this.y = random(0, h)
        this.velocity = random(-5, -1);
        this.size= map(this.velocity, -5, -1, 3, 1);
    }

    show(){
        fill(255)
        circle(this.x, this.y , this.size)
    }

    update(){
        this.x += this.velocity
    }

    offscreen(){
        return this.x < 0;
    }

}
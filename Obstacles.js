class Obstacles {
    constructor() {
        this.topY = 0
        this.bottomY = h
        this.x = w/2-1
    }

    show() {
        fill(210, 210, 210);
        rect(this.x, 0, 30, this.topY)
        rect(this.x, this.bottomY, 30, h - this.bottomY)
    }

    update(){
        this.x =this.x -5
        if(this.x < 0-30){
            this.x = w;
            this.pickNewPositions()
        }
        if(this.x == w/2){
            counter++;
        }
    }

    pickNewPositions(){
        this.topY = random(100,400)
        this.bottomY = this.topY + random(100,150)
    }


}
class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        Matter.World.add(world, this.body);
        this.snowFlakeImg = loadImage("snow5.webp")
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snowFlakeImg,pos.x,pos.y,50,50)
        
        pop();

    }

    remove() {
        Matter.World.remove(world, this.body);
    }

};
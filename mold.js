class Mold
{
    constructor(x, y, r, heading, sensorAngle, sensorDistance, speed)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = speed;

        this.heading = heading;
        
        this.left  = new Sensor(this, -sensorAngle, sensorDistance);
        this.front = new Sensor(this, 0, sensorDistance);
        this.right = new Sensor(this, sensorAngle, sensorDistance);
    }

    update()
    {

        let l = this.left.detection();
        let f = this.front.detection();
        let r = this.right.detection();

        if(f > l && f > r) this.heading += 0;
        else{
            if(l > r) this.heading += this.left.angle;
            else if(r > l) this.heading += this.right.angle;
            else this.heading += 0;
        }
        
        this.x += cos(this.heading)*this.speed;
        this.y += sin(this.heading)*this.speed;
        
        this.x = (this.x + width) % width;
        this.y = (this.y + height) % height;

        this.left.update();
        this.front.update();
        this.right.update();
    }

    display()
    {
        noStroke();
        fill(255, 255, 255);
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }
}
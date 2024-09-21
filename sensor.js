class Sensor
{
    constructor(m, angle, distance)
    {
        this.x = m.x + cos(angle)*distance*m.r;
        this.y = m.y + sin(angle)*distance*m.r;
        this.m = m;
        this.angle = angle;
        this.distance = distance;
    }

    detection()
    {
        let i = 4*d*floor(this.y)*d*width+4*d*floor(this.x);
        return pixels[i]+pixels[i+1]+pixels[i+2]+pixels[i+3];
    }

    update()
    {
        this.x = this.m.x + cos(this.m.heading+this.angle)*this.distance*this.m.r;
        this.y = this.m.y + sin(this.m.heading+this.angle)*this.distance*this.m.r;
    
        this.x = (this.x + width) % width;
        this.y = (this.y + height) % height;
    }
}
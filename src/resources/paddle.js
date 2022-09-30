//to add velocity
export default class Rectangle{
    constructor(x, y, width, height, vy, ctx){
    this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vy = vy;
        this.ctx = ctx;
    }
    draw(){
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    get area(){
        return this.width*this.height;
    }
    
}
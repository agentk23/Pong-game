const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001;
let collided = false;

export default class Ball{
    constructor(x, y, radius, ctx){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = INITIAL_VELOCITY;
        this.ctx = ctx;
        this.direction = {x: 2 , y: 1};   
    }

    update(player, player2){
        this.x += this.direction.x + this.velocity;
        this.y += this.direction.y + this.velocity; 
        this.velocity += VELOCITY_INCREASE;

        if(this.y + this.radius  >= 900 || this.y - this.radius   <= 0){
            this.direction.y = -this.direction.y;
           
        }
        else if(player.x + player.width >= this.x - this.radius  && player.y <= this.y + this.radius  && player.y + player.height >= this.y - this.radius  ){
            
            this.direction.x = -this.direction.x;
        }
        else if(player2.x  <= this.x + this.radius  &&
            player2.y <= this.y + this.radius   &&
            player2.y + player2.height >= this.y - this.radius  ){
                
            this.direction.x = -this.direction.x;

            
        }
        
        this.draw();
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    reset(){
        this.x = this.ctx.canvas.width/2;
        this.y = this.ctx.canvas.height/2;
        this.velocity = INITIAL_VELOCITY;
        while(this.direction.x <= 1 || this.direction.y <= 1){
            const trajectory = randomNumberBetween(0, 2 * Math.PI);
            this.direction = {x: trajectory*5, y: Math.sin(trajectory)*5};
        }
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    
    
}

function randomNumberBetween(min, max){
    return Math.abs(Math.random() * (max - min) + min);
}
function resetCollision(){
    collided = false;
}
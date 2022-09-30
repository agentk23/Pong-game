
/**@type {HTMLCanvasElement} */
import Ball from "./resources/ball.js";
import Rectangle from "./resources/paddle.js";

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let raf;

//remove vx, vy

let scorep = 0;
let scorep2 = 0;



//Utility Functions
function drawGrid(){
    ctx.beginPath();
    for(let i = 0; i < 20; i++){
        ctx.moveTo(50 * i, 0);
        ctx.lineTo(50 * i, 900);
    }
    for(let i = 0; i < 20; i++){
        ctx.moveTo(0, 50 * i);
        ctx.lineTo(600, 50 * i);
    }
    ctx.strokeStyle = "#c1c1c1";
    ctx.stroke();
    ctx.closePath();
    ctx.save();
}

function getDistance(x1, x2, y1, y2){
    let xDif = x2 - x1;
    let yDif = y2 - y1;
    return Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2));
}


let player;
let player2;
let ball;

player = new Rectangle(10, 300, 20, 300, 4 ,ctx);
player2 = new Rectangle(570, 300, 20, 300,4, ctx);
ball = new Ball(300, 400, 30, ctx);


window.addEventListener('mousemove', moveRectangle);
function moveRectangle(e){
    let mousey = e.offsetY;
    if(player.y > 0)
    {
        player.y = mousey;
    }
    if(player.y + player.height < canvas.height){
        player.y = mousey;

    }
}



// let mousex;
// let mousey;
// window.addEventListener('mousemove', (e) => {
//     mousex = e.offsetX;
//     mousey = e.offsetY;
// })

ball.reset();

ctx.font="40px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
function animate(){
    raf = requestAnimationFrame(animate); 
    
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //update code
    

    // drawGrid();
    ball.update(player, player2);
    player.draw();
    player2.draw();
    ctx.fillText(scorep, canvas.width/2 - 50, 80);
    ctx.fillText(scorep2, canvas.width/2 + 50, 80);
    
    if(ball.x + ball.radius >= canvas.width || ball.x - ball.radius < 0){
        if(ball.x + ball.radius > canvas.width){
            //add score to player1
            scorep++;
            ctx.fillText(scorep, canvas.width/2 - 50, 80);


        }
        if(ball.x - ball.radius < 0){
            //add score to player2
            scorep2++;
            ctx.fillText(scorep2, canvas.width/2 + 50, 80);
            
        } 
        ball.reset();
        //reset paddles to initial value
        //add score to player1/player2
    }
    if(player2.y + player2.height < canvas.height || player2.y > 0){
        player2.y = ball.y * 0.65;

    }    
    //collision with top/bottom
    // if(ball.y + ball.radius > canvas.height){
    //     ball.direction.y *= -1;
    //     console.log('ce pula mea');
    // }


    
    // collision with left paddle
    // if(player.x + player.width >= ball.x - ball.radius &&
    //     player.y <= ball.y + ball.radius &&
    //     player.y + player.height >= ball.y - ball.radius){
    //         //change direction
    //         ball.direction.x *= -1;

            
    //         console.log('collision');
    //     }
        // //collisions with right paddle
        // if(player2.x  <= ball.x + ball.radius &&
        //     player2.y <= ball.y + ball.radius &&
        //     player2.y + player2.height >= ball.y - ball.radius){
                
        //     ball.direction.x *= -1;

            
        //     console.log('collision2');
        // }

        //losing/winning case
        // if(ball.x > canvas.width || ball.x < -1){
        //     ball.reset();
        //     //reset paddles to initial value
        //     //add score to player1/player2
        // }
    
    
    //   ball.x += ball.vx;
    //   ball.y += ball.vy;
    //   ball.x = mousex;
    //   ball.y = mousey;
    

            
            
            
            
    }
        
    animate();
        
        
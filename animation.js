let canvas = document.getElementById("my_canvas"); /* see canvas.html  and stored on a variable*/
let context = canvas.getContext("2d");


/* the variables to track the speed position moveSpeed and radius */
const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;


function moveBall(){ /* function responsible for moving the ball across the screen */
    if(position + radius > 640){
        moveSpeed = -speed;
    } else if (position - radius < 0){
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall(){ /* function for drawing the ball */
    context.clearReact(0, 0, 640, 480); /* for clearing the ball */

    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill()
}

function animate(){
    moveBall(); /* called function line 12 */
    drawBall(); c/* alled function line 21 */
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
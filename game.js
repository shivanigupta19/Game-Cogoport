let ball_x, ball_y, ball_diameter, ball_dx, ball_dy; 
let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let score = 0, bricks = [];

function setup() {
  createCanvas(400, 400);
  ball_x = width/2;
  ball_y = height/2;
  ball_dx = 3;
  ball_dy = 1;
  ball_diameter = 30
  paddle_width = 75;
  paddle_height = 10;
  paddle_x = width / 2 - (paddle_width/2);
  paddle_y = height - 20;
  paddle_dx = 2;
    for(i = 0 ; i < 4 ; i++){
    bricks.push([])
    for(j = 0 ; j < 4 ; j++){
      bricks[i].push({
        width : 90,
        height: 20,
        x : (j * 95) + 10,
        y : (i * 25) + 40,
        status : 'show'
      }
      )
    }
  }
  background("black")
}

function draw(){
  background("black")
  circle(ball_x , ball_y , ball_diameter)
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  for(i = 0 ; i < 4 ; i++){
    for(j = 0 ; j < 4 ; j++){
      if(bricks[i][j].status === 'show'){
        rect(bricks[i][j].x, bricks[i][j].y, bricks[i][j].width, bricks[i][j].height);
      }
    }
  }
  fill("white")
  text("Score: " + score, 20, 20)
  ball_x += ball_dx;
  ball_y += ball_dy;
  
  if(ball_x >= 400 -(ball_diameter /2))
    ball_dx = -ball_dx;
  else if(ball_x <= (ball_diameter/2))
    ball_dx = -ball_dx;
  else if(ball_y >= 400 -(ball_diameter / 2))
    ball_dy = -ball_dy;
  else if (ball_y <= (ball_diameter/2))
    ball_dy = -ball_dy;
  
  if(paddle_x >= 0){
    if(keyIsDown(LEFT_ARROW))
    paddle_x -= paddle_dx;
  }
  if(paddle_x <= 400-paddle_width){
    if(keyIsDown(RIGHT_ARROW))
    paddle_x += paddle_dx;
  }
  
  if((ball_x > paddle_x && ball_x < paddle_x + paddle_width) && (ball_y + (ball_diameter/2) >= paddle_y)){
    ball_dx = -ball_dx;
    ball_dy = -ball_dy;
    score++;
  }
  

}
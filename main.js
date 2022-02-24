let x,y;
let first = 1;
let rotationMode = 0;
let changeModeCount = 0;
let space = 5;
let countLimit = 1;
let countTempLimit = 0;
let endNum = 100;
let fontSize = 4;
let canvasSize = 700;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0);
  x = width / 2;
  y = height / 2;
}

function isPrime(val) {
  for(let i = 2; i <= sqrt(val);i++ ){
    if(val%i==0) return false;
  }
  return true;
}

function draw() {
  
  strokeWeight(fontSize);
  textAlign(CENTER, CENTER);
  stroke(255);
  if(isPrime(first)){
    point(x,y);  
  }
  
  if(countTempLimit == countLimit){
    rotationMode += 1;  
    countTempLimit = 0;
    changeModeCount += 1;  
    if(changeModeCount == 2){
      countLimit += 1; 
      changeModeCount = 0;
    }
  }
 
  switch(rotationMode % 4){
      case 0:
      x += space;
      break;
      case 1:
      y -= space;
      break;
      case 2:
      x -= space;
      break;
      case 3:
      y += space;
      break;
  }
  
  countTempLimit += 1;
  first += 1;
  
  if(first == endNum*endNum + 1) noLoop();
}

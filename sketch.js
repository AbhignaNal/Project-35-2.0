var dog, happyDog, dogImg;
var database; 
var foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  dog = createSprite(270, 420, 100, 100);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function draw() {
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  textFont("Times New Roman");
  fill("white");


  text("Food Remaining:" + " " + foodS, 220, 300);
  text("Note: Press UP_ARROW Key To Feed Drago Milk.", 140, 30);
}2
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}



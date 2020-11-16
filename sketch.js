//Create variables here
var Dog, HappyDog, database,  Food, FoodStock;

function preload()
{
  //load images here
  Dog1 = loadImage("doglmg.png");
  HappyDog1 = loadImage("doglmg1.png");
}

function setup() {
  createCanvas(500, 500);

  Dog = createSprite(250,250);
  Dog.addImage("itsadog", Dog1);

  database = firebase.database();

  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);

   if(keyDown(UP_ARROW)){
     Dog = Dog + 1;
     FoodStock = FoodStock-1;
   }

   if(keyWentDown(UP_ARROW)){
     writeStock(Food);
     Dog.addImage(HappyDog1);
   }

  drawSprites();
  //add styles here
   text(FoodStock,250,200);
   textSize(5);
   fill("white");
   stroke("black");
}

function readStock(data){
  Food = data.val();
}

function writeStock(x){
  database.ref('/').update({
  //Food.x
  })
  
}
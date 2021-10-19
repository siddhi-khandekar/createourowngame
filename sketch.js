var hero, hero_img;
var back1, back1_img;


function preload(){
    hero_img = loadAnimation("robot_1.png","robot_2.png");
    back1_img = loadImage("background1.png");
}

function setup() {
    createCanvas(600,200);

    hero = createSprite(200,180,400,20);
    hero.addAnimation("hero", hero_img);
    hero.scale = 0.7;

    back1 = createSprite(300,100,20,45);
    back1.addImage("background",back1_img)
    

 
}

function draw() {
    
 
}


var gameState = "START"

var planet,planetImg
var bg 
var player,playerImg
var alien,alienImg
var edges;
var form
function preload(){

    planetImg = loadImage("assets/plant.gif")
    playerImg = loadImage("assets/space_ship0.png")
    bg = loadImage("assets/spaceBG0.png")
    alienImg = loadImage("assets/alien_ship0.png")

}


function setup(){
createCanvas(windowWidth,windowHeight)
    
   /* planet = createSprite(width/2,height/2)
    planet.addImage(planetImg)
    planet.scale = 3*/
    
  //  form = new Form()
 //  alien = new Alien(0,0)

    player = createSprite(width/2,height/2+200)
    player.addImage(playerImg)
    player.scale = 0.4

    alien = createSprite(width/2,80)
    alien.addImage(alienImg)
    alien.scale = 0.3
    //alien.velocityX = 5

 

    edges = createEdgeSprites()
}


function draw(){
  /*  if (gameState == "START"){
    
  form.display()
    }*/

background(bg)
handlePlayer(player,5)
player.bounceOff(edges)
push() 
translate(width/2,height/2)
translate(p5.Vector.fromAngle(millis()/1000,200))
alien.x
alien.y
pop()
push()
imageMode (CENTER)
planet = image (planetImg,width/2,height/2,200,200)
pop()
drawSprites()
}


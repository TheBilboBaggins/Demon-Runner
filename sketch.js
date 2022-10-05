var background1,background2,background3,dir,shopK,handlecontrol = true
function preload(){
background1 = loadImage("assets/oak_woods_v1.0/background/background_layer_1.png")
background2 = loadImage("assets/oak_woods_v1.0/background/background_layer_2.png")
background3 = loadImage("assets/oak_woods_v1.0/background/background_layer_3.png")
shop_animation = loadAnimation("SpriteSellerAnim/tile000.png","SpriteSellerAnim/tile001.png","SpriteSellerAnim/tile002.png","SpriteSellerAnim/tile003.png","SpriteSellerAnim/tile004.png","SpriteSellerAnim/tile005.png")
knight = loadAnimation("/assets/character/idle/tile000.png","/assets/character/idle/tile001.png","/assets/character/idle/tile002.png")
knight_jump = loadAnimation("/assets/character/Jump/tile000.png","/assets/character/Jump/tile001.png","/assets/character/Jump/tile002.png")
knight_run =  loadAnimation("/assets/character/Running/tile000.png","/assets/character/Running/tile001.png","/assets/character/Running/tile002.png","/assets/character/Running/tile003.png","/assets/character/Running/tile004.png","/assets/character/Running/tile005.png","/assets/character/Running/tile006.png","/assets/character/Running/tile007.png","/assets/character/Running/tile008.png")
knight_dash = loadAnimation("/assets/character/dash/tile000.png","/assets/character/dash/tile001.png")
knight_attack =  loadAnimation("/assets/character/Attack/tile000.png","/assets/character/Attack/tile001.png","/assets/character/Attack/tile002.png","/assets/character/Attack/tile003.png")
shop_speech  = loadSound("Tileset/ShopKeeper2.mp3")
ladderImage  = loadImage("Tileset/rustedLadder.png")
tile1Image  = loadImage("Tileset/1.png")
tile2Image  = loadImage("Tileset/2.png")
tile3Image  = loadImage("Tileset/21.png")
tile4Image  = loadImage("Tileset/4.png")
tile5Image  = loadImage("Tileset/5.png")

}
function setup() {
  // shop_speech.play()
  
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(1/2*windowWidth,1/2*windowHeight,800,400)
  bg1.addImage(background1)
  bg1.scale = 5.17
  bg2 = createSprite(1/2*windowWidth,1/2*windowHeight,800,400)
  bg2.addImage(background2)
  bg2.scale = 5.17
  bg3 = createSprite(1/2*windowWidth,1/2*windowHeight,800,400)
  bg3.addImage(background3)
  bg3.scale = 5.17
  S_Shop = createSprite(500,windowHeight-450)
  // S_Shop.addAnimation(err,"shop")
  S_Shop.scale = 3
  S_Shop.addAnimation("shop",shop_animation)
 
  ground = createSprite(1/2*windowWidth,height, width,10)
  // ladder = createSprite(200,height-130)
  // ladder.addImage(ladderImage)
  // ladder.scale = 2
  tile3 = createSprite(500,510)
  tile3.addImage(tile3Image)
  tile3.scale = 5
  // tile3.debug = true



  Knight = createSprite(windowWidth-6.5/8*windowWidth,windowHeight-1.25/8*windowHeight)
  Knight.addAnimation("idle",knight)
  Knight.addAnimation("jump",knight_jump)
  Knight.addAnimation("run",knight_run)
  Knight.addAnimation("dash",knight_dash)
  Knight.addAnimation("sword",knight_attack)
  Knight.scale = 2.35
  // Knight.debug = true
  Knight.setCollider("rectangle",0.7,20,20,50)
}

function draw() {
  background(0);  
  camera.y = Knight.y-185
  camera.x = Knight.x+450
  Knight.collide(tile3)
if(shopK!==0){
  if(Knight.isTouching(S_Shop)){
shop_speech.play()  
shopK=0
handlecontrol = false
knight.velocityX = 0
console.log(handlecontrol)
if(frameCount%100==0){
Knight.changeAnimation("sword")
  }}}

if(handlecontrol==true){


 if(keyWentDown("d")){
  if(dir == 1){
    Knight.velocityX+=20
    Knight.mirrorX(1)
  Knight.changeAnimation("dash",knight_dash)
  if(Knight.velocityX==20){
    Knight.velocityX+=2
    Knight.mirrorX(1)
    Knight.changeAnimation("run")
  }}
  if(dir ==0){
    Knight.velocityX -=10
    console.log("d")
    Knight.mirrorX(-1)
  Knight.changeAnimation("dash",knight_dash)
  if(Knight.x==-10){
    Knight.velocityX-=2
    Knight.mirrorX(-1)
    Knight.changeAnimation("run")
  }
  }
 }
 if(keyWentUp("d")){
  knight.x=knight.x
  
 }
 if(keyWentDown("RIGHT_ARROW")){
  Knight.velocityX+=2
  Knight.mirrorX(1)
  Knight.changeAnimation("run",knight_run)
  dir = 1
 }
 if(keyWentUp("RIGHT_ARROW")){
  Knight.velocityX=0
  Knight.changeAnimation("idle",knight)
 }

 if(keyWentDown("LEFT_ARROW")){
  Knight.velocityX-=2
  Knight.mirrorX(-1)
  Knight.changeAnimation("run",knight_run)
  dir=0
 }
 if(keyWentUp("LEFT_ARROW")){
  Knight.velocityX=0
  Knight.changeAnimation("idle",knight)
 }

console.log(dir)
 if(keyWentUp("UP_ARROW")){
  Knight.changeAnimation("idle")
  Knight.velocityX=0
 }

 if(keyWentDown("UP_ARROW") && Knight.y>400){
  console.log(Knight.y)
  Knight.velocityY = -15
  Knight.velocityX+=0.9
  Knight.changeAnimation("jump")
 }
}
 Knight.velocityY+=0.6
 Knight.collide(ground)

  drawSprites();
}
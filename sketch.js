var background1,background2,background3
function preload(){
background1 = loadImage("assets/oak_woods_v1.0/background/background_layer_1.png")
background2 = loadImage("assets/oak_woods_v1.0/background/background_layer_2.png")
background3 = loadImage("assets/oak_woods_v1.0/background/background_layer_3.png")
shop_animation = loadAnimation("SpriteSellerAnim/tile000.png","SpriteSellerAnim/tile001.png","SpriteSellerAnim/tile002.png","SpriteSellerAnim/tile003.png","SpriteSellerAnim/tile004.png","SpriteSellerAnim/tile005.png")
knight = loadAnimation("/assets/character/idle/tile000.png","/assets/character/idle/tile001.png","/assets/character/idle/tile002.png","/assets/character/idle/tile003.png","/assets/character/idle/tile004.png","/assets/character/idle/tile005.png","/assets/character/idle/tile006.png","/assets/character/idle/tile007.png","/assets/character/idle/tile008.png")
err = loadAnimation("https://img.freepik.com/free-vector/start_53876-25533.jpg","https://static9.depositphotos.com/1008244/1105/v/600/depositphotos_11057948-stock-illustration-shiny-gold-star.jpg")

}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0);  
  bg1 = createSprite(400,200,800,400)
  bg1.addImage(background1)
  bg1.scale = 3
  bg2 = createSprite(400,200,800,400)
  bg2.addImage(background2)
  bg2.scale = 3
  bg3 = createSprite(400,200,800,400)
  bg3.addImage(background3)
  bg3.scale = 3
  S_Shop = createSprite(100,300)
  // S_Shop.addAnimation(err,"shop")
  S_Shop.addAnimation("shop",shop_animation)
  Knight = createSprite(200,300)
  Knight.addAnimation("k",knight)
  drawSprites();
}
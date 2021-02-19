var player,playerImage
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,invwall1,invwall2,invwall3,invwall4,gameOverS
var gameState = "play"
var wallGroup,invGroup,rockGroup,ChestGroup

function preload(){
  playerImage=loadImage("boyimage.jpg")
  gameOverS=
  loadSound("gameOverSound.wav")
  rockImage =loadImage("rockImage.jpg")
  keyImage = loadImage("keyImage.jpg")
  tChestImage=loadImage("treasureChest.jpg")
  houseimage=loadImage("houseImage.jpg")
  YWImage = loadImage("YWImage.gif")
  cChestImage = loadImage("closedCImage.png")
}


function setup(){
  createCanvas (700,500)
  
  wallGroup = createGroup();
  invGroup = createGroup();
  rockGroup = createGroup();
  keyGroup = createGroup();
  ChestGroup = createGroup();
  houseGroup = createGroup();
  cChestGroup = createGroup();
  
  player = createSprite(30,460,10,20)
  player.addImage(playerImage)
  player.scale = 0.05

  wall1 = createSprite(70,450,10,110)
  wall1.scale = 1 
  wallGroup.add(wall1)
  
  wall2 = createSprite(60,310,150,10)
  wall2.scale = 1
  wallGroup.add(wall2)
  
  wall3 = createSprite(130,360,10,100)
  wall3.scale = 1
  wallGroup.add(wall3)
  
  wall4 = createSprite(170,415,90,10)
  wall4.scale = 1
  wallGroup.add(wall4)
  
  wall5 = createSprite(270,400,10,190)
  wall5.scale = 1
  wallGroup.add(wall5)
  
  wall6 = createSprite(230,310,70,10)
  wall6.scale = 1
  wallGroup.add(wall6)
  
  wall7 = createSprite(200,265,10,100)
  wall7.scale = 1
  wallGroup.add(wall7)
  
  wall8 = createSprite(130,220,130,10)
  wall8.scale = 1
  wallGroup.add(wall8)
  
  wall9 = createSprite(70,190,10,50)
  wall9.scale = 1
  wallGroup.add(wall9)
  
  wall10 = createSprite(307,160,485,10)
  wall10.scale = 1
  wallGroup.add(wall10)
  
  wall11 = createSprite(530,250,350,10)
  wall11.scale = 1
  wallGroup.add(wall11)
  
  wall12 = createSprite(350,300,10,110)
  wall12.scale = 1
  wallGroup.add(wall12)
  
  wall13 = createSprite(400,350,110,10)
  wall13.scale = 1
  wallGroup.add(wall13)
  
  wall13 = createSprite(450,430,10,150)
  wall13.scale = 1
  wallGroup.add(wall13)
  
  invwall1 =            createSprite(360,505,750,15)
  invGroup.add(invwall1)
  invwall1.visible = false
  
  invwall2 = createSprite(360,0,750,15)
  invGroup.add(invwall2)
  invwall2.visible = false
  
  invwall3 = createSprite(0,250,15,500)
  invGroup.add(invwall3)
  invwall3.visible = false
  
  invwall4 = createSprite(700,250,15,500)
  invGroup.add(invwall4)
  invwall4.visible = false
  
  rock1 = createSprite(220,30,10,10)
  rock1.addImage(rockImage)
  rock1.scale=0.14
  rockGroup.add(rock1)
  
  rock2 = createSprite(400,120,10,10)
  rock2.addImage(rockImage)
  rock2.scale=0.14
  rockGroup.add(rock2)
  
  rock3 = createSprite(640,40,10,10)
  rock3.addImage(rockImage)
  rock3.scale=0.17
  rockGroup.add(rock3)
  
  key1 = createSprite(230,180,20,20)
  key1.addImage(keyImage)
  key1.scale= 0.3
  keyGroup.add(key1)
  
  tChest = createSprite(350,450,20,20)
  tChest.addImage(tChestImage)
  tChest.scale= 0.15
  tChest.visible = false;
  ChestGroup.add(tChest)
  
  cChest = createSprite(350,450,20,20)
  cChest.addImage(cChestImage)
  cChest.scale= 0.16
  cChestGroup.add(cChest)
  
  house = createSprite(580,400,20,20)
  house.addImage(houseimage)
  house.scale=0.5
  houseGroup.add(house)
  }


function draw(){
  background("0")
   
  player.bounceOff(wallGroup)
  player.bounceOff(invGroup)
  player.bounceOff(rockGroup)
  
  textSize(15)
  text("Donot Touch the walls-",10,15)  
  text("Donot Touch the rocks-",10,30) 
  
  if(gameState === "play"){
  
   
   if(keyDown("up")) {
    player.y = player.y - 6
  }
  
  if(keyDown("down")){
    player.y = player.y + 6
  } 
     
   if(keyDown("right")) {
    player.x = player.x + 6
  }
  
  if(keyDown("left")){
    player.x = player.x - 6
  }
  
  if(player.isTouching(wallGroup)){
  gameOverS.play();
  player.x=30
  player.y=460
  }
  
  if(player.isTouching(rockGroup)){
  gameOverS.play();
  player.x=30
  player.y=460
  }
  
  if(player.isTouching(keyGroup)){
  key1.x = player.x
  key1.y = player.y
  }
  key1.depth=player.depth-1
  player.depth=tChest.depth+1
  player.depth=house.depth+1
  }
  
  if(key1.isTouching(cChestGroup)){
    wall13.destroy();
    key1.destroy();
    tChest.visible = true
    cChestGroup.destroyEach();
  }
  
  if(player.isTouching(houseGroup)){
    gameState = "end"
  }
 
  if(gameState === "end"){
  houseGroup.destroyEach();
  wallGroup.destroyEach();
  ChestGroup.destroyEach();
  keyGroup.destroyEach();
  rockGroup.destroyEach();
  player.destroy();
  YWSprite=createSprite(350,250,10,10);
  YWSprite.addImage(YWImage)
  YWSprite.scale=1
  }
  
  drawSprites();
}
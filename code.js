var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","363b4cca-de6d-4213-b035-df004d388165"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"UJy4T2G5Te0DRRB66tzcOBsb5T9oFTGv","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"tDxP2LOtgwkBEKyxW8hf9s.6yTYrQdxG","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"snM6RrKQT_48SCgORGRMs_kO4VwBPXjj","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"9GtQxOto9ZoHW0jyCct5I2SsS5uVKCCv","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MIF32Anyp.84gmwV45SFbTnzc0HgtT8d","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"arro","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6oDqZDyetIreHvVY5M7ao3jLYBH7GFCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"363b4cca-de6d-4213-b035-df004d388165":{"name":"floating_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLEm0q25Lyhu7RwqwTdbRew44ah6Crun/category_backgrounds/floating_grass.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLEm0q25Lyhu7RwqwTdbRew44ah6Crun","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLEm0q25Lyhu7RwqwTdbRew44ah6Crun/category_backgrounds/floating_grass.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// You can find all animations in  the animation tab 
var ground = createSprite(200, 200);
ground.setAnimation("floating_grass_1");
var arrow = createSprite(370, 200);
arrow.setAnimation("arro");
var arro = createSprite(370, 200);
arro.setAnimation("arrow");
arro.visible = false;
arro.lifetime = 260;
var ballon = randomNumber(1, 100);
console.log(ballon);
var ballon1group=createGroup();
var ballon2group=createGroup();
var ballon4group = createGroup();
var ballon3group = createGroup();


function draw() {
  background("white");
  arrow.y = World.mouseY;
  arro.y = arrow.y;
  if (keyDown("left")) {
    arro.velocityX = -2;
    arro.visible = true;
  }
  spawnballon1();
  spawnballon2();
  spawnballon3();
  spawnballon4();
  drawSprites();
}
function spawnballon1() {
  if (World.frameCount%60 == 0) {
    var ballon1 = createSprite(10, 150);
    ballon1.setAnimation("red");
    ballon1.y = randomNumber(1, 400);
    ballon1.velocityX = 2;
    ballon1.lifetime = 130;
    ballon1.scale = 1;
  }
}
function spawnballon2() {
  if (World.frameCount%60==0) {
    var ballon2 = createSprite(10, 280);
    ballon2.setAnimation("green");
    ballon2.y = randomNumber(1, 400);
    ballon2.velocityX = 2;
    ballon2.lifetime = 130;
    ballon2.scale = 1;
  }
}
function spawnballon3() {
  if (World.frameCount%60==0) {
    var ballon3 = createSprite(10, 360);
    ballon3.setAnimation("blue");
    ballon3.y = randomNumber(1, 400);
    ballon3.velocityX = 2;
    ballon3.lifetime = 130;
    ballon3.scale = 1;
  }
}
function spawnballon4() {
  if (World.frameCount%60==0) {
    var ballon4 = createSprite(10, 60);
    ballon4.setAnimation("yellow");
    ballon4.y = randomNumber(1, 400);
    ballon4.velocityX = 2;
    ballon4.lifetime = 130;
    ballon4.scale = 1;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

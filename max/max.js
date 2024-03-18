var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

  var engine;
  var box1;
  var world;
  var boxes = [];
  var ground;

let synth, a4;

function preload() {
  synth = new Tone.Synth({
    oscillator: {
      type: "sine",
    },
  });
}

function playA4() {
    synth.triggerAttackRelease("A4", 0.1);
  }

function Box(x, y, w, h) {
  var options = {
    friction: 0.5,
    restitution: 0.8,
    angle: PI
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    stroke(200);
    strokeWeight(2);
    fill(255, 255, 255, 100);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, 10, 10));
}

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }
  stroke(255);
  strokeWeight(5);
  ground = Bodies.rectangle(200, height, width, 10, options);
  World.add(world, ground);

  synth.chain(Tone.Destination);

  a4 = createButton("A4");
  a4.position(100, 100);
  a4.mousePressed(playA4);
}

function draw() {
  background(10);
  for (var i = 0; i < boxes.length; i++)
  {
      boxes[i].show();
  }

  stroke(255);
  strokeWeight(5);
  rectMode(CENTER);
  rect(200, height, width, 10);
}


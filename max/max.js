var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

  var engine;
  var world;
  var boxes = [];
  var ground;
  var ball;

let synth;

function preload() {
  synth = new Tone.Synth({
    oscillator: {
      type: "sine",
    },
  });
}

function playA4() {
    synth.triggerAttackRelease("A3", 0.1);
  }


function Ball(x, y, r) {
  var options = {
    friction: 0.5,
    restitution: 0.8,
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;

    push();
    stroke(255);
    strokeWeight(2);
    fill(255, 255, 255, 100);
    translate(pos.x, pos.y);
    rectMode(CENTER);
    circle(0, 0, this.r);
    pop();
  }
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
    stroke(255);
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
  playA4();
}

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }

  stroke(255);
  strokeWeight(5);
  ground = Bodies.rectangle(width/2, height/2, width/2, height/40, options);
  World.add(world, ground);

  boxes.push(new Box(300, 0, 40, 40));
  boxes.push(new Box(500, 0, 40, 40));
  ball = new Ball(width/2, 0, 20);

  synth.chain(Tone.Destination);
}

function draw() {
  background(10);
  for (var i = 0; i < boxes.length; i++)
  {
      boxes[i].show();
  }

  ball.show();
  stroke(255);
  strokeWeight(5);
  rectMode(CENTER);
  rect(width/2, height/2, width/2, 20);
}


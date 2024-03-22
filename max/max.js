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
    stroke(255);
    strokeWeight(5);
    fill(255, 255, 255, 100);
    rectMode(CENTER);
    circle(pos.x, pos.y, this.r);
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

  ball = new Ball(width/2, 0, 10);

  synth.chain(Tone.Destination);
}

function draw() {
  background(10);
  ball.show();
  stroke(255);
  strokeWeight(5);
  rectMode(CENTER);
  rect(width/2, height/2, width/2, height/40);
}


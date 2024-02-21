
a = document.getElementById("canvas");


//w = a.width  = window.innerWidth;
//h = a.height = window.innerHeight;

function canvas_resize()
{
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener("resize", canvas_resize);
canvas_resize();

a.onclick = function()
{
    O.start();
}

/*
* a = <canvas>
* b = <body>
* c = canvas context 2D
* d = document
* e
* f = frequency of sound
* g = web gl??????
* h = height of canvas = 480
* i
* j = jump man
* k = key code
* l = jump man pixel height
* m = plane X location
* n = plane Y location
* o
* p = parachute control
* q
* r
* s = game state
* t
* u = cloud X location
* v = cloud velocity
* w = width of canvas = 680
* x = jumper X location
* y = jumper Y location
* z = platform X location
*/

/*
* A = audio context for web audio
* B = 400
* C = 'context'
* D
* E
* F = reserved
* G = audio gainModule
* H = Frequency
* I
* J
* K
* L = 'fillStyle'
* M = Math
* N
* O = oscillator
* P = sprite width multiplier
* Q = sprite height multiplier
* R = Random
* S = sprite function
* T = sprite index
* U = X loop iterator
* V = Y loop iterator
* W = X nibble loop iterator
* X = sprite X location
* Y = sprite Y location
* Z
*/
// Resize the canvas, storing width and height for later use.
w = a.width = 640;
h = a.height = 480;

// Some short-hands for Math and Math.random.
M=Math;
R=M.random;

// Renders sprite type T at X, Y with width P and Height Q.
function S(T, X, Y, P, Q) 
{
// Loop over the pixels in the image.
for (V = 8; V--;)
for (U = 8; U--;)
  // Add pixel width to function
  // This is a string containing 6 8x8 sprite graphics. One
  // character encodes a single 4-pixel row. This allows all 
  // to be represented by visable ascii characters: @ABCDEFGHIJKLMNO
  (
  '@@@A@AHCLGLGDEDD@@@A@AHCLGLGDEDD@@@A@AHCLGLGDEDD@@@A@AHCLGLGDEDD'
  // Extract the bit we need for the current pixel.
  .charCodeAt(T * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
  // Non zero bits are drawn as visiable pixels
  // few units of the coords in order to center the image on the
  // given x,y. (context.F is context.fillRect)
  && C.F(X * 4 - U * P, Y * 2 + V * Q, P, Q)
}


// global variables
y = j = u = s = k = f = m = z = v = p = 0;
n = w
B = 210
L = 'fillStyle'
x = 80

// web audio API to generate sound
A = new window.AudioContext;
O = A.createOscillator();
G = A.createGain();
O.type = 'square';
O.connect(G);
G.connect(A.destination);
//G.gain.value = 0.2;
// sound off
//O.frequency.value = 0;
O.start();

// sounds
// SOUND_JUMP = 226
// SOUND_CHUTE = 459
// SOUND_SPLAT = 50
// SOUND_LAND = 113
// SOUND_PLATFORM = 490
// SOUND_SCORE1 = 980
// SOUND_SCORE2 = 1960

// sprites
// SPRITE_LAND = 0
// SRITE_STAND = 1
// SPRITE_CHUTE = 2
// SPRITE_PLANE = 3

// states
// READY = 0;
// FALLING = 1; 
// CHUTE = 2;
// SPLAT = 3;
// LANDING = 4;
// SCORE = 5;



onkeydown = function(event) 
{
k = event.keyCode;
}
onkeyup = function(event) 
{
k = 0;
}


// The interval code was a string, but is made into a function here to
// allow newlines to be used inside of it.

setInterval(function() 
{
O.frequency.value = f;
with(C = a.getContext('2d')) 
{
// Create a shortcut for fillRect
C.F = fillRect;

// space background
C[L] = 'Black';
// Clear the screen (F is fillRect)
F(0, 0, w, h);


C[L] = 'Yellow';

//s = 5;
// SCORE = 5;
// All sounds except score are blips or bleeps so they only last
//one cycle
if ((s < 5) || (f>2e5))
{
  f = 0;
}
f *= f;

//test for ARROW_LEFT = 37;
if (k == 37)
{   
  x -= 1;
}

//test for ARROW_RIGHT = 39;
if (k == 39)
{   
  x += 1;
} 

//test for SPACE_BAR = 32;
if (k == 32)
{
  if (p == 0)
  {
   f = 60;
   p = 1;
  }
  
  k = 0;
}  

if (p > 0)
{
  p+=8;
  if (p > B)
  {
      p = 0;
  }
}


S(0, x, B, 4, 4);
F(x * 4 - 16, (B - p + 2) * 2, 4, 4);
//    fillText('plane y: ' + m, 40, 420);
//    fillText('platform x: ' + z, 40, 440);
//    fillText('wind speed: ' + v, 40, 460);
}
}, 40); // 25 frames per second


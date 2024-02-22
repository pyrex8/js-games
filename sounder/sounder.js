
B = document.getElementById("canvas");

function canvas_resize()
{
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener("resize", canvas_resize);
canvas_resize();

B.onclick = function()
{
    O.start();
}

/*
 * a =
 * b = space bar
 * c = 
 * d = down
 * e = 
 * f = frequency of sound
 * g = 
 * h = height of canvas 
 * i = platform test
 * j = current platform level
 * k = platform offset
 * l = left
 * m = platform pattern 1
 * n = platform pattern 2
 * o = platform pattern 3
 * p = test for level
 * q = last test for level
 * r = right
 * s = game high score
 * t = game score
 * u = up
 * v = 
 * w = width of canvas
 * x = jumpman X location
 * y = jumpman Y location
 * z = jumpman location 0 to 7
 */

/*
 * A = audio context for web audio
 * B = <canvas>
 * C = 'context'
 * D = 255
 * E = 512
 * F = reserved
 * G = audio gainModule
 * H = Frequency
 * I = platform 1 y location
 * J = platform 2 y location
 * K = platform 3 y location
 * L = 'fillStyle'
 * M = Math
 * N = number
 * O = oscillator
 * P = player sprite index
 * Q =
 * R = Random
 * S = sprite function
 * T = text
 * U = X loop iterator
 * V = Y loop iterator
 * W = High Score
 * X = sprite X location
 * Y = sprite Y location
 * Z = level function
 */



// Resize the canvas, storing width and height for later use.
E = 512
w = B.width = E;
h = B.height = E;

// Some short-hands for Math and Math.random.
M=Math;
R=M.random;


// 0 = '_Q_'
// 1 = 'P_Q'
// 2 = 'WU]'
// 3 = '_UU'
// 4 = '_DG'
// 5 = ']UW'
// 6 = ']U_'
// 7 = '_AA'
// 8 = '_U_'
// 9 = '_UW'


// Print number
function N(T, X, Y)
{
    Q = "00000" + (T | 0);
    Q = Q.substr(Q.length - 6)
    for (V = 6; V--;)
    {
        W = Q.charCodeAt(V) - 48;
        for (U = 8*4; U--;)
            ('@_Q_@P_Q@WU]@_UU@_DG@]UW@]U_@_AA@_U_@_UW@'
            .charCodeAt(W*4 +(U>>3)) - 64) & 1<<(U&7)
            && C.F(X * 2 - (U>>3) * 4 + V*16, Y * 2 + (U & 7) * 4, 4, 4);
    }
}


// Renders sprite type T at X, Y.
function S(T, X, Y)
{
  // Loop over the pixels in the image.
  for (V = 8; V--;)
    for (U = 8; U--;)
        // Add pixel width to function
        // This is a string containing 6 8x8 sprite graphics. One
        // character encodes a single 4-pixel row. This allows all
        // to be represented by visable ascii characters: @ABCDEFGHIJKLMNO
        (
        'MKJELCHAHALCBDAHLCHALCJEIIDBBDBD'
        // Extract the bit we need for the current pixel.
        .charCodeAt(T * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
        // Non zero bits are drawn as visiable pixels
        // few units of the coords in order to center the image on the
        // given x,y. (context.F is context.fillRect)
        && C.F(496 - (X * 2 - U * 4), Y * 2 + V * 4 - 32, 4, 4)
}

// Platform drawer
function Z(T, Y)
{
  for (U = 8; U--;)
    (T & (1<<U)) && C.F(512 - 64 - U * 64, Y * 2, 64, 8)
}

// z, x, q, i, p, j

// global variables
I = J = K = P = s = f = m = n = o = z = p = r = l = t = k = q = i = j = u = 0;
n = w
L = 'fillStyle'
x = 16
y = 128
D = 255

// web audio API to generate sound
A = new window.AudioContext;
O = A.createOscillator();
G = A.createGain();
O.type = 'square';
O.connect(G);
G.connect(A.destination);
G.gain.value = 0.2;
// sound off
O.frequency.value = 0;
// user has to click window to enable sound

//Space       32 100000
//arrow left  37 100101
//arrow up    38 100110
//arrow right 39 100111
//arrow down  40 101000 = 1000

onkeydown = function(event)
{
    // arrow up
    if (event.keyCode == 38)
    {
        u = 1;f = 5
    }
    // arrow down
    if (event.keyCode == 40)
    {
        d = 1;f = 5
    }
    // arrow left
    if (event.keyCode == 37)
    {
        l = 1;f = 5
    }
    // arrow right
    if (event.keyCode == 39)
    {
        r = 1;f = 5
    }
    // space bar
    if (event.keyCode == 32)
    {
        b = 1;f = 9
    }
}

onkeyup = function(event)
{
    // arrow up
    if (event.keyCode == 38)
    {
        u = 0;f = 0
    }
    // arrow down
    if (event.keyCode == 40)
    {
        d = 0;f = 0
    }
    // arrow left
    if (event.keyCode == 37)
    {
        l = 0;f = 0
    }
    // arrow right
    if (event.keyCode == 39)
    {
        r = 0;f = 0
    }
    // space bar
    if (event.keyCode == 32)
    {
        b = 0;f = 0
    }
}

function arrow_left()
{
  //test for ARROW_LEFT = 37;
  if (l)
  {
        x += 4;
        if (x > D)
          x = D
  }
}

function arrow_right()
{
  //test for ARROW_RIGHT = 39;
  if (r)
  {
      x -= 4;
      if (x<8)
          x = 8
  }
}

function scroll_platforms()
{
    // platform scrolling
    k -= 1;
    if (k < 1)
    {
        k = 85;
        m = n
        n = o
        o = 0|R()*254;
    }
    //64
    I = k
    J = k + 85
    K = k + 85*2

    // current level
    j = 0;
    if ((y >= I) & (y <= I + 4))
    {
        j = m
    }
    if ((y >= J) & (y <= J + 4))
    {
        j = n
    }
    if ((y >= K) & (y <= K + 4))
    {
        j = o
    }
}

function calc_platform_collision()
{
  z = (x / 32) & D;

  // Make sure jumpman is completely off of platform
  // if  q < 0.2 test segment to right z/2
  // if  q > 0.8 test segment to left z*2
  //
  q = (x / 32) - z

  i = 0
  p = (j & ( 1 << z))
  if (p == 0)
  {
      if (q < 0.2)
          i = j & (1 << (z - 1))
      if (q > 0.8)
          i = j & (1 << (z + 1))
  }

  // on platform
  if (p || i)
  {
      P = 1
      y--
  }
  // off platform
  else
  {
      P = 0
      y+=3
  }
}


function score_timer()
{
    // score (timer)
    t += 0.1;
}


function set_sound()
{
  //set sound frequency
  O.frequency.value = f;
  if (f > 10) f = 0

  if ((y < 5) || (y > D))
  {
      y = y & D
      if (t > s)
      {
        s = t
      }
      t = 0
      f = 100
  }
}


// game loop
setInterval(function()
{
    // 1. Process Inputs
    arrow_left();
    arrow_right();

    // 2. Update Game States
    scroll_platforms();
    calc_platform_collision();
    score_timer();

    // 3. Render images and sound
    set_sound();

  with(C = B.getContext('2d'))
  {
      // Create a shortcut for fillRect
      C.F = fillRect;

      // draw background
      C[L] = 'Black';
      F(0, 0, w, h);

      // draw platforms
      C[L] = 'White';
      Z(m, I);
      Z(n, J);
      Z(o, K);

      // draw player
      C[L] = 'Yellow';
      S(P, x, y);

      // Draw score
      C[L] = 'Green';
      N(t, 55, 4);
      N(s, 167, 4);

  }
}, 20); // 50 frames per second

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
 * d = 
 * e = 
 * f = frequency of sound
 * g = 
 * h = height of canvas 
 * i = platform test
 * j = driver
 * k = 
 * l = left
 * m = car X accel
 * n = car Y accel
 * o = 
 * p = test for level
 * q = last test for level
 * r = right
 * s = game high score
 * t = game score
 * u = car X location
 * v = car Y location
 * w = width of canvas
 * x = driver X location
 * y = driver Y location
 * z = 
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
 * I = road stripes y location
 * J = X lower limit
 * K = X upper limit
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
        // This is a string containing 8x8 sprite graphics. One
        // character encodes a single 4-pixel row. This allows all
        // to be represented by visable ascii characters: @ABCDEFGHIJKLMNO
        (
        'KMOOKMHAHAKMOOCL'
        // Extract the bit we need for the current pixel.
        .charCodeAt(T * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
        // Non zero bits are drawn as visiable pixels
        // few units of the coords in order to center the image on the
        // given x,y. (context.F is context.fillRect)
        && C.F(496 - (X * 2 - U * 4), Y * 2 + V * 4 - 32, 4, 4)
}

// road stripes drawing routine
function Z(Y)
{
  for (U = 9; U--;)
    C.F(256, Y * 2 - 32 + U*64, 4, 32)
}

// global variables
I = J = K = P = s = f = m = n = o = z = p = r = l = t = k = q = i = j = u = v = 0;
n = w
L = 'fillStyle'
x = 128
y = 128
D = 255
J = 94
K = 162

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

onkeydown = function(event)
{
    // arrow left
    if (event.keyCode == 37)
    {
        l = 1;f = 10
    }
    // arrow right
    if (event.keyCode == 39)
    {
        r = 1;f = 10
    }
    // space bar
    if (event.keyCode == 32)
    {
        b = 1;f = 480
    }
}

onkeyup = function(event)
{
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
        if (x > K)
          x = K
  }
}

function arrow_right()
{
  //test for ARROW_RIGHT = 39;
  if (r)
  {
      x -= 4;
      if (x < J)
          x = J
  }
}

function scroll_road()
{
    // platform scrolling
    I += 1;
    if (I > 32)
    {
        I = 1;
    }
}

function car_update()
{
    // u,v
    n = -3;
    if (u > K)
    {
        u = K; m = -2;
    }

    if (u < J)
    {
        u = J; m = 2;
    }

    if (v < 5)
        v = 255;

    u += m;
    v += n;
}

function calc_collision()
{

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

    if (f > 400)
    f *=2;

    if (f < 100)
    f--;

    if ((f<0) || (f>2000))
    {
    f =0;
    }
}

// game loop
setInterval(function()
{
    // 1. Process Inputs
    arrow_left();
    arrow_right();
    

    // 2. Update Game States
    scroll_road();
    car_update();
    calc_collision();
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

    // green grass background
    C[L] = 'Green';
    F(0, 0, w/3, h);
    F(w*2/3, 0, w, h);

      // draw road stripes
      C[L] = 'White';
      Z(I);

      // Draw score
      N(t, 24, 4);
      N(s, 196, 4);

      // draw player
      C[L] = 'Yellow';
      S(P, x, y);

      // draw player
      C[L] = 'Red';
      S(P, u, v);
  }
}, 50); // 20 frames per second

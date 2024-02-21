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

// lunar_lander.js

/*
 * a = <canvas>
 * b = <body>
 * c = canvas context 2D
 * d = document
 * e = empty message
 * f = frequency of sound
 * g = web gl??????
 * h = lander color
 * i = LANDING
 * j = thruster velocity adjustment
 * k = key code
 * l = 10 segment length
 * m = thruster color left
 * n = thruster color right
 * o = CRASH
 * p = fuel
 * q = landing gear color
 * r = lander radius
 * s = game state
 * t = text Y location
 * u = x velocity
 * v = y velocity
 * w = width of platfoem
 * x = lander X location
 * y = lander Y location
 * z = platform x array index
 */

/*
 * A = audio context for web audio
 * B = 400
 * C = 'context'
 * D = draw line or dot
 * E = color for draw line or dot
 * F = reserved
 * G = audio gainModule
 * H = Frequency
 * I = initialize terrain
 * J = sin
 * K = cos
 * L = 'fillStyle'
 * M = Math
 * N = black
 * O = oscillator
 * P = array of x terrain points
 * Q = array of y terrain points
 * R = Random
 * S = 'Lunar Lander'
 * T = text fill
 * U = X loop iterator
 * V = Y loop iterator
 * W = white
 * X = sprite X location
 * Y = sprite Y location
 * Z = number of terrain segments
 */

// global variables
u = v = k = f = z = 0;
B = 400
t = 390
x = 100
Z = 41
w = 15
l = 10
r = 4
j = 2

L = 'fillStyle'
N = 'black'
W = 'white'
S = 'LUNAR LANDER'
i = 'LANDING'
o = 'CRASH'
e = ''

n = B
p = B
m = W
n = W
q = W
y = w

// Resize the canvas
a.width = B;
a.height = B;

// Some short-hands for Math and Math.random.
M=Math;
R=M.random;
J=M.sin;
K=M.cos;
P = Array(Z)
Q = Array(Z)

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

// line(X,Y,U,V) or dot(X, Y)
function D(E, X, Y, U=X+1, V=Y+1)
{
  // local, E, X, Y, U, V
  C.strokeStyle = E;
  C.beginPath();
  C.moveTo(X, Y);
  C.lineTo(U, V);
  C.stroke();
}

function I()
{
  // local variables
  X = R()*6.28;
  Y = R()*50

  // global
  x = 50+R()*200
  y = w;
  u = 0;
  v = 0;
  p = B;
  s = e;
  q = W;
  r = 4;
  f = 0;
  h = W;
  z = 4|R()*30

  for (U=Z; U--;)
  {
    P[U] = U*l;
    Q[U] = 250 - R()*20 + (50+Y)*J(6.28*1.5*U/Z + X);
  }
  P[z+1] = P[z] + w
  Q[z] = Q[z+1]

}

// Initialize once
I();
s = S;
h = N;
q = N;

onkeydown = function(event)
{
    k = event.keyCode;
}
onkeyup = function(event)
{
    k = 0;
}

setInterval(function()
{
  O.frequency.value = f;
  with(C = a.getContext('2d'))
  {
    // Create a shortcut for fillRect
    C.F = fillRect;
    C.T = fillText;
    // black space
    C[L] = N;
    // Clear the screen (F is fillRect)
    F(0, 0, B, B);

    // white drawing
    C[L] = W;

    m = N;
    n = N;

    f--;
    if (f > 50)
      f *= 2;

    if ((f<0) || (f>2e5))
    {
      f =0;
    }

    // telemetry
    T('FUEL: ' + p, 10, t);
    T('ALT: ' + M.round(B-y), 110, t);
    T('VERT SPD: ' + v, 210, t);
    T('HORZ SPD: ' + u, 310, t);
    // game state message
    T(s, 150, 100);

    // update velocity and position if not landed or crashed
    if (s==e)
    {
      if (p > 0)
      {
        //test for ARROW_LEFT = 37;
        if (k == 37)
        {
          n = q;
          u=u-j
          p -= 5
          f = l;
        }

        // test for ARROW_RIGHT = 39;
        if (k == 39)
        {
          m = q;
          u=u+j
          p -= 5
          f = l;
        }

        // test for SPACE_BAR = 32;
        if (k == 32)
        {
            m = q;
            n = q;
            v=v-j
            p -= 5
            f = l;
        }
      }
      v=v+1
      x=(10*x+u)/10
      y=(10*y+v)/10
      // test for landing
      if ((y>=Q[z]) && (x>P[z]) && (x<P[z+1]) && (v<30))
      {
        s = i;
        f = 113;
      }
    }
    else
    {
      if (f == 0)
      {
        s = S;
        if (k == 32)
          I()
      }

    }

    // explosion
    if (s == o)
      r += w

    // test for collision
    for (U=Z-1; U--;)
    {
      if ((s==e) && (P[U]<=x) && (P[U+1]>=x) && ((Q[U]<=y) || (Q[U+1]<=y)))
      {
        s = o
        m = N;
        n = N;
        q = N;
        f = 30;
      }
    }

    // draw lander
    for (V = 50; V--;)
    {
      ax = r*J(V/8)-0.5;
      ay = r*K(V/8);
      D(h, x + ax, y + ay - 8);
    }
    // landing gear
    D(q, x+2, y-4, x+4, y)
    D(q, x-2, y-4, x-4, y)
    // thrusters
    D(m, x+2, y-3, x, y+2)
    D(n, x-2, y-3, x, y+2)

    // draw terrain
    for (U=Z-1; U--;)
      D(W, P[U], Q[U], P[U+1], Q[U+1])
    // landing pad
    F(P[z], Q[z], w, 2);

  }
}, 200); // 4 frames per second

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
 * g = game state
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
 * z = road stripes y location
 */

/*
 * A = audio context for web audio
 * B = <canvas>
 * C = 'context'
 * D = scaled pixel (Dot)
 * E = scaled rectangle
 * F = reserved
 * G = audio gainModule
 * H = number
 * I = string
 * J = X lower limit
 * K = X upper limit
 * L = 'fillStyle'
 * M = Math
 * N = number
 * O = oscillator
 * P = player sprite index
 * Q = substring scaled pixel function
 * R = random
 * S = sprite function
 * T = text
 * U = X loop iterator
 * V = Y loop iterator
 * W = high score
 * X = sprite X location
 * Y = sprite Y location
 * Z = level function
 */

// Resize the canvas, storing width and height for later use.
w = B.width = B.height = 512;
w = h = B.width / 4;

// Some short-hands for Math and Math.random.
M=Math;
R=M.random;

function E(X, Y, U, V)
{
    C.F(X * 4, Y * 4, U * 4, V * 4);
}

function D(X, Y)
{
    E(X, Y, 1, 1);
}

// Print number H at X, Y.
function N(X, Y, H)
{
    Q = "00000" + (H | 0);
    Q = Q.substr(Q.length - 6)
    for (V = 6; V--;)
    {
        W = Q.charCodeAt(V) - 48;
        for (U = 8*4; U--;)
            ('@_Q_@P_Q@WU]@_UU@_DG@]UW@]U_@_AA@_U_@_UW@'
            .charCodeAt(W*4 +(U>>3)) - 64) & 1<<(U&7)
            && D(X - (U>>3) + V * 4 + 3, Y + (U & 7));
    }
}

// A = '_Q_'
// B = 'P_Q'
// C = 'WU]'
// D = '_UU'
// E = '_DG'
// F = ']UW'
// G = ']U_'
// H = '_AA'
// I = '_U_'
// J = '_UW'
// K = '_UW'
// L = '_UW'
// M = '_UW'
// N = '_UW'
// O = '_UW'
// P = '_UW'
// Q = '_UW'
// R = '_UW'
// S = '_UW'
// T = '_UW'
// U = '_UW'
// V = '_UW'
// W = '_UW'
// X = '_UW'
// Y = '_UW'
// Z = '_UW'

// Print string I at X, Y.
function T(X, Y, I)
{
    Q = I.length
    for (V = Q; V--;)
    {
        W = I.charCodeAt(V) - 64;
        for (U = 8*4; U--;)
            ('@_Q_@P_Q@WU]@_UU@_DG@]UW@]U_@_AA@_U_@_UW@'
            .charCodeAt(W*4 +(U>>3)) - 64) & 1<<(U&7)
            && D(X - (U>>3) + V * 4 + 3, Y + (U & 7));
    }
}



// Renders sprite type H at X, Y.
function S(X, Y, H)
{
    for (V = 8; V--;)
        for (U = 8; U--;)
            ('KMOOKMHAHAKMOOCL'
            .charCodeAt(H * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
            && D(X - U + 7, Y + V);
}

// road stripes drawing routine
function Z(Y)
{
    for (U = 9; U--;)
        C.F(256, Y * 4 - 32 + U*64, 4, 32);
}

// global variables
J = K = P = 0;
s = f = m = n = o = z = p = r = l = t = k = q = i = j = u = v = g = z = 0;
L = 'fillStyle'
x = 64
y = 64
J = 44
K = 76

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
        l = 1;
    }
 

    // arrow right
    if (event.keyCode == 39)
    {
        r = 1;
    }

    // space
    if (event.keyCode == 32)
        if (g != 1)
        {
            g = 1;
        }
}

onkeyup = function(event)
{
    // arrow left
    if (event.keyCode == 37)
    {
        l = 0;
    }

    // arrow right
    if (event.keyCode == 39)
    {
        r = 0;
    }
}

function arrow_left()
{
    //test for ARROW_LEFT = 37;
    if (l)
    {
        x -= 1;
        if (x < J)
            x = J;
    }
}

function arrow_right()
{
    //test for ARROW_RIGHT = 39;
    if (r)
    {
        x += 1;
        if (x > K)
            x = K;
    }
}

function scroll_road()
{
    // platform scrolling
    z += 1;
    if (z > 16)
        z = 1;
}

function car_update()
{
    // u,v
    n = -2;
    if (u > K)
    {
        u = K;
        m = -3;
        f = 10;
    }

    if (u < J)
    {
        u = J;
        m = 3;
        f = 10;
    }

    if (v < -8)
    {
        v = 128;
        t +=1
    }

    u += R() * m;
    v += R() * n;
}

function calc_collision()
{
    // // collision points
    // C[L] = 'Blue';
    // D(x, y)
    // D(x + 7, y + 7)
    // D(u, v)
    // D(u + 7, v + 7)

    if ((v >= y - 7) && (v <= y + 7))
        if ((u >= x - 7) && (u <= x + 7))
        {
            v -= 4 * n
            y -= 1
            if (y < 1)
            {
                g = 0;
            }
        }
    // f = 480
}

function score()
{
    // score (timer)
    if (t > s)
    {
        s = t;
    }
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
        f =0;
}

// game loop
setInterval(function()
{
    if (g == 1)
    {
        // 1. Process Inputs
        arrow_left();
        arrow_right();

        // 2. Update Game States
        scroll_road();
        car_update();
        calc_collision();
    }

    score();
    // 3. Render images and sound
    set_sound();

    with(C = B.getContext('2d'))
    {
        // Create a shortcut for fillRect
        C.F = fillRect;

        // draw background
        C[L] = 'Black';
        E(0, 0, w, h);

        // green grass background
        C[L] = 'Green';
        E(0, 0, w/3, h);
        E(w*2/3, 0, w, h);

        // draw road stripes
        C[L] = 'White';
        Z(z);

        // Draw score
        N(10, 4, t);
        N(96, 4, s);

        if (g == 0)
        {
            T(32, 32, 'ABCDEF');
        }

        // draw player
        C[L] = 'Yellow';
        S(x, y, P);

        // draw player
        C[L] = 'Red';
        S(u, v, P);
    }
}, 20); // 50 frames per second

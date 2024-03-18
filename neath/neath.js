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

H = '@@@@'+ //SPACE
    '@@W@'+ //!
    '@C@C'+ //"
    '@_J_'+ //#
    '@M_K'+ //$
    '@SDY'+ //%
    '@XU^'+ //&
    '@@AB'+ //'
    '@@QN'+ //(
    '@NQ@'+ //)
    '@UNU'+ //*
    '@DND'+ //+
    '@@HP'+ //,
    '@DDD'+ //-
    '@@H@'+ //.
    '@ANP'+ ///
    '@_Q_'+ //0
    '@P_Q'+ //1
    '@WU]'+ //2
    '@_UU'+ //3
    '@_DG'+ //4
    '@]UW'+ //5
    '@]U_'+ //6
    '@_AA'+ //7
    '@_U_'+ //8
    '@_UW'+ //9
    '@@J@'+ //:
    '@@JP'+ //;
    '@QJD'+ //<
    '@JJJ'+ //=
    '@DJQ'+ //>
    '@GUA'+ //?
    '@VQN'+ //@
    '@_E_'+ //A
    '@[U_'+ //B
    '@QQN'+ //C
    '@^Q_'+ //D
    '@QU_'+ //E
    '@AE_'+ //F
    '@]Q^'+ //G
    '@_D_'+ //H
    '@Q_Q'+ //I
    '@A_Q'+ //J
    '@[D_'+ //K
    '@PP_'+ //L
    '@_C_'+ //M
    '@^A_'+ //N
    '@OQ^'+ //O
    '@GE_'+ //P
    '@VYN'+ //Q
    '@[E_'+ //R
    '@MUV'+ //S
    '@A_A'+ //T
    '@_PO'+ //U
    '@OPO'+ //V
    '@_X_'+ //W
    '@[D['+ //X
    '@_TW'+ //Y
    '@SUY'+ //Z
    '@@Q_'+ //[
    '@PNA'+ //\
    '@_Q@'+ //]
    '@BAB'+ //^
    '@PPP'+ //_
    '@BA@'  //`

// Print string I at X, Y.
function T(X, Y, I)
{
    Q = I.length
    for (V = Q; V--;)
    {
        W = I.charCodeAt(V) - 32;
        for (U = 8*4; U--;)
            (H
            .charCodeAt(W*4 +(U>>3)) - 64) & 1<<(U&7)
            && D(X - (U>>3) + V * 4 + 3, Y + (U & 7));
    }
}

// Renders sprite type I at X, Y.
function S(X, Y, I)
{
    for (V = 8; V--;)
        for (U = 8; U--;)
            ('MKJELCHAHALCBDAHLCHALCJEIIDBBDBD'
            .charCodeAt(I * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
            && D(X - U + 7, Y + V);
}

// global variables
J = K = P = 0;
s = f = m = n = o = z = p = r = l = t = k = q = i = j = u = v = g = z = 0;
L = 'fillStyle'
x = 64
y = 56
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
    {
        if (g != 1)
        {
            g = 1;
        }
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

function sprite_update()
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
        t +=1;
        k = u;
        p = 7;
    }

    u += R() * m;
    v += R() * n;

    if (p > 0)
    {
      p+=1;
      if (p > 64)
      {
        p = 0;
      }
    }
}

function calc_collision()
{
    if ((v >= y - 7) && (v <= y + 7))
        if ((u >= x - 7) && (u <= x + 7))
        {
            v -= 4 * n
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
        sprite_update();
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
        C[L] = '#4169E1';
        E(0, 0, w, h);

        // brown dirt background
        C[L] = 'Brown';
        E(0, h/2, w, h/2);

        // green grass background
        C[L] = 'Green';
        E(0, h/2, w, h/40);

        // Draw score
        C[L] = 'White';
        N(10, 4, t);
        N(96, 4, s);

        if (g != 1)
        {
            T(19, 90, 'PRESS SPACE BAR TO START');
        }
        if (g == 2)
        {
            T(47, 45, 'GAME OVER');
        }

        // draw player
        C[L] = 'Yellow';
        S(x, y, P);

        // draw player
        C[L] = 'Red';
        S(u, v, P);
        D(k, p);
    }
}, 20); // 50 frames per second

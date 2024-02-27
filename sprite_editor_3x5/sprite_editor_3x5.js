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

// 1013 bytes using Brackets minify

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
 * s = sprite color
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
 * D = sprite data array
 * E
 * F = reserved
 * G = audio gainModule
 * H = Frequency
 * I = sprite index
 * J
 * K = copy to clipboard function
 * L = 'fillStyle'
 * M = Math
 * N = string of characters
 * O = oscillator
 * P = sprite width multiplier
 * Q = sprite height multiplier
 * R = Random
 * S = String
 * T = 
 * U = X loop iterator
 * V = Y loop iterator
 * W = X nibble loop iterator
 * X = sprite X location
 * Y = sprite Y location
 * Z
 */


// global variables

// Resize the canvas, storing width and height for later use.
w = a.width = 512;
h = a.height = 512;

y = k = t = 0;
x = 1
L = 'fillStyle';
D = [];
R = [];
r = [];
z = 8*4;
n = 200;
m = 140;

// colors
s =[];
s[0] = 'Royalblue'; // background color
s[1] = 'Yellow'; // sprite color

// example sprite data 
// blank
o = '@_Q_';
u = o;

N = '@_Q_'+ //0
    '@P_Q'+ //1
    '@WU]'+ //2
    '@_UU'+ //3
    '@_DG'+ //4
    '@]UW'+ //5
    '@]U_'+ //6
    '@_AA'+ //7
    '@_U_'+ //8
    '@_UW'  //9


J = '@_E_'+ //A
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
    '@SUY'  //Z

// Print string I at X, Y.
function S(X, Y, I)
{
    Q = I.length
    for (V = Q; V--;)
    {
        W = I.charCodeAt(V) - 65;
        for (U = 8*4; U--;)
            (J
            .charCodeAt(W*4 +(U>>3)) - 64) & 1<<(U&7)
            && C.F(X * 2 - (U>>3) * 4 + V*16, Y * 2 + (U & 7) * 4, 4, 4);
    }
}


onkeydown = function(event) 
{
    k = event.keyCode;
};


setInterval(function() 
{
  with(C = a.getContext('2d'))
  {
    // Create a shortcut for fillRect
    C.F = fillRect;
 
    t^=1;

    //test for c = 67;
    if (k == 67)
    {
        u = o;
        o = window.prompt("", o);
        if (o === null)
        {
            o = u;
        }
    }  

    // RoyalBlue  sky background
    C[L] = s[0];
    // Clear the screen (F is fillRect)
    F(0, 0, w, h);

    // Yellow
    C[L] = s[1];
    // block for grid
    F(64 + n-1, m-1 ,49, 81);

    S(30, 30, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') 

    // display sprite data
    fillText('data = '+o, 200, 320);

    // display instructions
//  fillText('SPRITE EDITOR: arrows, space, (c)lipboard, (e)rase, (f)ill, (u)ndo', 100, 100);

    for (U = z; U--;)
    {
        p = U&7;
        q = U>>3; 
        i = U&7;
        j = U>>3;
        D[U] = ((o.charCodeAt(j) - 64) & (1<<i))>>i;
        // Rotated version of data
        C[L] = s[D[U]];
        // draw sprite
        F(420 + (7- q) * 4, 185 + p * 4, 4, 4);
        // array of squares
        F(n + (7 - q) * 16, m + p * 16, 15, 15);
    }

    // for (U = 8*4; U--;)
    //     ('@_Q_@P_Q@WU]@_UU@_DG@]UW@]U_@_AA@_U_@_UW@'
    //     .charCodeAt(T*4 +(U>>3)) - 64) & 1<<(U&7) 
    //     && C.F(X * 2 - (U>>3) * 4, Y * 2 + (U & 7) * 4, 4, 4);

    C[L] = s[t];

    // cursor x and y
    F(n + (7-x)*16, m + y*16,15, 15);
 
   //test for ARROW_LEFT = 37;
    if (k == 37)
    {
        x += 1
        if (x > 3)
            x = 1
    }
    
    //test for ARROW_RIGHT = 39;
    if (k == 39)
    {
        x -= 1
        if (x < 1)
            x = 3
    } 
    
    //test for ARROW_UP = 38;
    if (k == 38)
    {
        y -= 1
        if (y < 0)
            y = 4
    }
    
    //test for ARROW_DOWN = 40;
    if (k == 40)
    {   
        y += 1
        if (y > 4)
            y = 0
    }

    //test for SPACE_BAR = 32;
    if (k == 32)
    {
        D[x*8+y] ^= 1;
    }  

    // erase all
    //test for e = 69;
    if (k == 69)
    {
        u = o;
        for (U = z; U--;)
            D[U] = 0;
    }   

    // fill all
    //test for f = 70;
    if (k == 70)
    {
        u = o;
        for (U = z; U--;)
            D[U] = 1;
    }

    k = 0;

    // zero out D[U] 6,7,14,15,22,23,30,31
    D[0] = 0
    D[1] = 0
    D[2] = 0
    D[3] = 0
    D[4] = 0
    D[5] = 0
    D[6] = 0
    D[7] = 0

    D[13] = 0
    D[14] = 0
    D[15] = 0

    D[21] = 0
    D[22] = 0
    D[23] = 0

    D[29] = 0
    D[30] = 0
    D[31] = 0

    for (U = z; U--;)
        o = o.substr(0, U>>3) + 
        String.fromCharCode((o.charCodeAt(U>>3) & ((~1)<<(U&7))) | 64 | (D[U]<<(U&7))) +
        o.substr((U>>3) + 1);
  }
}, 250); // 4 frames per second
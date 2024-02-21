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
 * I
 * J
 * K = copy to clipboard function
 * L = 'fillStyle'
 * M = Math
 * N
 * O = oscillator
 * P = sprite width multiplier
 * Q = sprite height multiplier
 * R = Random
 * S = String
 * T = sprite index
 * U = X loop iterator
 * V = Y loop iterator
 * W = X nibble loop iterator
 * X = sprite X location
 * Y = sprite Y location
 * Z
 */


// global variables

// Resize the canvas, storing width and height for later use.
w = a.width = 640;
h = a.height = 480;

x = y = k = t = 0;
L = 'fillStyle';
D = [];
R = [];
r = [];
z = 64;
n = 200;
m = 140;

// colors
s =[];
s[0] = 'Royalblue'; // background color
s[1] = 'Yellow'; // sprite color

// example sprite data 
// space ship
o = '@@HCDELGLGLGDE@@';
u = o;
// invader '@@DEDELGLGHC@A@@'
// bomb '@@HB@AHCHCHC@A@@'
// fat bomb 'HC@AHCLGLGLGHC@@'
// ghost '@@HCDELGLGLGDE@@'
// skydiver landing 'MKJELCHAHALCBDAH'
// skydiver standing 'LCHALCJEIIDBBDBD'
// parachute '@@@@LCNGNGOOOOAH'
// plane 'LIHHNONOH@LA@@@@'
// spaceship '@@@A@AHCLGLGDEDD'


// Renders sprite type T at X, Y with width P and Height Q.
/*
function S(T, X, Y, P, Q) 
{
  for (U = T.length * 4; U--;)
        (T.charCodeAt(U>>2) - z) & 1<<(U&3) &&
         C.F(X * 4 - (U & 7) * P, Y * 2 + (U>>3) * Q, P, Q);
}
*/


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

    // undo
    //test for u = 85;
    if (k == 85)
    {
        o = u;
    }    

    // mirror
    //test for m = 77;
    if (k == 77)
    {
        e = o.match(/(..?)/g);
        q = e.reverse();
        o = q.join("");
    }    

    // rotate
    //test for r = 82;
    if (k == 82)
    {
        for (U = 16; U--;)
        {
            P = U*4;
            r[U] = String.fromCharCode(z+R[P]+R[P+1]*2 + R[P+2]*4 + R[P+3]*8);
        }
        o = r.join("");
    }    

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
    F(n-1, m-1 ,129, 129);

    // display sprite data
    fillText('data = '+o, 200, 320);

    // display instructions
//  fillText('SPRITE EDITOR: arrows, space, (m)irror, (r)otate, (c)lipboard, (e)rase, (f)ill, (u)ndo', 100, 100);

    for (U = z; U--;)
    {
        q = U&7;
        p = U>>3; 
        i = U&3;
        j = U>>2;
        D[U] = ((o.charCodeAt(j) - z) & (1<<i))>>i;
        // Rotated version of data
        R[p+q*8] = D[U];
        C[L] = s[D[U]];
        // draw sprite
        F(420 + (7- q) * 4, 185 + p * 4, 4, 4);
        // array of squares
        F(n + (7-q) * 16, m + p * 16, 15, 15);
    }
        
    C[L] = s[t];            

    // cursor x and y
    F(n + (7-x)*16, m + y*16,15, 15);
 
   //test for ARROW_LEFT = 37;
    if (k == 37)
    {   
        x = (x+1)&7;
    }
    
    //test for ARROW_RIGHT = 39;
    if (k == 39)
    {   
        x = (x-1)&7;
    } 
    
    //test for ARROW_UP = 38;
    if (k == 38)
    {   
        y= (y-1)&7;
    }
    
    //test for ARROW_DOWN = 40;
    if (k == 40)
    {   
        y = (y+1)&7;
    }        

    //test for SPACE_BAR = 32;
    if (k == 32)
    {
        D[x+y*8] ^= 1;
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

    for (U = z; U--;)
        o = o.substr(0, U>>2) + String.fromCharCode((o.charCodeAt(U>>2)& ((~1)<<(U&3))) | z | (D[U]<<(U&3))) + o.substr((U>>2) + 1);
 
  }
}, 250); // 4 frames per second
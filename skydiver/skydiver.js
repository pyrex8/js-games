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

// 1021 bytes using Brackets minify

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
        'MKJELCHAHALCBDAHLCHALCJEIIDBBDBD@@@@LCNGNGOOOOAHLIHHNONOH@LA@@@@'
        // Extract the bit we need for the current pixel.
        .charCodeAt(T * 16 + V * 2 + (U>>2)) - 64) & 1<<(U&3)
        // Non zero bits are drawn as visiable pixels
        // few units of the coords in order to center the image on the
        // given x,y. (context.F is context.fillRect)
        && C.F(X * 4 - U * P, Y * 2 + V * Q, P, Q)
}


// global variables
x = y = j = u = s = k = f = m = z = v = p = 0;
n = w
B = 400
L = 'fillStyle'


// web audio API to generate sound
A = new window.AudioContext;
O = A.createOscillator();
G = A.createGain();
O.type = 'square';
O.connect(G);
G.connect(A.destination);
// user has to click window to enable sound

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
    n++;
    // END_TIME = 200;
    if (n > 200)
    {
        // jump man height = 4
        l = 4;
        n = 0;
        // READY = 0;
        s = 0;
        // random numbers with floor function
        // 25 to 125
        m = 32|R()*127;
        // 80 to 140
        z = 32|R()*127;
        // -1, 0, 1
//        v = 1-(0|R()*2.9);
          v = (R()*3&3)-1;
    }

    // RoyalBlue  sky background
    C[L] = '#4169E1';
    // Clear the screen (F is fillRect)
    F(0, 0, w, h);

    // green grass background
    C[L] = 'Green';
    F(0, B, w, h);

    // wite clouds
    C[L] = 'White';
    // screen cloud roll over at ends of screen
    u = (u + v)& 255;
    // SPRITE_CLOUD uses SPRITE_CHUTE = 2
    S(2, u, 5, 64, 4);

    C[L] = 'Yellow';
    // SPRITE_PLANE = 3
    S(3, n, m, 8, 4);

    // platform to land on
    F(z * 4 - 44, B, 64, 8);

    // SCORE = 5;
    // All sounds except score are blips or bleeps so they only last
    //one cycle
    if ((s < 5) || (f>2e5))
    {
        f = 0;
    }
    // a score is landing on the platform, the sound goes up in frequency
    // this just lets it keep on going since it is in audable > 20kHz
    f *= 2;
    // parachute control
    p = 0;
    //test for ARROW_LEFT = 37;
    if (k == 37)
    {
     p = -1;
    }

    //test for ARROW_RIGHT = 39;
    if (k == 39)
    {
        p = 1;
    }

    //test for SPACE_BAR = 32;
    if (k == 32)
    {
        k = 0;
        // FALLING = 1;
        if (s == 1)
        {
            // CHUTE = 2;
            s = 2;
            // SOUND_JUMP = 226
            // O.frequency.value = 226;
            f = 226;
        }
        // READY = 0;
        if (s == 0)
        {
            x = n;
            y = m + 16;
            // FALLING = 1;
            s = 1;
            // SOUND_CHUTE = 459
            // O.frequency.value = 459;
            f = h;
        }
    }

    // READY = 0;
    if (s > 0)
    {
        // CHUTE = 2;
        if (s == 2)
        {
            y++;
            x += p +v;
            // SPRITE_LAND = 0
            j = 0;
            // SPRITE_CHUTE = 2
            S(2, x, y - 16, 4, 4);
            // GROUND_Y = 184;
            if (y >= 184)
            {
                // LANDING = 4;
                s = 4;
                // SOUND_LAND = 113
                //O.frequency.value = 113;
                f = 113;
                // test for landing on platform
                // PLATFORM_WIDTH = 4;
                if ((x > z - 5) && (x < z + 5))
                {
                    // SOUND_PLATFORM = 490
                    // O.frequency.value = 490;
                    f = h;
                    // SCORE = 5;
                    s = 5;
                }
            }
        }

        // FALLING = 1;
        if (s == 1)
        {
            y += 4;
            x++;
            j = (1 - j) & 1;
            // GROUND_Y = 184;
            if (y >= 184)
            {
                // jump man height = 1
                l = 1;
                // SPLAT = 3;
                s = 3;
                // move sprite to ground
                y = 198;
                // SOUND_SPLAT = 50
                // O.frequency.value = 50;
                f = 50;
            }
        }
        S(j, x, y, 4, l);
    }
//    S(1, 20 - 5, B/2 - 16, 4, 4);
//    F(20 * 4 - 44, B, 64, 8);
//    fillText('plane y: ' + m, 40, 420);
//    fillText('platform x: ' + z, 40, 440);
//    fillText('wind speed: ' + v, 40, 460);
  }
}, 40); // 25 frames per second

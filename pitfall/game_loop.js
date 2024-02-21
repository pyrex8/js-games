/*global myCanvas, keyDownHandler, keyUpHandler, tapDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, PF, BL, P0, P1, M0, M1, sound, screen, reset_collision, get_collision, background, print_large, print_small, number_large, number_small, playfield, player0, player1, ball, missile0, missile1, requestAnimationFrame, test_var*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var thisTime = 0;
var lastTime = Date.now();
var dt = 1;

var animation = 0.0;

var pond_rate = 0.01;
var pond_animation = 1.0;

var jumping = 0;
var running = 0;

var game_number = 0;

var color_pf = 3 + (8 * 8);
var color_bk1 = 104;
var color_bk2 = 107;

var sound_duration = 0;

var freq_1 = 16;
var type_1 = 4;

var x = 16;
var y = 0;

var pos_x = 16;
var pos_y = 0;

var vel_x = 0;
var vel_y = 0;
var accel_y = 0;

var i = 0;
var j = 0;

var vine_swing = 13;
var vine_fact = (vine_swing + 0.5) * (vine_swing + 0.5);
var vine_dir = 1;
var vine_x1 = 80.0;
var vine_x2 = 0.0;
var vine_y1 = 54.0;
var vine_y2 = 100.0;

// gamepad
var joy = 0;


var background_forest = new Background(57, 60, BACKGROUND_COLOR);
var background_canopy = new Background(0, 57, TREE_PANT_COLOR);
var background_dark = new Background(117, SCREEN_Y, DARKESS_COLOR);

var trunks = new Sprite(PF, 0, 65, trunk_sprite, trunk_color, 0, 4, 52, 0 );

var background_gnd1 = new Background(117, 16, GROUND_COLOR);
var background_gnd2 = new Background(133, 15, DIRT_COLOR);
var background_undergnd = new Background(180, 6, DIRT_COLOR);

var ladder = new Sprite(S5, 26, 134, ladder_sprite, ladder_color, 0, 1, 2, 0 );

var hole = new Sprite(S4, 26, 122, opening_sprite, opening_color, 0, 4, 6, 0);
var opening = new Sprite(PF, 26, 133, opening_sprite, opening_color, 0, 4, 15, 0);

var leaves = new Sprite(PF, 0, 57, leaves_sprite, leaves_color, 0, 4, 2, 0);

var harry = new Sprite(P0, 0, 0, harry_sprite, harry_color, 0, 1, 1, 0);

var log = new Sprite(S1, 124, 118, log_sprite, log_color, 0, 1, 1, 0);

var bar = new Sprite(S2, 120, 165, bar_sprite, bar_color, 0, 1, 1, 0);

var bar1 = new Sprite(S2, 140, 118, bar_sprite, bar_color, 0, 1, 1, 0);

var scorpion = new Sprite(S6, 40, 169, scorpion_sprite, scorpion_color, 0, 1, 1, 0);

var pond = new Sprite(S6, 48, 120, pond_sprite, pond_color, 0, 1, 1, 0);

var vine = new Sprite(S3, 79, 61, vine_sprite, vine_color, 0, 1, 2, 0);

var branch = new Sprite(PF, 34, 59, branch_sprite, branch_color, 0, 1, 1, 0);

var wall = new Sprite(S0, 136, 148, wall_sprite, wall_color, 0, 1, 1, 0);

var vblank = new Sprite(PF, 0, 0, vblank_sprite, vblank_color, 0, 8, SCREEN_Y, 0);

var type_number = new Number3x5(75, 189, type_1, 1, 1, LETTERING_COLOR);
var freq_number = new Number3x5(125, 189, freq_1, 1, 1, LETTERING_COLOR);

var type_string = new String3x5(30, 189, 'TONE', 1, 1, LETTERING_COLOR);
var freq_string = new String3x5(100, 189, 'FPS', 1, 1, LETTERING_COLOR);

var score = new Number8x8(60, 10, 2000, LETTERING_COLOR);

var logged = new Sound(log_sound.audv, log_sound.audf, log_sound.audc, log_sound.audt);
var jump = new Sound(jump_sound.audv, jump_sound.audf, jump_sound.audc, jump_sound.audt);
var falling = new Sound(falling_sound.audv, falling_sound.audf, falling_sound.audc, falling_sound.audt);
var treasure = new Sound(treasure_sound.audv, treasure_sound.audf, treasure_sound.audc, treasure_sound.audt);
var swing = new Sound(swing_sound.audv, swing_sound.audf, swing_sound.audc, swing_sound.audt);
var dead = new Sound(dead_sound.audv, dead_sound.audf, dead_sound.audc, dead_sound.audt);

var joystick = new Joystick();

console.log("hello world");

function vine_draw(){
    var y_comp = (vine_fact - (vine_x2 * vine_x2)) / vine_fact;
    var move_mult = vine_dir * y_comp;
    y_comp *= 5.0;
    y_comp += vine_y2;
    vine_x2 += move_mult;
    if (vine_x2 > vine_swing) {
        vine_dir *= -1;
        vine_x2 = vine_swing;
    }
    if (vine_x2 < -vine_swing) {
        vine_dir *= -1;
        vine_x2 = -vine_swing;
    }
    for (i = vine_y1; i < y_comp; i+=2) {
        vine.y = Math.trunc(i);
        vine.x = Math.trunc(vine_x1 + i * (vine_x2) / (vine_y2 - vine_y1));
//        vine_top.x = Math.trunc(vine_x1 + (vine_y2 - i));
        vine.draw();
    }
}

function joystick_input() {
    if (joy > 0)
    {
        vel_x = 0;
        joy = 0;
    }


    if (joystick.up()) {
        //up arrow
        freq_1 += 1;
        if (freq_1 > 31) {
            freq_1 = 0;
        }
    }
    if (joystick.down()) {
        //down arrow
        freq_1 -= 1;
        if (freq_1 < 0) {
            freq_1 = 31;
        }
    }

    if (joystick.left()) {
        //left arrow
        joy = 1;
        harry.direction = 1;
        vel_x = -1.3;
        type_1 -= 1;
        if (type_1 < 0) {
            type_1 = 15;
        }
    }

    if (joystick.right()) {
        //right arrow
        joy = 1;
        harry.direction = 0;
        vel_x = 1.3;
        type_1 += 1;
        if (type_1 > 15) {
            type_1 = 0;
        }
    }

    if (joystick.fire()) {
        if (jumping === 0) {
            jumping = 1;
            running = 5;
            accel_y = 2.10;
            vel_y = -4.00;
            if (sound_duration == 0) {
                jump.stop();
                jump.play();
            }
        }
    }
}

function collisions() {
// wall S0, log S1, bar S2, vine S3, hole S4, ladder S5, pond S6, scorpion S7

    if (get_collision(P0, S1)) {
        if (sound_duration == 0) {
            jump.stop();
            logged.play();
            sound_duration = 25;
        }
    }

    if (get_collision(P0, S2)) {
        if (sound_duration == 0) {
            jump.stop();
            treasure.play();
            sound_duration = 50;
        }
    }

    if (get_collision(P0, S3)) {
        if (sound_duration == 0) {
            jump.stop();
            swing.play();
            sound_duration = 100;
        }
    }

    if (get_collision(P0, S4)) {
        if (sound_duration == 0) {
            jump.stop();
            falling.play();
            sound_duration = 25;
        }
    }

    if (get_collision(P0, S6)) {
        if (sound_duration == 0) {
            jump.stop();
            dead.play();
            sound_duration = 100;
        }
    }

    reset_collision();
}

setInterval(function() {
    var a,
        b,
        fps,
        p_width = Math.trunc(window.innerWidth / SCREEN_X / INTERLACE),
        p_height = Math.trunc(window.innerHeight / SCREEN_Y);

    thisTime = Date.now();
    dt = thisTime - lastTime;
    lastTime = thisTime;
    fps = 1000 / dt;
    dt = dt / 3;

    joystick_input();

    if (sound_duration > 0) {
        sound_duration -= 1;
    }

    if (pos_y > 0) {
        accel_y = 0;
        vel_y = 0;
        pos_y = 0;
        jumping = 0;
        running = 0;
    }

    if (pos_x >= 155) {
        vel_x = 0;
        pos_x = 6;
    }

    if (pos_x <= 5) {
        vel_x = 0;
        pos_x = 154;
    }

    pos_x += vel_x;
    vel_y += accel_y * dt / 50.0;
    pos_y += vel_y;

    if (vel_x === 0) {
        if (jumping === 0) {
            running = 0;
        }
    } else {
        if ((Math.trunc(pos_x) !== x) && (jumping === 0)) {
            running += 0.5;
            if (running > 5) {
                running = 1;
            }
        }
    }

    animation += dt / 30.0;
    if (animation >= 5.0) {
        animation = 0.0;
    }

    a = Math.trunc(animation);

    pond_animation += pond_rate;
    if (pond_animation < 1) {
        pond_animation = 1;
        pond_rate *= -1;
    }
    if (pond_animation >= 5) {
        pond_animation = 4.99;
        pond_rate *= -1;
    }
    b = Math.trunc(pond_animation)
    pond.x = 80 - pond_offset[b];
    pond.pixel_width = b;

    harry.x = Math.trunc(pos_x);
    harry.y = Math.trunc(pos_y) + 104;
    harry.index = Math.trunc(running);

    bar.index = Math.trunc(Math.random() * 2);

    screen();
    background_dark.draw();
    background_forest.draw();

    vine_draw();

    background_canopy.draw();

    branch.x = 34; branch.draw();
    branch.x = 66; branch.draw();
    branch.x = 86; branch.draw();
    branch.x = 118; branch.draw();

    leaves.draw();
    trunks.draw();

    background_gnd1.draw();
    background_gnd2.draw();
    background_undergnd.draw();

    hole.draw();
    opening.draw();

    ladder.draw();

    wall.draw();

    log.draw();

    bar.draw();

    bar1.draw();

    scorpion.draw();

    pond.draw();

    harry.draw();

    collisions();

    score.print();

    type_string.print();
    freq_string.print();

    type_number.value = audioCtx.sampleRate;
    freq_number.value = Math.trunc(fps);

    type_number.print();
    freq_number.print();

    vblank.draw();

},40);

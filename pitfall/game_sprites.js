// game colors
var TREE_PANT_COLOR = 105;
var BACKGROUND_COLOR = 107;

var TRUNK_COLOR = 8;
var GROUND_COLOR = 12;

var DIRT_COLOR = 10;
var HAIR_LOG_COLOR = 9;

var FACE_COLOR = 37;
var SHIRT_COLOR = 100;

var BRICK_COLOR = 33;
var MORTAR_COLOR = 3;

var DARKESS_COLOR = 0;
var LETTERING_COLOR = 6;

var WATER_COLOR = 75;

var WHITE_COLOR = 0x06;
var YELLOW_COLOR = 0x0e;

var harry_sprite = [


    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX X ',
    '   XXXX ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   X    ',
    '   XX   ',






    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    '  XXXXX ',
    '  XXXX  ',
    '  XXX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   X X  ',
    '   X X  ',
    ' XXX X  ',
    ' X    XX',
    ' X    X ',
    '        ',


    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '    XXX ',
    '    X X ',
    '  XXXXX ',
    '  X X   ',
    '  X X   ',
    '    X   ',
    '    XX  ',



    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXXX ',
    '   X XX ',
    '   X  X ',
    '  XX X  ',
    '  XX X  ',
    '  X   X ',
    '  X     ',
    '   X    ',

    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    '  XXXXX ',
    '  XXXX  ',
    '  XXX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '  XXXXX ',
    '  XX XX ',
    ' XX   X ',
    ' XX   X ',
    'XX    XX',
    'X       ',
    'X       ',
    '        ',

    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    ' XXXXXX ',
    ' X XXX  ',
    ' X XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XXXX ',
    'XX XX X ',
    ' XXX  X ',
    '  XX  XX',
    '        ',
    '        ',
    '        ',
    '        ',


    'XX      ',
    'XX X    ',
    'XX X    ',
    'X  X    ',
    'XX X    ',
    'XXXX    ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX XXX  ',
    'XXXX XX ',
    'XXXX  X ',
    ' XX   XX'];


var harry_color = [
    HAIR_LOG_COLOR,
    FACE_COLOR,
    FACE_COLOR,
    FACE_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR];

var tree_leavs = [
    'XXXXXXXXXXX  XXXXXXXXXXXXXX  XXXXXXXXXXX',
    'XXXXXXXXXX    XXXXXXXXXXXX    XXXXXXXXXX',
    'XXX  XXXX      XXXX  XXXX      XXXX  XXX',
    'XX    XX        XX    XX        XX    XX'];

var leaves_sprite = [
    'XXXXXXXXXXX  XXXXXXXXXXXXXX  XXXXXXXXXXX',
    'XXXXXXXXXX    XXXXXXXXXXXX    XXXXXXXXXX',
    'XXX  XXXX      XXXX  XXXX      XXXX  XXX',
    'XX    XX        XX    XX        XX    XX'];    

var leaves_color = new Array(leaves_sprite.length);

leaves_color.fill(TREE_PANT_COLOR);


var vine_sprite = ['X'];
var vine_color = [TRUNK_COLOR];


var trunk_sprite = ['.........X.......X....X.......X.........'];
var trunk_color = [TRUNK_COLOR];


var opening_sprite =  ['XX'];
var opening_color = [DARKESS_COLOR];

var branch_sprite = [
    'X      X',
    'X      X',
    'X  XX  X',
    'X  XX  X',
    'XX XX XX',
    ' XXXXXX '];


var branch_color = new Array(branch_sprite.length);

branch_color.fill(TRUNK_COLOR);



var log_sprite = [
    '   XX   ',
    '  XXXX  ',
    ' XXX XX ',
    ' X XXXX ',
    ' XXXXXX ',
    ' XXX XX ',
    ' X XXXX ',
    ' XXXXXX ',
    ' XX  XX ',
    ' X XX X ',
    ' X XX X ',
    ' X XX X ',
    '  X  X  ',
    '   XX   '];


var log_color = new Array(log_sprite.length);
log_color.fill(HAIR_LOG_COLOR);


var bar_sprite = [
    '   X    ',
    '        ',
    'X  X  X ',
    '        ',
    ' X X X  ',
    '        ',
    '   X    ',
    '        ',
    '  XXXXX ',
    ' XXXXXX ',
    'XXXXXXX ',
    'XXXXXXX ',
    'XXXXXX  ',
    'XXXXX   ',

    '        ',
    '   X    ',
    '        ',
    ' X X X  ',
    '        ',
    '  X X   ',
    '        ',
    '        ',
    '  XXXXX ',
    ' XXXXXX ',
    'XXXXXXX ',
    'XXXXXXX ',
    'XXXXXX  ',
    'XXXXX   '];

var bar_color = [
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    YELLOW_COLOR,
    YELLOW_COLOR,
    YELLOW_COLOR,
    YELLOW_COLOR,
    YELLOW_COLOR,
    YELLOW_COLOR];


var scorpion_sprite = [
    ' XXX    ',
    'XX XX   ',
    'X   X   ',
    'X  X    ',
    'X     X ',
    'XX   XX ',
    'XXXXX   ',
    ' XXXX   ',
    '  XXXX X',
    '  XX  X ',
    'X    X X',


    '        ',
    ' XXX    ',
    'XX XX   ',
    'X   X   ',
    'X  X  X ',
    'XX   X  ',
    'XXXXX X ',
    ' XXXX   ',
    '  XXXX  ',
    '  XX  XX',
    ' X  X  X'];

var scorpion_color = [
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR,
    WHITE_COLOR];


var pond_sprite = [
    '       XX       ',
    '    XXXXXXXX    ',
    '  XXXXXXXXXXXX  ',
    ' XXXXXXXXXXXXXX ',
    'XXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXX',
    ' XXXXXXXXXXXXXX ',
    '  XXXXXXXXXXXX  ',
    '    XXXXXXXX    ',
    '       XX       '];


var pond_color = new Array(pond_sprite.length);
pond_color.fill(WATER_COLOR);

var pond_offset = [0, 8, 16, 24, 32];


var brick_sprite = [
    'XXX XXX ',
    'XXX XXX ',
    'XXX XXX ',
    'XXXXXXX ',
    'X XXX X ',
    'X XXX X ',
    'X XXX X ',
    'XXXXXXX '];


var brick_color = [
    BRICK_COLOR,
    BRICK_COLOR,
    BRICK_COLOR,
    MORTAR_COLOR,
    BRICK_COLOR,
    BRICK_COLOR,
    BRICK_COLOR,
    MORTAR_COLOR];

var wall_sprite = brick_sprite.concat(brick_sprite, brick_sprite, brick_sprite);

var wall_color = brick_color.concat(brick_color, brick_color, brick_color);



var rung_sprite = [
    '        ',
    '  XXXX  '];

var ladder_sprite = rung_sprite.concat(rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite, rung_sprite);

var ladder_color = new Array(ladder_sprite.length);
ladder_color.fill(DIRT_COLOR);


var vblank_sprite = ['X'];
var vblank_color = [DARKESS_COLOR]

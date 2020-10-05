var squareDim;
var clicked = false;
var activePiece;

var game;
var board;
var pieces = [];


var icons = [];

var version = "offline";

function preload() {

  if (version == "online") {
    //white pawn
    icons[0] = loadImage('w_pawn.png');

    //white rook
    icons[1] = loadImage('w_rook.png');

    //white knight
    icons[2] = loadImage('w_knight.png');

    //white bishop
    icons[3] = loadImage('w_bishop.png');

    //white queen
    icons[4] = loadImage('w_queen.png');

    //white king
    icons[5] = loadImage('w_king.png');

    //black pawn
    icons[6] = loadImage('b_pawn.png');

    //black rook
    icons[7] = loadImage('b_rook.png');

    //black knight
    icons[8] = loadImage('b_knight.png');

    //black bishop
    icons[9] = loadImage('b_bishop.png');

    //black queen
    icons[10] = loadImage('b_queen.png');

    //black king
    icons[11] = loadImage('b_king.png');
  } else {
    var link = "https://raw.githubusercontent.com/akehrli33/chess/main/"

    //white pawn
    icons[0] = loadImage(link.concat('w_pawn.png'));

    //white rook
    icons[1] = loadImage(link.concat('w_rook.png'));

    //white knight
    icons[2] = loadImage(link.concat('w_knight.png'));

    //white bishop
    icons[3] = loadImage(link.concat('w_bishop.png'));

    //white queen
    icons[4] = loadImage(link.concat('w_queen.png'));

    //white king
    icons[5] = loadImage(link.concat('w_king.png'));

    //black pawn
    icons[6] = loadImage(link.concat('b_pawn.png'));

    //black rook
    icons[7] = loadImage(link.concat('b_rook.png'));

    //black knight
    icons[8] = loadImage(link.concat('b_knight.png'));

    //black bishop
    icons[9] = loadImage(link.concat('b_bishop.png'));

    //black queen
    icons[10] = loadImage(link.concat('b_queen.png'));

    //black king
    icons[11] = loadImage(link.concat('b_king.png'));
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  board = new board();
  game = new game();

  game.setup();


  

}

function draw() {
  background(240);
  imageMode(CENTER);

  board.render();
  game.play();



}

function mouseClicked() {
  clicked = true;
}
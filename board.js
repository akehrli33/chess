function board() {

  if (width < height) {
    squareDim = width / 10;
  } else {
    squareDim = height / 10;
  }


  this.squares = [];
  var squareIndex = 0;

  for (r = 0; r < 8; r++) {
    for (c = 0; c < 8; c++) {

      var col;
      if (((c % 2 == 0) && (r % 2 == 0)) || ((c % 2 == 1) && (r % 2 == 1))) {
        col = 0; //black
      } else {
        col = 1; //white
      }
      this.squares[squareIndex] = new squar(r, c, col);
      squareIndex++;
    }
  }


  this.render = function() {

    for (i = 0; i < this.squares.length; i++) {
      this.squares[i].render();
    }

    //Border
    rectMode(CENTER);
    format(1, [0, 70, 0], 3, 0, []);
    rect(width / 2, height / 2, squareDim * 8, squareDim * 8);
  }
}



function squar(_r, _c, _col,) {
  this.c = _c;
  this.r = _r;
  this.option = false;
  this.occupied = false;

  var col = [];
  if (_col == 0) {
    this.col = [150, 150, 150];
  } else {
    this.col = [255, 255, 255];
  }

  this.x = (width / 2) - (squareDim * 4) + (this.c * squareDim) + (squareDim / 2);
  this.y = (height / 2) - (squareDim * 4) + (this.r * squareDim) + (squareDim / 2);

  this.render = function() {
    rectMode(CENTER);
    format(0, [], 0, 1, this.col);
    rect(this.x, this.y, squareDim, squareDim);
  }

}
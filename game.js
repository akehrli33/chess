function game() {

  this.turn = "white";

  this.setup = function() {

    pieces[0] = new piece("white", "pawn", 0, 6);
    pieces[1] = new piece("white", "pawn", 1, 6);
    pieces[2] = new piece("white", "pawn", 2, 6);
    pieces[3] = new piece("white", "pawn", 3, 6);
    pieces[4] = new piece("white", "pawn", 4, 6);
    pieces[5] = new piece("white", "pawn", 5, 6);
    pieces[6] = new piece("white", "pawn", 6, 6);
    pieces[7] = new piece("white", "pawn", 7, 6);

    pieces[8] = new piece("black", "pawn", 0, 1);
    pieces[9] = new piece("black", "pawn", 1, 1);
    pieces[10] = new piece("black", "pawn", 2, 1);
    pieces[11] = new piece("black", "pawn", 3, 1);
    pieces[12] = new piece("black", "pawn", 4, 1);
    pieces[13] = new piece("black", "pawn", 5, 1);
    pieces[14] = new piece("black", "pawn", 6, 1);
    pieces[15] = new piece("black", "pawn", 7, 1);

    pieces[16] = new piece("white", "rook", 0, 7);
    pieces[17] = new piece("white", "knight", 1, 7);
    pieces[18] = new piece("white", "bishop", 2, 7);
    pieces[19] = new piece("white", "queen", 3, 7);
    pieces[20] = new piece("white", "king", 4, 7);
    pieces[21] = new piece("white", "bishop", 5, 7);
    pieces[22] = new piece("white", "knight", 6, 7);
    pieces[23] = new piece("white", "rook", 7, 7);

    pieces[24] = new piece("black", "rook", 0, 0);
    pieces[25] = new piece("black", "knight", 1, 0);
    pieces[26] = new piece("black", "bishop", 2, 0);
    pieces[27] = new piece("black", "queen", 3, 0);
    pieces[28] = new piece("black", "king", 4, 0);
    pieces[29] = new piece("black", "bishop", 5, 0);
    pieces[30] = new piece("black", "knight", 6, 0);
    pieces[31] = new piece("black", "rook", 7, 0);

  }


  this.play = function() {

    if (clicked) {
      //check if any piece clicked on
      for (var i = 0; i < pieces.length; i++) {
        var a = pieces[i].x - mouseX;
        var b = pieces[i].y - mouseY;
        var d = pythag(a, b);

        if (d < squareDim * 0.4 && pieces[i].player == this.turn) {
          pieces[i].selected = true;
	  activePiece = pieces[i];
        } else {
          pieces[i].selected = false;
        }
      }

      //check if any option squares clicked on
      for (var i = 0; i < board.squares.length; i++) {
        var targetSquare = board.squares[i];
        if (targetSquare.option &&
          mouseX > targetSquare.x - (squareDim / 2) &&
          mouseX < targetSquare.x + (squareDim / 2) &&
          mouseY > targetSquare.y - (squareDim / 2) &&
          mouseY < targetSquare.y + (squareDim / 2)) {

          //check if target square is occupied and remove
          if (targetSquare.occupied) {
            for (var i = pieces.length - 1; i > -1; i--) {
              if (pieces[i].parentSquare == targetSquare) {
                pieces.splice(i, 1);
              }
            }
          }

          //move selected piece to selected square          
          activePiece.parentSquare.occupied = null;
          activePiece.parentSquare = targetSquare;
          targetSquare.occupied = activePiece.player;

          if (this.turn == "white") {
            this.turn = "black";
          } else {
            this.turn = "white";
          }
        }

	targetSquare.option = false;
      }

    clicked = false;
    }

    for (var i = 0; i < pieces.length; i++) {
      pieces[i].render();

      if (pieces[i].selected) {

        pieces[i].calculateOptions();

      }
    }
    
  }


}
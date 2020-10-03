function piece(_player, _typ, _c, _r) {
  this.type = _typ;
  this.player = _player;
  this.selected = false;

  var parentIndex = (_r * 8) + _c;
  this.parentSquare = board.squares[parentIndex];
  this.parentSquare.occupied = this.player;

  this.render = function() {

    this.x = this.parentSquare.x;
    this.y = this.parentSquare.y;

    if (this.player == "white") {
      format(0, [], 0, 1, [180, 0, 0]);
    } else {
      format(0, [], 0, 1, [0, 150, 0]);
    }
    
    if (this.selected) {
      strokeWeight(4);
      stroke(150, 180, 255);
    } else {
      noStroke();
    }

    var icon;

    if (this.player == "white") {
      if (this.type == "pawn") {
        icon = icons[0];
      } else if (this.type == "rook") {
        icon = icons[1];
      } else if (this.type == "knight") {
        icon = icons[2];
      } else if (this.type == "bishop") {
        icon = icons[3];
      } else if (this.type == "queen") {
        icon = icons[4];
      } else {
        icon = icons[5];
      }
    } else {
      if (this.type == "pawn") {
        icon = icons[6];
      } else if (this.type == "rook") {
        icon = icons[7];
      } else if (this.type == "knight") {
        icon = icons[8];
      } else if (this.type == "bishop") {
        icon = icons[9];
      } else if (this.type == "queen") {
        icon = icons[10];
      } else {
        icon = icons[11];
      }
    }

    image(icon, this.x, this.y, squareDim, squareDim);
  }

  this.calculateOptions = function() {
    
    var options = [];

    if (this.type == "pawn") {
      var index = 0;
      if (this.player == "white") {
        options[index] = new option(this.parentSquare.c, this.parentSquare.r - 1);
        index++;
        if (this.parentSquare.r == 6) {
          options[index] = new option(this.parentSquare.c, this.parentSquare.r - 2);
          index++;
        }

        var targetIndex1 = ((this.parentSquare.r - 1) * 8) + this.parentSquare.c + 1;
        if (board.squares[targetIndex1].occupied) {
          options[index] = new option(this.parentSquare.c + 1, this.parentSquare.r - 1);
          index++;
        }
      }
    }

    if (this.type == "knight") {
      options[0] = new option(this.parentSquare.c - 2, this.parentSquare.r - 1);
      options[1] = new option(this.parentSquare.c - 1, this.parentSquare.r - 2);
      options[2] = new option(this.parentSquare.c + 1, this.parentSquare.r - 2);
      options[3] = new option(this.parentSquare.c + 2, this.parentSquare.r - 1);
      options[4] = new option(this.parentSquare.c + 2, this.parentSquare.r + 1);
      options[5] = new option(this.parentSquare.c + 1, this.parentSquare.r + 2);
      options[6] = new option(this.parentSquare.c - 1, this.parentSquare.r + 2);
      options[7] = new option(this.parentSquare.c - 2, this.parentSquare.r + 1);
    }

    if (this.type == "bishop") {
      var index = 0;
      for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 8; j++) {
          options[index] = new option(this.parentSquare.c + j, this.parentSquare.r - j);
          index++;
        }
      }
    }

    for (var i = 0; i < options.length; i++) {
      if (options[i].c > -1 &&
      options[i].c < 8 &&
      options[i].r > -1 &&
      options[i].r < 8 &&
      options[i].square.occupied != this.player) {
        options[i].render();
        options[i].square.option = true;
      }
    }
  }
}

function option(_c, _r) {
  this.c = _c;
  this.r = _r;
  var newIndex = (this.r * 8) + this.c;
  this.square = board.squares[newIndex];

  this.render = function() {
    format(0, [], 0, 1, [150, 180, 255]);
    ellipse(this.square.x, this.square.y, squareDim * 0.2);
  }
}
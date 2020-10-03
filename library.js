var x = 0;
var y = 1;

function format(_stroke, scol, sweight, _fill, fcol) {
  if(_stroke == 0) {
     noStroke();
  } else {
    stroke(scol[0], scol[1], scol[2]);
    strokeWeight(sweight);
  }
  
  if(_fill == 0) {
    noFill();
  } else {
    fill(fcol[0], fcol[1], fcol[2]);
  }
}

function pythag(_a, _b) {
    return Math.sqrt((_a * _a) + (_b * _b));
}

function isectLines(l1Start, l1End, l2Start, l2End) {

    //If both lines are vertical
    if ((l1End[x] - l1Start[x]) == 0 && (l2End[x] - l2Start[x]) == 0) {
        console.log("Both lines are vertical");
        return;
    }

    //If only Line 1 is vertical
    if ((l1End[x] - l1Start[x]) == 0) {

        l2m = (l2End[y] - l2Start[y]) / (l2End[x] - l2Start[x]);
        l2c = l2Start[y] - (l2m * l2Start[x]);

        isectX = l1Start[x];
        isectY = (l2m * isectX) + l2c;
        return [isectX, isectY];
   }

    //If only Line 2 is vertical
    if ((l2End[x] - l2Start[x]) == 0) {
        l1m = (l1End[y] - l1Start[y]) / (l1End[x] - l1Start[x]);
        l1c = l1Start[y] - (l1m * l1Start[x]);

        isectX = l2Start[x];
        isectY = (l1m * isectX) + l1c;
        return [isectX, isectY];
  }

    //If neither is vertical

    l1m = (l1End[y] - l1Start[y]) / (l1End[x] - l1Start[x]);
    l1c = l1Start[y] - (l1m * l1Start[x]);
    l2m = (l2End[y] - l2Start[y]) / (l2End[x] - l2Start[x]);
    l2c = l2Start[y] - (l2m * l2Start[x]);

        //If they are not parallel
    if (l1m !== l2m) {

        isectX = (l2c - l1c) / (l1m - l2m);
        isectY = (l1m * isectX) + l1c;

        return [isectX, isectY];

    } else {
        console.log("Both lines are parallel");
        return;
    }

       
}

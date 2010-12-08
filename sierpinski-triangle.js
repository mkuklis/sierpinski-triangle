function sierpinskiTriangle(proc) {
  // height/width ratio  
  var ratio = Math.sqrt(3) / 2,
    w = proc.width,
    h = proc.height,
    // side length
    sideLength = Math.min(w, h / ratio) - 1,
    midPoint = {x: w / 2, y: h / 2},
    // starting points
    points = [
      {x: midPoint.x, y: midPoint.y - sideLength * ratio / 2},
      {x: midPoint.x - sideLength / 2, y: midPoint.y + sideLength * ratio / 2},
      {x: midPoint.x + sideLength / 2, y: midPoint.y + sideLength * ratio / 2}
    ],
    currentPoint = {x: points[0].x, y: points[0].y};

  function drawPoint(point) {
    proc.point(point.x, point.y);
  }

  function drawNextPoint() {
    moveTowards();
    drawPoint(currentPoint);
  }

  function moveTowards() {
    var direction = Math.floor(Math.random() * 3);
    currentPoint.x = (currentPoint.x + points[direction].x) / 2;
    currentPoint.y = (currentPoint.y + points[direction].y) / 2;
  }

  function init() {
    for (var i = 0; i < points.length; i++) {
      drawPoint(points[i]);
    }
  }
  proc.stroke(0);

  proc.draw = function() {
    init();
    drawNextPoint();
  };
}

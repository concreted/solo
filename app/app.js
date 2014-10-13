var Tetromino = function(type) {


}


var Grid = function(height, width) {


}

var Game = function(mode, speed, grid) {


}



//update loop - based on speed
//update position of current piece
//check if piece is touching bottom - if so end turn
//

var width = 960,
height = 500;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g")
  .attr("transform", "translate(32," + (height / 2) + ")");

var Tetromino = function(x,y) {
  this.location = [x,y];
};

var Square = function(x,y){
  Tetromino.apply(this, arguments);

};



Tetromino.prototype.rotateRight = function() {

};

Tetromino.prototype.rotateLeft = function() {

};

Tetromino.prototype.drop = function() {
  this.location[0]++;
};

Tetromino.prototype.isClear = function() {
  var position = this.position();
  // check if underneath is clear
};

Square.prototype = Object.create(Tetromino.prototype);
Square.prototype.constructor = Square;
Square.prototype.position = function() {
  return [[this.location[0], this.location[1]],
          [this.location[0]+1, this.location[1]],
          [this.location[0], this.location[1]+1],
          [this.location[0]+1, this.location[1]+1]];
};

var makeGrid= function(height, width) {
  // represent grid as 2d array of 0s/1s
  var row = new Int8Array(width);
  var grid = [];
  for (var i = 0; i < height; i++) {
    grid.push(Array.prototype.slice.call(row));
  }

  return grid;
};

var Game = function(mode, speed) {
  var grid = makeGrid(10,10);
  console.log(grid);
  var inPlay = new Square(0,0);
  console.log(inPlay.location);
  console.log(inPlay.position());
  // setinterval
  // on each tick:
  // descend current piece
  // check if current piece touching ground
  // if current piece touching ground when tick

  // select piece in play
  //d3.select('.inPlay')

  // update its position


  setInterval(function() {
    // erase old position
    _.each(inPlay.position(), function(pos) {
      //debugger;
      grid[pos[0]][pos[1]] = 0;
    });
    // move piece down one
    inPlay.drop();
    // place new position
    //debugger;
    _.each(inPlay.position(), function(pos) {
      grid[pos[0]][pos[1]] = 1;
    });
    console.log(grid);

  }, 1000);
};


// data is the whole grid: every turn it will be one row lower
var update = function(grid) {

}

//update loop - based on speed
//update position of current piece
//check if piece is touching bottom - if so flag to end turn on next if in same position
//

var width = 960,
height = 500;

grid_height = 10;
grid_width = 10;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g")
  .attr("transform", "translate(32," + (height / 2) + ")");

for (var i = 0; i < grid_height; i++) {
  for (var j = 0; j < grid_width; j++) {
    d3.select('svg').append('image')
      .attr('class', 'empty')
      .attr('fill', 'red')
      .attr('height', 30)
      .attr('width', 30)
      .attr('x', 50 * j)
      .attr('y', 50 * i);
  }
}

Game();

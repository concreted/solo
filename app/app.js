var grid_height = 5;
var grid_width = 10;
var block_size = 30;



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

  // setinterval
  // on each tick:
  // descend current piece
  // check if current piece touching ground
  // if current piece touching ground when tick

  // select piece in play
  //d3.select('.inPlay')

  // update its position



};


// data is the whole grid: every turn it will be one row lower
var updateInPlay = function(piece) {
  //debugger;
  var svg = d3.select('svg');
  var active = svg.selectAll('.inplay').data(piece.position());
  active.enter().append('rect');

  active.transition()
    .attr('x', function(d, i) { return d.x; })
    .attr('y', function(d, i) { return d.y; })
    .attr('class', 'inplay')
    .attr('height', piece.size)
    .attr('width', piece.size)
    .attr('fill', '#000000')

  active.exit().remove();
};

//update loop - based on speed
//update position of current piece
//check if piece is touching bottom - if so flag to end turn on next if in same position
//

var width = 960,
height = 500;



var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
.append("g")
  .attr("transform", "translate(32," + (height / 2) + ")");

for (var i = 0; i < grid_height; i++) {
  for (var j = 0; j < grid_width; j++) {
    d3.select('svg').append('rect')
      .attr('class', 'empty')
      .attr('fill', '#666666')
      .attr('height', block_size)
      .attr('width', block_size)
      .attr('x', block_size * j)
      .attr('y', block_size * i);
  }
}

  var grid = makeGrid(grid_height, grid_width);
  console.log(grid);
  var inPlay = new Square(0,0, 30);
  console.log(inPlay.location);
  console.log(inPlay.position());

  updateInPlay(inPlay);

  setInterval(function() {
    // erase old position

    _.each(inPlay.positionGrid(), function(pos) {
      if (grid[pos.x][pos.y] === undefined) debugger;
      grid[pos.x][pos.y] = 0;
    });
    // check if clear below piece
    // move piece down one
    if (inPlay.isClear(grid)) {
      inPlay.drop();
    }

    // place new position
    _.each(inPlay.positionGrid(), function(pos) {
      grid[pos.x][pos.y] = 1;
    });

    // render in d3
    updateInPlay(inPlay);

  }, 1000);

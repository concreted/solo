var grid_height = 15;
var grid_width = 10;
var block_size = 30;

var inPlay = null;

var makeGrid= function(height, width) {
  // represent grid as 2d array of 0s/1s
  var row = new Int8Array(width);
  var grid = [];
  for (var i = 0; i < height; i++) {
    grid.push(Array.prototype.slice.call(row));
  }

  return grid;
};

var displayGrid = function(grid) {
  for (var i = 0; i < grid.length; i++) {
    console.log(JSON.stringify(grid[i]));
  }
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

var placePiece = function() {
  var svg = d3.select('svg');
  var active = svg.selectAll('.inplay');

  active//.transition()
    .classed({'inplay': false, 'placed': true});

};
// data is the whole grid: every turn it will be one row lower
var updateInPlay = function(piece) {
  //debugger;
  var svg = d3.select('svg');
  var active = svg.selectAll('.inplay').data(piece.position());
  active.enter().append('rect');

  active//.transition()
    .attr('x', function(d, i) { return d.x; })
    .attr('y', function(d, i) { return d.y; })
    .attr('class', 'inplay')
    .attr('height', piece.size)
    .attr('width', piece.size)
    .attr('fill', '#000000')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)

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
      .attr('y', block_size * i)
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
  }
}

var handleKeys = function () {
  //console.log(event);
  if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)
  d3.event.preventDefault();
  if (event.keyCode === 37) {
    _.each(inPlay.positionGrid(), function(pos) {      
      grid[pos.y][pos.x] = 0;
    });


    inPlay.moveLeft();
    console.log('left!');

    _.each(inPlay.positionGrid(), function(pos) {
      grid[pos.y][pos.x] = 1;
    });
    
 

   updateInPlay(inPlay);
  }
  if (event.keyCode === 38) {
    console.log('up!');

  }
  if (event.keyCode === 39) {
    _.each(inPlay.positionGrid(), function(pos) {      
      grid[pos.y][pos.x] = 0;
    });

    

    inPlay.moveRight();
    console.log('right!');
    _.each(inPlay.positionGrid(), function(pos) {
      grid[pos.y][pos.x] = 1;
    });
    
    

   updateInPlay(inPlay);
  }
  if (event.keyCode === 40) {
    _.each(inPlay.positionGrid(), function(pos) {      
      grid[pos.y][pos.x] = 0;
    });

    // move piece down one

    inPlay.drop();
    console.log('down!');

    // place new position
    _.each(inPlay.positionGrid(), function(pos) {
      grid[pos.y][pos.x] = 1;
    });
 
   updateInPlay(inPlay);
  }
}
  // Capture keydown
  d3.select("body").on("keydown", handleKeys);

  var grid = makeGrid(grid_height, grid_width);
  var placing = false;

  console.log(grid);
  inPlay = new Square(0, 0, 30,grid);
  console.log(inPlay.location);
  console.log(inPlay.position());

  updateInPlay(inPlay);

  setInterval(function() {
    // check if piece is sitting on anything
    if (inPlay.isClear(grid)) {
      placing = false;
    }
    
    // Put piece in final position--------------
    // ---------- this is d3 stuff--------------
    if (placing) {
      placePiece();

      inPlay = new Square(0,0,30, grid);
      updateInPlay(inPlay);

      placing = false; // except this - should be part of TetrisField

      //debugger;
      return;
    }
    // ---------------------------------------


    // check if clear below piece
    if (inPlay.isClear(grid)) {
      // erase old position
      _.each(inPlay.positionGrid(), function(pos) {      
        grid[pos.y][pos.x] = 0;
      });

      // move piece down one
      inPlay.drop();

      // place new position
      _.each(inPlay.positionGrid(), function(pos) {
        grid[pos.y][pos.x] = 1;
      });
    }
    else {
      placing = true;
    }

    // render in d3
    updateInPlay(inPlay);

  }, 1000);

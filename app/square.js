var Square = function(x, y, size, grid){
  Tetromino.apply(this, arguments);
  
};

Square.prototype = Object.create(Tetromino.prototype);
Square.prototype.constructor = Square;
Square.prototype.positionGrid = function() {
  return [{x: this.location[0], y: this.location[1]},
          {x: this.location[0]+1, y: this.location[1]},
          {x: this.location[0], y: this.location[1]+1},
          {x: this.location[0]+1, y: this.location[1]+1}];
};
Square.prototype.position = function() {
  return [{x: this.location[0] * this.size, y: this.location[1] * this.size},
          {x: (this.location[0]+1) * this.size, y: this.location[1] * this.size},
          {x: this.location[0] * this.size, y: (this.location[1]+1) * this.size},
          {x: (this.location[0]+1) * this.size, y: (this.location[1]+1) * this.size}];
};

Square.prototype.checkRight = function() {
  
}

Square.prototype.isClear = function() {
  var position = this.positionGrid();
  var bottomPieces = [position[2], position[3]];
  // check if underneath is clear
  //debugger;
  return _.every(bottomPieces, function(pos) {
    return (this.grid[pos.y+1] !== undefined && this.grid[pos.y+1][pos.x] === 0)
  });
};

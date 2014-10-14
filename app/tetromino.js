var Tetromino = function(x, y, size, grid) {
  this.size = size;
  this.grid = grid;
  this.location = [x,y];
};

Tetromino.prototype.rotateRight = function() {

};

Tetromino.prototype.rotateLeft = function() {

};

Tetromino.prototype.drop = function() {
  if (this.isClear()) {
    this.location[1]++;
  }
};

Tetromino.prototype.moveRight = function() {
  this.location[0]++;
};

Tetromino.prototype.moveLeft = function() {
  this.location[0]--;
};

Tetromino.prototype.isClear = function() {
  return false;
};

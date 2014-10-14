var Tetromino = function(x, y, size) {
  this.size = size;
  this.location = [x,y];
};

Tetromino.prototype.rotateRight = function() {

};

Tetromino.prototype.rotateLeft = function() {

};

Tetromino.prototype.drop = function() {
  this.location[1]++;
};

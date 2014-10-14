var Field = function(height, width) {
  // instantiate grid
  this.grid = ...

  // active piece
  this.active = null;

  // dead piece flag (placing)
  this.dead = false;

  
}

// both args: array of objects containing x/y coordinates
// dest used to check whether those spaces are empty before allowing the move
Field.prototype.move(current, dest) {
  // check whether all spaces in dest are empty in this.grid

  // if yes
    // wipe out spaces in current
    // set dest spaces to 1
    // return true
  
  // if no
    // return false
}



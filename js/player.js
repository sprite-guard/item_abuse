// player.js

var player = {
  x: 100,
  y: 500,
  w: 20,
  h: 30,
  dx: 4,
  dy: -4, // NB test values
  weight: 0.1,
  acceleration: 0.5,
  max_x_speed: 5,
  max_y_speed: 8,
  alive: true
}

player.update = function() {
  this.x += this.dx;
  this.y += this.dy;
  this.dy += this.weight;
  if((this.x + (this.h / 2)) >= helpers.w) {
    this.x = helpers.w - (this.w / 2);
    this.dx = 0;
  }
  if((this.y + (this.w/2)) >= helpers.h) {
    this.y = helpers.h - (this.h / 2);
    this.dy = 0;
  }
}

player.draw = function(ctx) {
  ctx.lineStyle(3,0x004488,1);
  ctx.beginFill(0x006699,1);
  var ulhc = { x: this.x - (this.w / 2), y: this.y - (this.h / 2) }
  ctx.drawRect(ulhc.x, ulhc.y, this.w, this.h )
}

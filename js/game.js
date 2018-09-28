var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb, antialias: true });
document.body.appendChild(app.view);

app.stage.interactive = true;

var graphics = new PIXI.Graphics();

app.stage.addChild(graphics);

// let's create a moving shape
var thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = 800/2;
thing.y = 600/2;

app.ticker.add(function() {
  graphics.clear();
  player.update();
  player.draw(graphics);
});

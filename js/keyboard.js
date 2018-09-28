var K_LEFT = 37,
    K_UP = 38,
    K_RIGHT = 39,
    K_DOWN = 40,
    K_RESET = 82,
    K_MENU = 27,
    K_PAUSE = 80,
    K_JUMP = 88,
    K_HOLD = 90,
    K_TWIRL = 67,
    K_DASH = 32,
    DEBUG = true;

var CONTROLS = [];

/*{
    left: 0,
    right: 0,
    up: 0,
    down: 0,
    blink: 0,
    spirit: 0,
    reset: 0,
    slow: 0,
    shield: 0
};
*/

window.onkeydown = function(e){
  CONTROLS[e.keyCode] = true;
};

window.onkeyup = function(e){
  CONTROLS[e.keyCode] = false;
};

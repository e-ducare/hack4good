// ===========================================================
// See tutorial at :
// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
// ===========================================================

function listenAndAnimate(elementID) {
  // Init
  var container = document.getElementById("container"),
    grid = document.getElementById(elementID);

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    grid.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / grid.offsetHeight / 2).toFixed(2),
      (mouse.x / grid.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    grid.style.transform = style;
    grid.style.webkitTransform = style;
    grid.style.mozTranform = style;
    grid.style.msTransform = style;
    grid.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
};


listenAndAnimate('tile1')
// listenAndAnimate('tile2')


// for each tile, sent click handler to flip the card
// add card on the back with text and show

function flipCards() {

  var tiles = document.getElementsByClassName('tile');

  for (let i = 0; i < tiles.length; i++) {
    const element = tiles[i];
    console.log(element);
    element.addEventListener('click', (e) => {
      // console.log('clicked', e.target);
      e.target.classList.add('flipped')
    })
  }
}

flipCards()

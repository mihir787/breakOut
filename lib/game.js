var WIDTH;
var HEIGHT;
var ctx;

function Game() {
}


$(document).ready {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  $("#start-button").click(function() {
    const game = new Game();
  }
}

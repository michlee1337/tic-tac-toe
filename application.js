var board = [0,0,0,0,2,0,0,0,0]

document.addEventListener('DOMContentLoaded', function() {

    $(".board").on('click', function() {
      //adapting the array

      //Change the clicked tile to 1
      var tile = this.id;
      if (tile === 0){
        return 0;
      }
      board[tile] = 1;

      //changing a random empty tile to 2
      do {
          var count = Math.floor(Math.random() * 10);
      }
      while (board[count] !== 0)

      board[count] = 2;

      //Generate board
      for (var i=0; i<9; i++){
        if (board[i] == 1) {
          var tile = '#' + i;
          $(tile).html("<p>X</p>");
        }
        if (board[i] == 2) {
          var tile = '#' + i;
          $(tile).html("<p>O</p>");
        }
      }

    });

});

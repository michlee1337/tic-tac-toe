var board = [0,0,0,0,0,0,0,0,0]

document.addEventListener('DOMContentLoaded', function() {

    $(".board").on('click', function() {
      //adapting the array

      //Change the clicked tile to show X
      var tile = this.id;
      if (tile === 0){
        return 0;
      }
      board[tile] = 1;

      for (var i=0; i<9; i++){
        if (board[i] == 1) {
          var tile = '#' + i;
          $(tile).html("<p>X</p>");
        }
      }

      //Making O's move

      //if 1st X is corner
      if ( $('.corner').children().length > 0 ) {
        board[4] = 2;
        console.log('corner');
      };

      //if 1st X is center !!randomise from 4 corners
      if ( $('#4').children().length > 0 ) {
        board[0] = 2;
        console.log('center');
      };

      //if 1st X is edge
      if ( $('.edge').children().length > 0 ) {
        var eChange = this.id
        var eRes = 0;
        console.log(eChange);
        if (eChange==1||eChange==7){
          eRes = eChange - 1;
          console.log('a');
        }

        if (eChange==3||eChange==5){
          eRes = eChange - 3;
          console.log('b');
        }
        board[eRes] = 2;
        console.log('corner');
      };

      for (var i=0; i<9; i++){
        if (board[i] == 2) {
          var tile = '#' + i;
          $(tile).html("<p>O</p>");
        }
      }



/*      //changing a random empty tile to 2
      do {
          var count = Math.floor(Math.random() * 10);
      }
      while (board[count] !== 0)

      board[count] = 2;
*/

      //Generate board


    });

});

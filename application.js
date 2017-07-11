var board = [0,0,0,0,0,0,0,0,0]

//What is a win

// Horizontal
function hwin (board) {
  for (i = 0; i <= 6; i += 3) {
    if (board[i] == board[i+1] &&
        board[i] == board[i+2] &&
        board[i] !== 0){
          console.log('hwin')
          return true
        }
  }
  return false
}

// Vertical
function vwin (board) {
  for(var i = 0; i <= 2; i ++){
    if (board[i] == board[i+3] &&
        board[i] == board[i+6] &&
        board[i] !== 0){
          console.log('vwin')
          return true
        }
  }
  return false
}

// Diagonal
function dwin (board) {
  if (board[0] == board[4] &&
      board[0] == board[8] &&
      board[0] !== 0){
        console.log('dwin')
        return true
      }
  else if (board[2] == board[4] &&
           board[2] == board[6] &&
           board[2] !== 0){
             console.log('dwin')
             return true
            }
}

// Any win
function win (board) {
  if (hwin(board) ||
      vwin(board) ||
      dwin(board)){
        return true
      }
      return false
}


document.addEventListener('DOMContentLoaded', function() {


  //if someone wins

    $(".board").on('click', function() {

      //adapting the array

      //Change the clicked tile to 1
      var tile = this.id;
      console.log(tile);
      if (board[tile] === 0){
        board[tile] = 1;
      };

      //changing a random empty tile to 2
      do {
          var count = Math.floor(Math.random() * 10);
      }
      while (board[count] !== 0)

      board[count] = 2;

      console.log(board);

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

      //check for winner
      if (win(board)){
        console.log('win');
        $("#scoreboard").html('<p>' + "Yay! Winner!" + '</p>');
      };


    });

});

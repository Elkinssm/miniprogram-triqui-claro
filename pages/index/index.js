  Page({
    data: {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      currentPlayer: "X"
        },
    

    handleCellClick: function(event) {
      console.log("click")
      var row = event.currentTarget.dataset.row;
      var col = event.currentTarget.dataset.col;
      var board = this.data.board;
      var currentPlayer = this.data.currentPlayer;
    
     {
        board[row][col] = currentPlayer;
        this.setData({
          board: board,
          currentPlayer: currentPlayer == 'X' ? 'O' : 'X'
        });
      }
    }
  });

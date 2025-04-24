function createChessboard() {
    var boardsize = document.getElementById('boardsize').value;
    var displayBoard = document.getElementById('displayBoard');

    // Clear previous board
    displayBoard.innerHTML = '';

    // Set board dimensions
    displayBoard.style.height = `${boardsize * 50}px`;
    displayBoard.style.width = `${boardsize * 50}px`;

    for (var row = 0; row < boardsize; row++) {
        for (var col = 0; col < boardsize; col++) {
            var box = document.createElement('div');
            box.className = 'box';
            
            if ((row + col) % 2 === 0) {
                box.classList.add('white');
                box.innerText = '*';
            } else {
                box.classList.add('black');
                box.innerText = '#';
            }
            displayBoard.appendChild(box);
        }
    }
}

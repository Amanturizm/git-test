"use strict";
const board = [];
for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            board.push('  ');
        }
        else {
            board.push('\u2588\u2588');
        }
    }
    board.push('\n');
}
console.log(board.join(''));

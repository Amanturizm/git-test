const board: string[] = [];

for (let i: number = 1; i < 8; i++) {
    for (let j: number = 1; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            board.push('  ');
        } else {
            board.push('\u2588\u2588')
        }
    }
    board.push('\n');
}

console.log(board.join(''));
// kek
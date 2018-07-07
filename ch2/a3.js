const size = 8;

let board = '';

for (let y = 0; y < size; y+=1) {
  for (let x = 0; x < size; x+=1) {
    if ((x + y) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);

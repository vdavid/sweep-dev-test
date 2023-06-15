type SudokuPuzzle = (number | null)[][];

function isValid(puzzle: SudokuPuzzle, row: number, col: number, num: number): boolean {
  // Check if the number already exists in the row or column
  for (let i = 0; i < 9; i++) {
    if (puzzle[row][i] === num || puzzle[i][col] === num) {
      return false;
    }
  }

  // Check if the number exists in the 3x3 box
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (puzzle[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }

  return true;
}

function findEmptyCell(puzzle: SudokuPuzzle): [number, number] | null {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] === null) {
        return [i, j];
      }
    }
  }

  return null;
}

function generateSudoku(difficulty: number): SudokuPuzzle {
  const puzzle: SudokuPuzzle = Array(9).fill(null).map(() => Array(9).fill(null));

  // Fill the puzzle with numbers
  for (let i = 0; i < 81 - difficulty * 9; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 9);
      col = Math.floor(Math.random() * 9);
    } while (puzzle[row][col] !== null);

    let num;
    do {
      num = Math.floor(Math.random() * 9) + 1;
    } while (!isValid(puzzle, row, col, num));

    puzzle[row][col] = num;
  }

  return puzzle;
}

export default generateSudoku;
```


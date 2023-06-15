import React from 'react';

const SudokuBoard = ({ sudoku }) => {
  return (
    <div>
      {sudoku && sudoku.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <span key={j}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
```


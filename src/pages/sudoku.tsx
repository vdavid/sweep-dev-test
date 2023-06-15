import React, { useState } from 'react';
import generateSudoku, { SudokuPuzzle } from '../sudokuGenerator';
import SudokuCell from '../components/SudokuCell';

const SudokuPage: React.FC = () => {
  const [puzzle, setPuzzle] = useState<SudokuPuzzle>(generateSudoku(1));

  const handleGenerate = () => {
    setPuzzle(generateSudoku(1));
  };

  return (
    <div>
      {puzzle.map((row, i) => (
        <div key={i}>
          {row.map((num, j) => (
            <SudokuCell key={j} num={num} />
          ))}
        </div>
      ))}
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default SudokuPage;
```


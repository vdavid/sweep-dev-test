import React from 'react';

type SudokuCellProps = {
  num: number | null;
};

const SudokuCell: React.FC<SudokuCellProps> = ({ num }) => {
  return <div>{num !== null ? num : ''}</div>;
};

export default SudokuCell;
```


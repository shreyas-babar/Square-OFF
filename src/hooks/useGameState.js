import { useState } from 'react';

const createGrid = (rows, cols, initialVal = 0) =>
  Array(rows).fill(null).map(() => Array(cols).fill(initialVal));

export function useGameState(initialGridSize = 5) {
  const [gridSize, setGridSize] = useState(initialGridSize);
  const [hLines, setHLines] = useState(() => createGrid(initialGridSize + 1, initialGridSize, 0));
  const [vLines, setVLines] = useState(() => createGrid(initialGridSize, initialGridSize + 1, 0));
  const [boxes, setBoxes] = useState(() => createGrid(initialGridSize, initialGridSize, null));

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkCompletedBoxes = (newHLines, newVLines, currentBoxes) => {
    const newlyClaimed = [];
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (currentBoxes[r][c] !== null) continue;

        const top = newHLines[r][c] !== 0;
        const bottom = newHLines[r + 1][c] !== 0;
        const left = newVLines[r][c] !== 0;
        const right = newVLines[r][c + 1] !== 0;

        if (top && bottom && left && right) {
          newlyClaimed.push({ r, c });
        }
      }
    }
    return newlyClaimed;
  };

  const handleLineClick = (type, row, col) => {
    if (gameOver) return;

    const newHLines = hLines.map(r => [...r]);
    const newVLines = vLines.map(r => [...r]);

    if (type === 'H') {
      if (newHLines[row][col] !== 0) return;
      newHLines[row][col] = currentPlayer;
    } else {
      if (newVLines[row][col] !== 0) return;
      newVLines[row][col] = currentPlayer;
    }

    const newlyClaimedBoxes = checkCompletedBoxes(newHLines, newVLines, boxes);

    setHLines(newHLines);
    setVLines(newVLines);

    if (newlyClaimedBoxes.length > 0) {
      const newBoxes = boxes.map(r => [...r]);
      const pointsEarned = newlyClaimedBoxes.length; // 1 point per completed box

      newlyClaimedBoxes.forEach(({ r, c }) => {
        newBoxes[r][c] = currentPlayer;
      });

      setBoxes(newBoxes);

      const nextP1 = currentPlayer === 1 ? scores.p1 + pointsEarned : scores.p1;
      const nextP2 = currentPlayer === 2 ? scores.p2 + pointsEarned : scores.p2;
      setScores({ p1: nextP1, p2: nextP2 });

      const totalClaimed = newBoxes.flat().filter(b => b !== null).length;
      if (totalClaimed === gridSize * gridSize) {
        setGameOver(true);
        if (nextP1 === nextP2) {
          setWinner('DRAW');
        } else {
          setWinner(nextP1 > nextP2 ? 1 : 2);
        }
      }
    } else {
      setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
    }
  };

  const resetGame = (newSize = gridSize) => {
    setGridSize(newSize);
    setHLines(createGrid(newSize + 1, newSize, 0));
    setVLines(createGrid(newSize, newSize + 1, 0));
    setBoxes(createGrid(newSize, newSize, null));
    setCurrentPlayer(1);
    setScores({ p1: 0, p2: 0 });
    setGameOver(false);
    setWinner(null);
  };

  return {
    gridSize,
    hLines,
    vLines,
    boxes,
    currentPlayer,
    scores,
    gameOver,
    winner,
    handleLineClick,
    resetGame
  };
}
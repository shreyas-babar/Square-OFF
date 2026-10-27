import React from 'react';
import styles from './GameBoard.module.css';

export default function GameBoard({ gridSize, hLines, vLines, boxes, handleLineClick, gameOver }) {
    const matrixDimension = gridSize * 2 + 1;
    const cellSize = gridSize === 3 ? 'clamp(40px, 11vh, 85px)' : 'clamp(26px, 7vh, 56px)';
    const dotSize = 'clamp(8px, 1.2vh, 12px)';

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.matrix}
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, ${dotSize} ${cellSize}) ${dotSize}`,
                    gridTemplateRows: `repeat(${gridSize}, ${dotSize} ${cellSize}) ${dotSize}`
                }}
            >
                {Array.from({ length: matrixDimension }).map((_, r) =>
                    Array.from({ length: matrixDimension }).map((_, c) => {
                        const isEvenRow = r % 2 === 0;
                        const isEvenCol = c % 2 === 0;

                        // 1. CORNER DOT
                        if (isEvenRow && isEvenCol) {
                            return (
                                <div
                                    key={`dot-${r}-${c}`}
                                    className={styles.dot}
                                    style={{ width: dotSize, height: dotSize }}
                                />
                            );
                        }

                        // 2. HORIZONTAL LINE
                        if (isEvenRow && !isEvenCol) {
                            const lineRow = r / 2;
                            const lineCol = (c - 1) / 2;
                            const state = hLines[lineRow][lineCol];

                            return (
                                <button
                                    key={`hline-${lineRow}-${lineCol}`}
                                    onClick={() => handleLineClick('H', lineRow, lineCol)}
                                    disabled={state !== 0 || gameOver}
                                    className={`${styles.lineBtn} ${state === 0 ? styles.activePointer : ''}`}
                                    style={{ height: dotSize, width: '100%' }}
                                >
                                    <div
                                        className={`${styles.lineBar} ${state === 1 ? styles.p1Line : state === 2 ? styles.p2Line : ''
                                            }`}
                                        style={{ height: 'calc(100% - 2px)', width: '100%' }}
                                    />
                                </button>
                            );
                        }

                        // 3. VERTICAL LINE
                        if (!isEvenRow && isEvenCol) {
                            const lineRow = (r - 1) / 2;
                            const lineCol = c / 2;
                            const state = vLines[lineRow][lineCol];

                            return (
                                <button
                                    key={`vline-${lineRow}-${lineCol}`}
                                    onClick={() => handleLineClick('V', lineRow, lineCol)}
                                    disabled={state !== 0 || gameOver}
                                    className={`${styles.lineBtn} ${state === 0 ? styles.activePointer : ''}`}
                                    style={{ width: dotSize, height: '100%' }}
                                >
                                    <div
                                        className={`${styles.lineBar} ${state === 1 ? styles.p1Line : state === 2 ? styles.p2Line : ''
                                            }`}
                                        style={{ width: 'calc(100% - 2px)', height: '100%' }}
                                    />
                                </button>
                            );
                        }

                        // 4. BOX CELL
                        if (!isEvenRow && !isEvenCol) {
                            const boxRow = (r - 1) / 2;
                            const boxCol = (c - 1) / 2;
                            const owner = boxes[boxRow][boxCol];

                            return (
                                <div
                                    key={`box-${boxRow}-${boxCol}`}
                                    className={`${styles.boxCell} ${owner === 1 ? styles.p1Box : owner === 2 ? styles.p2Box : ''
                                        }`}
                                >
                                    {owner ? `P${owner}` : ''}
                                </div>
                            );
                        }

                        return null;
                    })
                )}
            </div>
        </div>
    );
}
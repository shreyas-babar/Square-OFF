import React from 'react';
import styles from './GameOverModal.module.css';

export default function GameOverModal({ gameOver, winner, scores, resetGame }) {
    if (!gameOver) return null;

    const titleStyle =
        winner === 1 ? styles.p1Title : winner === 2 ? styles.p2Title : styles.drawTitle;

    return (
        <div className={styles.overlay}>
            <div className={styles.card}>
                <h2 className={`${styles.title} ${titleStyle}`}>
                    {winner === 'DRAW' ? "IT'S A DRAW!" : `PLAYER ${winner} WINS!`}
                </h2>
                <p className={styles.score}>
                    Final Score: {scores.p1} - {scores.p2}
                </p>
                <button onClick={() => resetGame()} className={styles.playAgainBtn}>
                    Play Again
                </button>
            </div>
        </div>
    );
}
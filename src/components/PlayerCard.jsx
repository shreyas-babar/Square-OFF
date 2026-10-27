import React from 'react';
import styles from './PlayerCard.module.css';

export default function PlayerCard({ playerNumber, score, isActive, gameOver }) {
    const isP1 = playerNumber === 1;

    const activeStyle = isActive ? (isP1 ? styles.p1Active : styles.p2Active) : '';
    const titleStyle = isP1 ? styles.p1Title : styles.p2Title;
    const badgeStyle = isP1 ? styles.p1Badge : styles.p2Badge;

    return (
        <div className={`${styles.card} ${activeStyle}`}>
            <div className={`${styles.title} ${titleStyle}`}>
                PLAYER {playerNumber}
            </div>

            <div className={styles.score}>
                {score}
            </div>

            {isActive && !gameOver && (
                <span className={`${styles.turnBadge} ${badgeStyle}`}>
                    ACTIVE TURN
                </span>
            )}
        </div>
    );
}
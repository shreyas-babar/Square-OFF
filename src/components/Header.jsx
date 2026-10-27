import React from 'react';
import styles from './Header.module.css';

export default function Header({ gridSize, resetGame }) {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <h1 className={styles.title}>SQUAREOFF</h1>
                <span className={styles.badge}>CLASSIC MODE</span>
            </div>

            <div className={styles.gridSelector}>
                {[3, 5].map((size) => (
                    <button
                        key={size}
                        onClick={() => resetGame(size)}
                        className={`${styles.sizeBtn} ${gridSize === size ? styles.active : ''}`}
                    >
                        {size}×{size}
                    </button>
                ))}
            </div>

            <button onClick={() => resetGame()} className={styles.resetBtn}>
                Reset
            </button>
        </header>
    );
}
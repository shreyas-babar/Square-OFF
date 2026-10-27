import React from 'react';
import { useGameState } from './hooks/useGameState';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import GameBoard from './components/GameBoard';
import GameOverModal from './components/GameOverModal';
import styles from './App.module.css';

export default function App() {
    const {
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
    } = useGameState(5);

    return (
        <div className={styles.appContainer}>
            <Header gridSize={gridSize} resetGame={resetGame} />

            <main className={styles.gameArena}>
                <PlayerCard
                    playerNumber={1}
                    score={scores.p1}
                    isActive={currentPlayer === 1}
                    gameOver={gameOver}
                />

                <GameBoard
                    gridSize={gridSize}
                    hLines={hLines}
                    vLines={vLines}
                    boxes={boxes}
                    handleLineClick={handleLineClick}
                    gameOver={gameOver}
                />

                <PlayerCard
                    playerNumber={2}
                    score={scores.p2}
                    isActive={currentPlayer === 2}
                    gameOver={gameOver}
                />
            </main>

            <GameOverModal
                gameOver={gameOver}
                winner={winner}
                scores={scores}
                resetGame={resetGame}
            />
        </div>
    );
}
```markdown
# SquareOff – Classic Dots & Boxes Game

A modern, responsive, full-screen web implementation of the classic **Dots & Boxes** strategy game. Built with **React**, **Vite**, and **CSS Modules**, this project focuses on clean modular architecture, stateful game logic, and fluid viewport styling without page scrolling.

---

## 📌 Project Overview

**SquareOff** is a two-player turn-based board game developed as a academic software project to demonstrate:
- State management and turn-based game logic using custom React hooks (`useGameState`).
- Scoped component-level styling with **CSS Modules** (`.module.css`) to eliminate global class name collisions.
- Fluid, responsive UI layout using standard CSS Grid, Flexbox, and dynamic `clamp()` sizing units.

---

## ✨ Features

- 🎮 **Classic 2-Player Gameplay:** Player 1 (Blue) vs. Player 2 (Red) with real-time score tracking and turn indicators.
- 📐 **Dynamic Grid Sizes:** Switch seamlessly between **3×3** and **5×5** box matrix layouts.
- 📱 **Full-Screen Responsive UI:** Locked viewport structure (`100vh`) engineered to fit desktop and laptop displays without page scrollbars.
- 🎨 **Modern Dark Theme:** Sleek dark interface with active turn glowing cards and interactive line hover previews.
- 🏆 **Game Over Modal:** Automated victory/draw detection with end-of-game summary modal and single-click reset.

---

## 🛠️ Tech Stack & Concepts

- **Frontend Library:** React (Vite)
- **Styling:** CSS Modules, Modern CSS Grid & Flexbox
- **State Management:** React Hooks (`useState`, `useCallback`, Custom Hook Architecture)
- **Language:** JavaScript (ES6+ Syntax)
- **Deployment:** Vercel

---

## 📂 Project Architecture

```text
square-off/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── PlayerCard.jsx
│   │   ├── PlayerCard.module.css
│   │   ├── GameBoard.jsx
│   │   ├── GameBoard.module.css
│   │   ├── GameOverModal.jsx
│   │   └── GameOverModal.module.css
│   ├── hooks/
│   │   └── useGameState.js      # Core game logic and state validation
│   ├── App.jsx                  # Main application layout wrapper
│   ├── App.module.css           # Global layout & arena scoping
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global CSS reset & HTML/body locks
├── package.json
├── vite.config.js
└── README.md

```

---

## 🎮 How to Play

### 📜 Objective

Complete as many 1×1 grid boxes as possible. The player who claims the majority of boxes when all lines are drawn wins the match.

### 🎲 Rules & Controls

1. **Taking Turns:** Players take turns clicking an undrawn edge (line segment) between two adjacent dots.
2. **Completing a Box:**
* When a player places the **4th boundary line** around a 1×1 square box, they claim ownership of that box.
* The claimed box fills with the player's signature color (Blue for Player 1, Red for Player 2) and increases their score by **1 point**.


3. **Bonus Turn Rule:**
* Completing a box grants the active player an **extra consecutive turn**.
* If a single line placement completes **two adjacent boxes** simultaneously, both boxes are claimed, 2 points are added, and the player retains their turn.


4. **Endgame:**
* The match ends automatically once every horizontal and vertical line on the matrix has been selected.
* The player with the highest total score is declared the winner via the modal interface.



---

## 🚀 Getting Started

Follow these steps to run the project locally on your system:

### Prerequisites

* [Node.js](https://nodejs.org/) (v16.0 or higher)
* `npm` or `yarn`

### Local Setup

1. **Clone the Repository:**
```bash
git clone [https://github.com/shreyas-babar/Square-OFF.git](https://github.com/shreyas-babar/Square-OFF.git)
cd Square-OFF

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Start the Development Server:**
```bash
npm run dev

```


4. **Open in Browser:**
Navigate to `http://localhost:5173` in your web browser.

---

## 🌐 Live Demo

* **Vercel Deployment:** [https://square-off.vercel.app](https://www.google.com/search?q=https://square-off.vercel.app) *(Replace with your live URL)*

---

## 💡 Future Enhancements

* 🤖 **Single Player Mode:** Add an AI algorithm (Minimax / Alpha-Beta Pruning) for solo play.
* ⏱️ **Turn Timer:** Introduce an optional countdown clock per turn.
* 🔊 **Audio Effects:** Add sound effects for line placement, box captures, and victory announcements.

```

```

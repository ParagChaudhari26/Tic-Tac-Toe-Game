# ⭕ Tic-Tac-Toe Game

A classic interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Challenge your friends in this timeless strategy game featuring a clean interface, smooth animations, and intelligent game logic.

## ✨ Features

- **Two Player Mode**: Play against friends locally
- **Smart AI Opponent**: Challenge the computer with intelligent moves
- **Game State Tracking**: Real-time win detection and draw handling
- **Score Counter**: Track wins, losses, and draws
- **Responsive Design**: Perfect gameplay on desktop, tablet, and mobile
- **Smooth Animations**: CSS3 animations for moves and victories
- **Reset Functionality**: Start new games instantly
- **Visual Feedback**: Highlight winning combinations
- **Player Customization**: Choose your symbols (X or O)
- **Game History**: Track multiple rounds

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and game board layout
- **CSS3**: Modern styling, animations, and responsive grid
- **JavaScript ES6**: Game logic, AI algorithms, and DOM manipulation
- **CSS Grid**: Perfect 3x3 game board layout
- **Local Storage**: Save game statistics and preferences
- **CSS Animations**: Smooth transitions and victory celebrations

## 🎮 How to Play

### Basic Rules
1. **Objective**: Get three of your symbols (X or O) in a row
2. **Gameplay**: Players alternate turns placing their symbol
3. **Winning**: First to get 3 in a row (horizontal, vertical, or diagonal) wins
4. **Draw**: If all 9 squares are filled with no winner, it's a tie

### Game Controls
- **Click/Tap**: Place your symbol in an empty square
- **Reset Button**: Start a new game
- **Score Reset**: Clear win/loss statistics
- **Player Toggle**: Switch between X and O starting

## 📋 Installation & Usage

### Option 1: Direct Download
1. Clone the repository:
   ```bash
   git clone https://github.com/ParagChaudhari26/Tic-Tac-Toe-Game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Tic-Tac-Toe-Game
   ```

3. Open `index.html` in your web browser

### Option 2: Live Server
1. Install a live server extension in your code editor
2. Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
Tic-Tac-Toe-Game/
│
├── index.html              # Main HTML file
├── styles/
│   ├── style.css          # Main styles
│   ├── animations.css     # Game animations
│   └── responsive.css     # Mobile responsiveness
├── scripts/
│   ├── game.js           # Core game logic
│   ├── ai-player.js      # AI opponent algorithms
│   ├── ui-controller.js  # User interface management
│   └── utils.js          # Utility functions
├── assets/
│   ├── images/           # Game icons and backgrounds
│   ├── sounds/           # Sound effects (optional)
│   └── fonts/            # Custom fonts
└── README.md             # Project documentation
```

## 🧠 Game Logic Implementation

### Board State Management
```javascript
class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scoreX = 0;
        this.scoreO = 0;
        this.draws = 0;
    }
    
    makeMove(position) {
        if (this.board[position] === '' && this.gameActive) {
            this.board[position] = this.currentPlayer;
            if (this.checkWinner()) {
                this.endGame(this.currentPlayer);
            } else if (this.checkDraw()) {
                this.endGame('draw');
            } else {
                this.switchPlayer();
            }
        }
    }
}
```

### Win Detection Algorithm
```javascript
checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return this.board[a] && 
               this.board[a] === this.board[b] && 
               this.board[a] === this.board[c];
    });
}
```
## 🏁 Game Rules Reference

### Standard Rules
- **Board**: 3x3 grid with 9 squares
- **Players**: Two players (X and O)
- **Turn Order**: X always goes first
- **Objective**: Get 3 symbols in a row
- **Win Conditions**: Horizontal, vertical, or diagonal line
- **Draw**: All squares filled with no winner

## 📱 Browser Compatibility

### Fully Supported
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Opera 47+

### Mobile Support
- iOS Safari 12+
- Chrome Mobile 60+
- Samsung Internet 8+
- Firefox Mobile 55+

## 👨‍💻 Author

**Parag Chaudhari**
- GitHub: [@ParagChaudhari26](https://github.com/ParagChaudhari26)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/parag-chaudhari-024991289/) 
- Email: [paragchaudhari2602@gmail.com](paragchaudhari2602@gmail.com) 
  
---

### 🎲 Fun Tic-Tac-Toe Facts

- Tic-Tac-Toe is over 2,000 years old, originating from ancient Rome
- The game is known as "Noughts and Crosses" in the UK
- There are 255,168 possible game states in Tic-Tac-Toe
- With perfect play, every game should end in a draw
- The first computer program for Tic-Tac-Toe was written in 1952

### ⭐ Show your support

Give a ⭐ if you enjoyed playing this classic game!

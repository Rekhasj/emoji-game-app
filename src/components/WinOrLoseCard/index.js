import './index.css'

const winImageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImageUrl =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {onClickPlayAgain, totalScore, won} = props
  const imageUrl = won ? winImageUrl : loseImageUrl
  const text = won ? 'You Won' : 'You Lose'
  const bestScore = won ? 'Best Score' : 'Score'
  // const altText = won ? 'won' : 'lose'

  return (
    <div className="win-lose-card-container">
      <div className="score-card">
        <h1 className="heading">{text}</h1>
        <p className="best-score">{bestScore}</p>
        <p className="score">{totalScore}/12</p>
        <button type="submit" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img className="wl-image" alt="win or lose" src={imageUrl} />
    </div>
  )
}

export default WinOrLoseCard

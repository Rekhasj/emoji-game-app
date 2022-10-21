// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {score, topScore, isEmojiOn} = this.props
    console.log(topScore)
    if (isEmojiOn) {
      return null
    }
    return (
      <div className="nav-score-card">
        <p className="nav-score">Score: {score}</p>
        <p className="nav-score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-heading-card">
          <img
            className="nav-logo-image"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />

          <h1 className="game-name">Emoji Game</h1>
        </div>
        {this.renderScore()}
      </div>
    )
  }
}
export default NavBar

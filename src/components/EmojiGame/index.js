/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isEmojiOn: false, topScore: 0, clickedEmoji: []}

  endGame = newScore => {
    const {topScore} = this.state

    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.isGameEnd(true)
  }

  isGameEnd = value => {
    this.setState({isEmojiOn: value})
  }

  restartGame = () => {
    this.setState({clickedEmoji: []})
    this.isGameEnd(false)
  }

  clickedEmojiIs = id => {
    const {clickedEmoji} = this.state
    const {emojisList} = this.props

    const emojiPresent = clickedEmoji.includes(id)
    if (emojiPresent) {
      this.endGame(clickedEmoji.length)
    } else {
      if (emojisList.length - 1 === clickedEmoji.length) {
        this.endGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    // const {topScore} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiCard = () => {
    const shuffledEmojiList = this.getShuffledEmojiList()

    return (
      <ul className="emoji-game-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            emojisListDetails={eachEmoji}
            key={eachEmoji.id}
            clickedEmojiIs={this.clickedEmojiIs}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {clickedEmoji} = this.state
    const {emojisList} = this.props

    const won = clickedEmoji.length === emojisList.length

    return (
      <WinOrLoseCard
        won={won}
        onClickPlayAgain={this.restartGame}
        totalScore={clickedEmoji.length}
      />
    )
  }

  render() {
    const {isEmojiOn, clickedEmoji, topScore} = this.state
    const score = clickedEmoji.length

    return (
      <div className="home-container">
        <nav className="navbar">
          <NavBar score={score} topScore={topScore} isEmojiOn={isEmojiOn} />
        </nav>
        <div className="card-container">
          {isEmojiOn ? this.renderWinOrLoseCard() : this.renderEmojiCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame

// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisListDetails, clickedEmojiIs} = props
  const {id, emojiName, emojiUrl} = emojisListDetails

  const onClickEmoji = () => {
    clickedEmojiIs(id)
  }
  return (
    <li className="emoji-card-container">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard

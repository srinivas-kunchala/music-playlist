import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const PlayList = props => {
  const {playListItems, onClickDeleteBtn} = props

  const {id, imageUrl, name, genre, duration} = playListItems

  const onClickDeleteIcon = () => {
    onClickDeleteBtn(id)
  }

  return (
    <li>
      <div className="songs-container">
        <div className="songs-container">
          <img src={imageUrl} alt="track" />

          <div className="genre-container">
            <p className="name">{name}</p>

            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="details-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            data-testid="delete"
            onClick={onClickDeleteIcon}
          >
            <AiOutlineDelete className="delete-icon" label />
          </button>
        </div>
      </div>

      <hr className="mobile-view" />
    </li>
  )
}

export default PlayList

import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword, deletePassword} = props
  const {id, website, username, password} = passwordDetails
  const backgroundClassList = [
    'background-a',
    'background-b',
    'background-c',
    'background-d',
    'background-e',
    'background-f',
    'background-g',
  ]

  backgroundClassList.sort(() => Math.random() - 0.5)

  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li>
      <div className={`profile-container ${backgroundClassList[0]}`}>
        <h1 className="profile-initial">{website[0].toUpperCase()}</h1>
      </div>
      <div className="details-container">
        <p className="website-text">{website}</p>
        <p className="username-text">{username}</p>
        {showPassword && <p className="password-text">{password}</p>}
        {!showPassword && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-icon-container"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem

import './index.css'

const ShowPasswords = props => {
  const {eachUserDetails, onDeleteUserInformation, ShowPassword} = props
  const {website, username, password, id} = eachUserDetails

  const initial = website.slice(0, 1).toUpperCase()

  console.log(ShowPassword)

  const onDeleteUser = () => {
    onDeleteUserInformation(id)
  }

  return (
    <li className="li">
      <div className="user-details-container">
        <div className="div-01">
          <h1 className="initial">{initial}</h1>
        </div>
        <div className="details-container">
          <p className="name">{website}</p>
          <p className="name">{username}</p>
          <p className="name">
            {ShowPassword ? (
              <p>{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars"
              />
            )}
          </p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteUser}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default ShowPasswords

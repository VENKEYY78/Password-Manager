import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ShowPasswords from '../ShowPasswords'

import './index.css'

class EnterPasswords extends Component {
  state = {
    userList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    checkBox: false,
    count: 0,
  }

  onDeleteUserInformation = id => {
    const {userList} = this.state
    const filterUserList = userList.filter(eachUser => eachUser.id !== id)
    this.setState({userList: filterUserList})
  }

  onAddUsernameAndPsw = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      website: '',
      username: '',
      password: '',
    }))
  }

  onClickCheckBox = () => {
    //   const {checkBox} = this.state
    this.setState(prevState => ({
      checkBox: !prevState.checkBox,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      userList,
      searchInput,
      checkBox,
      count,
    } = this.state

    const filterdUsers = userList.filter(eachUser =>
      eachUser.username.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count01 = filterdUsers.length

    return (
      <>
        <div className="enter-passwords-container">
          <form
            className="left-side-from-container"
            onSubmit={this.onAddUsernameAndPsw}
          >
            <h1 className="add-psw-heading">Add New Password</h1>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                value={website}
                placeholder="Enter Website"
                className="input-website"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <input
                type="text"
                value={username}
                placeholder="Enter Username"
                className="input-website"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                className="input-website"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-btn-container">
              <button className="Add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div
            className="right-side-passwords-container"
            style={{
              backgroundImage: `url(${
                window.innerWidth >= 768
                  ? 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
              })`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src={
                window.innerWidth >= 768
                  ? 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
              }
              alt="password manager"
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="show-passwords-container">
          <div className="count-and-search-container">
            <div className="count-container">
              <h1 className="count-heading">
                Your Passwords <span className="count">{count + count01}</span>
              </h1>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-box"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="cheack-box-container">
            <label className="show-psw">
              <input
                type="checkbox"
                className="checkbox"
                onClick={this.onClickCheckBox}
              />
              Show Passwords
            </label>
          </div>
          <div className="div">
            {filterdUsers.length === 0 ? (
              <div className="div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-psw-img"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {filterdUsers.map(eachUser => (
                  <ShowPasswords
                    eachUserDetails={eachUser}
                    key={eachUser.id}
                    onDeleteUserInformation={this.onDeleteUserInformation}
                    ShowPassword={checkBox}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EnterPasswords

/* 
<>
           
          </>
*/

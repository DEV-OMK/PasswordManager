import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordsList: [],
    showPassword: false,
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({
      passwordsList: updatedList,
    })
  }

  onClickAdd = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state

    if (website !== '' && username !== '' && password !== '') {
      const newListItem = {
        id: uuidv4(),
        website,
        username,
        password,
      }

      this.setState({
        passwordsList: [...passwordsList, newListItem],
        website: '',
        username: '',
        password: '',
        showPassword: false,
        searchInput: '',
      })
    }
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      searchInput,
      showPassword,
    } = this.state

    const filteredList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = filteredList.length

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="container-card">
            <div className="input-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="input-image"
              />
            </div>
            <form className="form-card" onSubmit={this.onClickAdd}>
              <h1 className="form-title">Add New Password</h1>
              <div className="input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  value={website}
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="password-container-card">
            <div className="header-container">
              <div className="text-container">
                <h1 className="header-text">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-bar-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.changeSearchInput}
                />
              </div>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                value={showPassword}
                onChange={this.toggleShowPassword}
              />
              <label htmlFor="checkbox">Show passwords</label>
            </div>
            {count === 0 && (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="no-passwords-image"
                  alt="no passwords"
                />
                <p className="no-password-text">No Passwords</p>
              </div>
            )}
            {count !== 0 && (
              <ul className="passwords-list-container">
                {filteredList.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    showPassword={showPassword}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

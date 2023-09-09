import {Component} from 'react'
import UserProfile from './components/UserProfile/index'
import './App.css'

const initialUserProfileDetails = [
  {
    uniqueNo: 1,
    name: 'Rahul',
    role: 'Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 2,
    name: 'Rani',
    role: 'Junior Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  },
  {
    uniqueNo: 3,
    name: 'Vani',
    role: 'Python Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: initialUserProfileDetails,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUserData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state

    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">User List</h1>
        <input
          type="search"
          className="input-search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              onDeleteUser={this.onDeleteUser}
              userDetails={eachUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App

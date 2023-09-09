import './index.css'

const UserProfile = props => {
  const {userDetails, onDeleteUser} = props
  const {name, role, imageUrl, uniqueNo} = userDetails
  const onDelete = () => {
    onDeleteUser(uniqueNo)
  }

  return (
    <li className="list-elements">
      <img src={imageUrl} className="image" />
      <div>
        <h1 className="list-heading">{name}</h1>
        <p className="list-paragraph">{role}</p>
      </div>
      <button className="button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="click-button"
        />
      </button>
    </li>
  )
}
export default UserProfile

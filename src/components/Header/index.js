import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('Header')
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          className="image-logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Header</h1>
      </div>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Header

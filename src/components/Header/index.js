import {useState} from 'react'
import {Link} from 'react-router-dom'
import {IoLogoGooglePlaystore, IoCloseOutline} from 'react-icons/io5'

import './index.css'

const Header = () => {
  const [Active, setActive] = useState(false)
  const ActiveState = () => {
    setActive(prevState => !prevState)
  }
  const renderElements = () => (
    <div className="navSubElementsDropDown">
      <Link to="/" className="HeaderLinkStyle">
        <p className="list-styling borderToPara">Home</p>
      </Link>
      <p className="list-styling borderToPara">Health conditions</p>
      <p className="list-styling borderToPara">Lab tests</p>
      <p className="list-styling borderToPara">Medicines</p>
      <button className="mobileViewNavButton" type="button">
        For patients
      </button>
      <button className="mobileViewNavButton" type="button">
        For hospitals
      </button>
    </div>
  )
  return (
    <>
      <div className="HeaderContainer">
        <img
          src="/img/Component 10.png"
          alt="Component10"
          className="Component10"
        />
        <ul className="HeaderUlContainer">
          <Link to="/" className="HeaderLinkStyle">
            <li className="list-styling">Home</li>
          </Link>
          <li className="list-styling">Health conditions</li>
          <li className="list-styling">Lab tests</li>
          <li className="list-styling">Medicines</li>
        </ul>
        <div className="ButtonHeaderRowContainer">
          <div className="button1900">
            <button className="button-style-header" type="button">
              For patients
            </button>
            <button
              className="button-style-header margin-top-Header-button"
              type="button"
            >
              For hospitals
            </button>
          </div>
          <button className="PlayStore-header" type="button">
            <IoLogoGooglePlaystore color="#ffffff" /> Play store
          </button>
        </div>
      </div>
      <nav className="NavMain">
        <div className="NavContainer">
          <img src="/img/Component 10.png" alt="NavImg" className="NavImage" />
          <button type="button" className="NavButton" onClick={ActiveState}>
            {Active ? <IoCloseOutline /> : '≡'}
          </button>
        </div>
        {Active && renderElements()}
      </nav>
    </>
  )
}
export default Header

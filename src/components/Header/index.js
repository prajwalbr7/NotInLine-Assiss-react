import {useState} from 'react'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

import './index.css'

const Header = () => {
  const [Active, setActive] = useState(false)
  const ActiveState = () => {
    setActive(prevState => !prevState)
  }
  const renderElements = () => (
    <div className="">
      <p className="list-styling borderToPara">Home</p>
      <p className="list-styling borderToPara">Health conditions</p>
      <p className="list-styling lab-test borderToPara">Lab tests</p>
      <p className="list-styling borderToPara">Medicines</p>
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
          <li className="list-styling">Home</li>
          <li className="list-styling">Health conditions</li>
          <li className="list-styling lab-test">Lab tests</li>
          <li className="list-styling">Medicines</li>
        </ul>
        <button className="button-style-header" type="button">
          For patients
        </button>
        <button
          className="button-style-header margin-top-Header-button"
          type="button"
        >
          For hospitals
        </button>
        <button className="PlayStore-header" type="button">
          <IoLogoGooglePlaystore color="#ffffff" /> Play store
        </button>
      </div>

      <>
        {' '}
        <nav className="NavMain">
          <div className="NavContainer">
            <img
              src="/img/Component 10.png"
              alt="NavImg"
              className="NavImage"
            />
            <button type="button" className="NavButton" onClick={ActiveState}>
              ≡
            </button>
          </div>
          {Active && renderElements()}
        </nav>
      </>
    </>
  )
}
export default Header

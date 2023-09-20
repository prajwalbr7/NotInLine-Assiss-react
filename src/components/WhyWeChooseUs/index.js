import {useState} from 'react'
import {MdArrowDropDown} from 'react-icons/md'

import './index.css'

const WhyWeChooseUs = () => {
  const [B1, setB1] = useState(false)
  const [B2, setB2] = useState(false)
  const [B3, setB3] = useState(false)
  const [B4, setB4] = useState(false)
  const OnClickB1 = () => {
    setB1(prevState => !prevState)
  }
  const OnClickB2 = () => {
    setB2(prevState => !prevState)
  }
  const OnClickB3 = () => {
    setB3(prevState => !prevState)
  }
  const OnClickB4 = () => {
    setB4(prevState => !prevState)
  }
  return (
    <div className="WhyCCont">
      <div className="WhyMainContainer">
        <h1 className="WhyHeading">
          Why <span className="WhyHeadingSpan">choose</span> us?
        </h1>
        <img src="/img/Vector 2.png" alt="Vector2" className="Vector21" />
        <p className="WhyWePara">
          We want you and your heart to be healthy so you can live a happy life!
        </p>
        <div className="ContainerRowToChooseUs">
          <div className="ContainerToWhyChooseUs">
            <div className="WhyChooseContainerM MarginToWhyChoose">
              <img
                src="/img/Ellipse 16.png"
                alt="Ellipse14"
                className="Ellipse14"
              />
              <h1 className="Ellipse14Heading">NABL Accredited Labs</h1>
              <p className="Ellipse14Para">
                Get accurate and safe results from our NABL-certified lab
                partners.{' '}
              </p>
            </div>

            <div className="WhyChooseContainerM">
              <img
                src="/img/Ellipse 13.png"
                alt="Ellipse14"
                className="Ellipse14"
              />
              <h1 className="Ellipse14Heading">Timely collections</h1>
              <p className="Ellipse14Para">
                We collect samples timely to prevent treatment delays and ensure
                your continued well-being.
              </p>
            </div>
          </div>

          <div className="ContainerToWhyChooseUs1 MarginLeftToWhyChoose">
            <div className="WhyChooseContainerM MarginToWhyChoose">
              <img
                src="/img/Ellipse 14.png"
                alt="Ellipse14"
                className="Ellipse14"
              />
              <h1 className="Ellipse14Heading">Value experience</h1>
              <p className="Ellipse14Para">
                Experience seamless care without the hassle of waiting in long
                lines for an appointment. Book with us for a
                healthier lifestyle.
              </p>
            </div>

            <div className="WhyChooseContainerM">
              <img
                src="/img/Ellipse 15.png"
                alt="Ellipse14"
                className="Ellipse14"
              />
              <h1 className="Ellipse14Heading">Transparency</h1>
              <p className="Ellipse14Para">
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth
                medical journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="WhyWeChooseMobileView">
        <h1 className="WhyHeading">
          Why <span className="WhyHeadingSpan">choose</span> us?
        </h1>
        <img
          src="/img/Vector 2.png"
          alt="Vector2"
          className="Vector21mobileView"
        />
        <p className="WhyWeParaMobileView">
          We want you and your heart to be healthy so you can live a happy life!
        </p>
        <div className="WhyChooseContainerMobileView">
          <div className="WhyMobileViewRow">
            <img
              src="/img/Ellipse 16 (1).png"
              alt="Ellipse14"
              className="Ellipse14MobileView"
            />
            <h1 className="Ellipse14HeadingMobileView">NABL Accredited Labs</h1>
            <button
              className="IconDropDownButton"
              type="button"
              onClick={OnClickB1}
            >
              <MdArrowDropDown />
            </button>
          </div>
          {B1 && (
            <p className="Ellipse14ParaMobileView">
              Get accurate and safe results from our NABL-certified lab
              partners.{' '}
            </p>
          )}
        </div>

        <div className="WhyChooseContainerMobileView">
          <div className="WhyMobileViewRow">
            <img
              src="/img/Ellipse 13 (1).png"
              alt="Ellipse14"
              className="Ellipse14MobileView"
            />
            <h1 className="Ellipse14HeadingMobileView">Timely collections</h1>
            <button
              className="IconDropDownButton"
              type="button"
              onClick={OnClickB2}
            >
              <MdArrowDropDown />
            </button>
          </div>
          {B2 && (
            <p className="Ellipse14ParaMobileView">
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.
            </p>
          )}
        </div>

        <div className="WhyChooseContainerMobileView">
          <div className="WhyMobileViewRow">
            <img
              src="/img/Ellipse 14 (1).png"
              alt="Ellipse14"
              className="Ellipse14MobileView"
            />
            <h1 className="Ellipse14HeadingMobileView">Value experience</h1>
            <button
              className="IconDropDownButton"
              type="button"
              onClick={OnClickB3}
            >
              <MdArrowDropDown />
            </button>
          </div>
          {B3 && (
            <p className="Ellipse14ParaMobileView">
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </p>
          )}
        </div>

        <div className="WhyChooseContainerMobileView">
          <div className="WhyMobileViewRow">
            <img
              src="/img/Ellipse 15 (1).png"
              alt="Ellipse14"
              className="Ellipse14MobileView"
            />
            <h1 className="Ellipse14HeadingMobileView">Transparency</h1>
            <button
              className="IconDropDownButton"
              type="button"
              onClick={OnClickB4}
            >
              <MdArrowDropDown />
            </button>
          </div>
          {B4 && (
            <p className="Ellipse14ParaMobileView">
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth
              medical journey.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default WhyWeChooseUs

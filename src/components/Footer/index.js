import './index.css'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => (
  <footer className="footer">
    <div className="main-container">
      <div className="container-1">
        <img
          className="image"
          src="https://res.cloudinary.com/dzbfzovvx/image/upload/v1695141954/NIL_logo_Transparent_1_1_1_ymep9y.png"
          alt="Logo"
          style={{color: 'blue'}}
        />
        <p className="BookDoctorPara">
          Book doctor appointments online and get <br /> your ailments treated
          in no time with our <br />
          expert medical support systems. Get rid of all <br />
          your medical problem with our expert panel of
          <br /> doctors who guide you towards a healthier life.
        </p>
        <p className="BookDoctorParaMobileView">
          Book doctor appointments online and get your ailments treated in no
          time with our expert medical support systems. Get rid of all your
          medical problem with our expert panel of doctors who guide you towards
          a healthier life.
        </p>
        <div className="calNumberContainer">
          <p className="Calpara">+91</p>
          <input type="text" className="calInput" />
          <button type="button" className="CallButton">
            <img src="/img/call.png" alt="" className="" />
          </button>
        </div>
      </div>
      <div className="container-2">
        <div>
          <h3>Services</h3>

          <p>Appointments</p>
          <p>Doctor Support</p>
          <p>lab test</p>
          <p>A-Z Medicine</p>
        </div>
        <div className="margin-left-to-footers">
          <h3>Legal</h3>

          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Genral Information</p>
          <p>Consultant</p>
          <p>How it Works</p>
        </div>
        <div className="margin-left-to-footers">
          <h3>Talk to us</h3>

          <p>support@ntfonline.com</p>
          <p>appointments@ntfonline.com</p>
          <p>+9124614562114</p>
          <p>+9134648648565`</p>
        </div>
      </div>
    </div>
    <hr />
    <div style={{paddingLeft: '10px'}}>
      <BiCopyright /> 2021-2023 All Rights Reserved
    </div>
  </footer>
)

export default Footer

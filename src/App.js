import Header from './components/Header'
import TopPackages from './components/TopPackages'
import WhyWeChooseUs from './components/WhyWeChooseUs'
import Footer from './components/Footer'
import './App.css'

const App = () => (
  <div className="MainContainer">
    <Header />
    <div className="SubContainer">
      <form className="FillDetailsContainer">
        <h1 className="FillDetailsHeading">
          Fill in the details to get a call!
        </h1>
        <div className="ContainerToImgInput">
          <img src="/img/person.jpg" alt="person" className="personLogo" />
          <input type="text" className="InputStyle" placeholder="Full name" />
        </div>
        <div className="ContainerToImgInput">
          <img src="/img/call.jpg" alt="person" className="personLogo" />
          <input
            type="text"
            className="InputStyle"
            placeholder="Phone number"
          />
        </div>
        <div className="ContainerToImgInput">
          <img src="/img/distance.jpg" alt="person" className="personLogo" />
          <input type="text" className="InputStyle" placeholder="Location" />
        </div>
        <div className="checkBoxContainer">
          <input type="checkbox" className="checkBoxStyle" />
          <p className="CheckboxPara">
            By continuing, you agree to our{' '}
            <span className="spamElement">T&C</span> and privacy policy
          </p>
        </div>
        <div className="ButtonFillDetailsContainer">
          <button className="ProceedButton" type="submit">
            Proceed
          </button>
        </div>
      </form>

      <div className="">
        <img
          src="/img/Hero text & image.png"
          alt="HeroTextImg"
          className="HeroTextImg"
        />
      </div>
    </div>
    <div className="OfferContainer">
      <img src="/img/Offer line.png" alt="OfferLine" className="" />
    </div>

    <div className="LargePage">
      <div className="SubContainerMobile">
        <h1 className="HeadingSubMobile">
          Best in class <span className="HeadingSubMobileSpan">lab tests!</span>
        </h1>
        <img src="/img/Vector 2.png" alt="Vector2" className="VectorMobile" />
        <img
          src="/img/Top offer.png"
          alt="TopOffer"
          className="topImageOffer"
        />
      </div>
      <form className="formCont">
        <h1 className="FillDetailsHeading">
          Fill in the details to get a call!
        </h1>
        <div className="ContainerToImgInput">
          <img src="/img/person.jpg" alt="person" className="personLogo" />
          <input type="text" className="InputStyle" placeholder="Full name" />
        </div>
        <div className="ContainerToImgInput">
          <img src="/img/call.jpg" alt="person" className="personLogo" />
          <input
            type="text"
            className="InputStyle"
            placeholder="Phone number"
          />
        </div>
        <div className="ContainerToImgInput">
          <img src="/img/distance.jpg" alt="person" className="personLogo" />
          <input type="text" className="InputStyle" placeholder="Location" />
        </div>
        <div className="checkBoxContainer">
          <input type="checkbox" className="checkBoxStyle" />
          <p className="CheckboxPara">
            By continuing, you agree to our{' '}
            <span className="spamElement">T&C</span> and privacy policy
          </p>
        </div>
        <div className="ButtonFillDetailsContainer">
          <button className="ProceedButton" type="submit">
            Proceed
          </button>
        </div>
      </form>
    </div>

    <div className="ContainerNABLFreeMain">
      <div className="ContainerNABl NABL">
        <img
          src="/img/Rectangle 80.png"
          alt="Rectangle80"
          className="NablImg"
        />
        <p className="NABLFreePara">NABL Accredited Labs</p>
      </div>
      <div className="ContainerNABl">
        <img
          src="/img/Rectangle 81.png"
          alt="Rectangle81"
          className="NablImg"
        />
        <p className="NABLFreePara">Free sample collection</p>
      </div>
    </div>

    <div className="KeepExpandingContainer">
      <h1 className="HeadingKeepExpanding">
        We keep <span className="HeadingKeepExpandingspan">expanding</span>!
      </h1>
      <img src="/img/Vector 2.png" alt="Vector2" className="Vector2" />
      <ul className="ulElementsExpandingContainer">
        <li className="list-styling-expanding">
          <p className="listParaExpanding">
            5+
            <br />
            <span className="listParaExpandingSpan">Labs</span>
          </p>
        </li>
        <li className="list-styling-expanding list-margin-left">
          <p className="listParaExpanding">
            100+
            <br />
            <span className="listParaExpandingSpan">Collection centers</span>
          </p>
        </li>
        <li className="list-styling-expanding">
          <p className="listParaExpanding">
            1000+
            <br />
            <span className="listParaExpandingSpan">Monthly tests</span>
          </p>
        </li>
        <li className="list-styling-expanding list-margin-left">
          <p className="listParaExpanding">
            2200+
            <br />
            <span className="listParaExpandingSpan">Test menu</span>
          </p>
        </li>
        <li className="list-styling-expanding">
          <p className="listParaExpanding">
            5+
            <br />
            <span className="listParaExpandingSpan">Cities present in</span>
          </p>
        </li>
      </ul>
    </div>
    <TopPackages />
    <WhyWeChooseUs />
    <Footer />
  </div>
)

export default App

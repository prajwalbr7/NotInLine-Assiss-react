import {Component} from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class TopPackages extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <>
        <div className="TopPackagesContainer">
          <h1 className="HeadingKeepExpanding">
            Top <span className="HeadingKeepExpandingspan">packages</span>
          </h1>
          <img src="/img/Vector 2.png" alt="Vector2" className="Vector20" />
          <p className="PackagePara">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>
          <Slider {...settings} className="SliderContainer">
            <div className="SContainer">
              <div className="BasicMainContainer">
                {' '}
                <h1 className="BasicRatingHeading">
                  Basic Full Body <br />
                  Checkup
                </h1>
                <div className="RatingContainer">
                  <p className="p1">4.3</p>
                  <BsFillStarFill className="rating-icon" />
                  <p className="p2">( 75 Reviews )</p>
                </div>
                <p className="NumberPara">Number of tests - 53</p>
                <p className="mrp-para">
                  MRP: <span className="mrpSpan1">₹10,000</span>
                  <span className="mrpOriginal">₹8,000</span>
                </p>
                <button className="mrp-button " type="button">
                  Book now
                </button>
              </div>
            </div>
            <div className="">
              <div className="BasicMainContainer">
                <h1 className="BasicRatingHeading">
                  Advance Full Body <br />
                  Checkup
                </h1>
                <div className="RatingContainer">
                  <p className="p1">4.7</p>
                  <BsFillStarFill className="rating-icon" />
                  <p className="p2">( 100 Reviews )</p>
                </div>
                <p className="NumberPara">Number of tests - 70</p>
                <p className="mrp-para">
                  MRP: <span className="mrpSpan1">₹12,000</span>
                  <span className="mrpOriginal">₹10,000</span>
                </p>
                <button className="mrp-button " type="button">
                  Book now
                </button>
              </div>
            </div>
            <div className="">
              <div className="BasicMainContainer">
                <h1 className="BasicRatingHeading">
                  Liver Function Test <br />
                  (LFT)
                </h1>
                <div className="RatingContainer">
                  <p className="p1">4.3</p>
                  <BsFillStarFill className="rating-icon" />
                  <p className="p2">( 43 Reviews )</p>
                </div>
                <p className="NumberPara">Number of tests - 89</p>
                <p className="mrp-para">
                  MRP: <span className="mrpSpan1">₹13,299</span>
                  <span className="mrpOriginal">₹11,299</span>
                </p>
                <button className="mrp-button " type="button">
                  Book now
                </button>
              </div>
            </div>

            <div className="">
              <div className="BasicMainContainer">
                <h1 className="BasicRatingHeading">
                  Liver Function Test <br />
                  (LFT)
                </h1>
                <div className="RatingContainer">
                  <p className="p1">4.3</p>
                  <BsFillStarFill className="rating-icon" />
                  <p className="p2">( 43 Reviews )</p>
                </div>
                <p className="NumberPara">Number of tests - 89</p>
                <p className="mrp-para">
                  MRP: <span className="mrpSpan1">₹13,299</span>
                  <span className="mrpOriginal">₹11,299</span>
                </p>
                <button className="mrp-button " type="button">
                  Book now
                </button>
              </div>
            </div>
          </Slider>
        </div>

        <div className="TopPackageMobileContainer">
          <h1 className="HeadingKeepExpanding">
            Top <span className="HeadingKeepExpandingspan">packages</span>
          </h1>
          <img src="/img/Vector 2.png" alt="Vector2" className="Vector20" />
          <p className="PackagePara">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>
          <div className="BasicMainContainerMobileView">
            {' '}
            <h1 className="BasicRatingHeading">Basic Full Body Checkup</h1>
            <div className="RatingContainer">
              <p className="p1">4.3</p>
              <BsFillStarFill className="rating-icon" />
              <p className="p2">( 75 Reviews )</p>
            </div>
            <p className="NumberPara">Number of tests - 53</p>
            <p className="mrp-para">
              MRP: <span className="mrpSpan1">₹10,000</span>
              <span className="mrpOriginal">₹8,000</span>
            </p>
            <div className="ButCenter">
              <button className="mrp-button" type="button">
                Book now
              </button>
            </div>
          </div>

          <div className="BasicMainContainerMobileView">
            <h1 className="BasicRatingHeading">
              Liver Function Test <br />
              (LFT)
            </h1>
            <div className="RatingContainer">
              <p className="p1">4.3</p>
              <BsFillStarFill className="rating-icon" />
              <p className="p2">( 43 Reviews )</p>
            </div>
            <p className="NumberPara">Number of tests - 89</p>
            <p className="mrp-para">
              MRP: <span className="mrpSpan1">₹13,299</span>
              <span className="mrpOriginal">₹11,299</span>
            </p>
            <div className="ButCenter">
              <button className="mrp-button" type="button">
                Book now
              </button>
            </div>
          </div>

          <div className="BasicMainContainerMobileView">
            <h1 className="BasicRatingHeading">
              Liver Function Test <br />
              (LFT)
            </h1>
            <div className="RatingContainer">
              <p className="p1">4.3</p>
              <BsFillStarFill className="rating-icon" />
              <p className="p2">( 43 Reviews )</p>
            </div>
            <p className="NumberPara">Number of tests - 89</p>
            <p className="mrp-para">
              MRP: <span className="mrpSpan1">₹13,299</span>
              <span className="mrpOriginal">₹11,299</span>
            </p>
            <div className="ButCenter">
              <button className="mrp-button" type="button">
                Book now
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default TopPackages

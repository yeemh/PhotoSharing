import React, { Component } from "react";
//////////////////////////////////////////////////////////////////////////////////////////
import { Events, animateScroll as scroll, scroller } from "react-scroll";
import MainNav from "./mainNav";

/////////////////////////////////////////////////////////////////////////////////////////

class Home extends Component {
  ////////////////////////////////////////////////////////////////
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  ////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>
        <link href={require("./css/bootstrap.min.css")} rel="stylesheet" />
        {/* FONT ICONS */}
        <link href={require("./css/fa-svg-with-js.css")} rel="stylesheet" />
        <link href={require("./css/pe-icon-7-stroke.css")} rel="stylesheet" />
        {/* PLUGINS STYLESHEET */}
        <link href={require("./css/magnific-popup.css")} rel="stylesheet" />
        <link href={require("./css/slick.css")} rel="stylesheet" />
        <link href={require("./css/slick-theme.css")} rel="stylesheet" />
        {/* On Scroll Animations */}
        <link href={require("./css/animate.css")} rel="stylesheet" />
        {/* TEMPLATE CSS */}
        <link href={require("./css/style.css")} rel="stylesheet" />
        {/* RESPONSIVE CSS */}
        <link href={require("./css/responsive.css")} rel="stylesheet" />
        {/* //////////////////////////////////////////////////////////////// */}
        <div id="page" className="page">
          <MainNav />
          <hr id="test" className="hr-line offset-10 offset-top-0 m-bottom-0" />
          <section className="division">
            <div className="container p-left-0 ">
              <div className="d-flex align-items-center">
                <div className="p-right-0 p-left-0">
                  <img
                    className="img-fluid offset-0_5"
                    src={require("./images/homeImage/ourtime.jpg")}
                    alt="Company_Image"
                    width={1300}
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="container p-left-0 ">
              <h3 className="h3-xs animated fadeInUp visible hero-img">
                <br />
                사진 공유
                <br />
                관리 서비스
                <br />
              </h3>
            </div>
          </section>{" "}
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bottom"></div>
      </div>
    );
  }
}

export default Home;

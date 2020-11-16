import React, { Component } from "react";
import MainNav from "./mainNav";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

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
        {/* BOOTSTRAP CSS */}
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
        {/* PAGE CONTENT
		============================================= */}
        <div id="page" className="page">
          <MainNav />
          {/* <FloatingButton /> */}
        </div>{" "}
        <section className="bg-fixed hero-section division">
          <div className="container offset-top-8">
            <div className="row d-flex align-items-center offset-0_5 offset-left-0_R">
              <div className="col-md-8 p-right-0 p-left-0 offset-top-7 animated fadeIn visible">
                <div>
                  <h2 className="h2-sm">
                    지나갔지만 추억하면 <br /> 애틋한 기억들 <br /> 소중한
                    사람과 함께 기록해 보아요.
                  </h2>
                  <p className="p-3xl p-font-MyriadProRegular p-top-20">
                    정말 소중한 기억들. 우리끼리만 공유하고 싶은 추억들.
                    <br />
                    PhotoShare에서 함께 기록해보아요.
                    <br />
                    웹페이지에서 공유 폴더를 만들고 우리끼리만 알 수 있는
                    비밀번호를
                    <br />
                    설정할 수 있습니다.
                    <br />
                    업로드 된 사진은 시간 순으로 자동 정렬되고 검색 기능이
                    있으니
                    <br />
                    걱정하지 마세요!
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-4 p-left-10 hero-img m-bottom-30">
                <img
                  className="img-fluid p-bottom-10 offset-1_5 offset-left-0_R CompanyImage gifSize animated fadeIn visible"
                  src={require("./images/animatedcamera.gif")}
                  alt="Company_Image"
                />
              </div>
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Home;

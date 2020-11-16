import React, { Component } from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import NAV from "./navbar";

class MainNav extends Component {
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
  render() {
    return (
      <header id="header" className="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
          <div className="container">
            <Link
              activeClass="active"
              to="page"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link2 className="nav-item nl-simple nav-link" to="/">
                <Link
                  activeClass="active"
                  to="page"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Link2 to="/">
                    <img
                      src={require("./images/uchu_logo.png")}
                      width={200}
                      height={40}
                      alt="header-logo"
                    />
                  </Link2>
                </Link>
              </Link2>
            </Link>
            <button className="navbar-toggler">
              <NAV />
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2
                      className="nav-item nl-simple nav-link"
                      to="/intro"
                    >
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/intro">소개</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2 className="nav-item nl-simple nav-link" to="/directory">
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/directory">디렉토리</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="page"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link2
                      className="nav-item nl-simple nav-link"
                      to="/upload"
                    >
                      <Link
                        activeClass="active"
                        to="page"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <Link2 to="/upload">업로드</Link2>
                      </Link>
                    </Link2>
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>{" "}
        </nav>{" "}
      </header>
    );
  }
}

export default MainNav;

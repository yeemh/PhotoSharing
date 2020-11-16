import React, { Component } from "react";
import MainNav from "./mainNav";
import GroupForm from "./GroupForm";
import GroupInfoList from "./GroupInfoList";

class directory extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "여수 여행",
        password: "1234"
      },
      {
        id: 1,
        name: "춘천 여행",
        password: "2345"
      }
    ],
    keyword: ""
  };
  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  // handleRemove = id => {
  //   const { information } = this.state;
  //   this.setState({
  //     information: information.filter(info => info.id !== id)
  //   });
  // };

  // handleUpdate = (id, data) => {
  // alert("12345");
  // const { information } = this.state;
  // const { changelist } = this.props;
  // this.setState({
  //   information: information.map(
  //     info =>
  //       id === info.id
  //         ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
  //         : info // 기존의 값을 그대로 렌더링
  //   )
  // });
  // changelist(this.state.information);
  // };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

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
        </div>{" "}
        <div className="container offset-top-10">
          <div className="offset-0_5">
            <div className="m-left-30 ">
              <p className="m-bottom-15">
                <GroupForm onCreate={this.handleCreate} />
              </p>
              <h3 className="p-font-MiSaeng m-top-0">
                <input
                  placeholder=" 검색할 이름을 입력하세요.."
                  onChange={this.handleChange}
                  value={this.state.keyword}
                />
              </h3>
            </div>
            <hr />
            <GroupInfoList
              data={filteredList}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default directory;

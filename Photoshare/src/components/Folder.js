import React, { Component } from "react";

class Folder extends Component {
  render() {
    const style = {
      padding: "8px",
      margin: "8px"
    };

    return (
      <img
        src={"./images/KakaoTalk_20191109_075625700.jpg"}
        // src={require("./images/KakaoTalk_20191109_075625700.jpg")}
        alt="업로드 하기 전입니당"
        width="400"
      />
    );
  }
}
export default Folder;

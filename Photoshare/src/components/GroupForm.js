// file: src/components/PhoneForm.js
import React, { Component } from "react";
import firebase from "firebase";

class GroupForm extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.name === "" || this.state.password === "") {
      alert("입력창을 모두 입력해주세요!");
      return;
    }
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      password: ""
    });
  };

  render() {
    var database = firebase.database();

    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className="p-font-MiSaeng m-bottom-0">
          <input
            placeholder=" 이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="password"
            placeholder=" 비밀번호"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          &nbsp;&nbsp;
          <button className="button_YuChuNam2" type="submit">
            등록
          </button>
        </h3>
      </form>
    );
  }
}

export default GroupForm;

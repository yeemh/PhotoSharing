import React, { Component } from "react";
import MainNav from "./mainNav";
import { storage } from "../firebase";
import firebase from "firebase";
import { connect } from "react-redux";
import { changelist } from "../store/modules/userlist";

class Relations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: "",
      passwd: "",
      image: null,
      url: "gs://photosharing-7553c.appspot.com",
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleChangeGroupName = e => {
    this.setState({
      groupName: e.target.value
    });
  };

  handleChangeGroupPasswd = e => {
    this.setState({
      passwd: e.target.value
    });
  };

  handleUpload = () => {
    const { list } = this.props;

    var flag = false;
    // alert(this.state.groupName);
    for (var value of list) {
      if (value.name === this.state.groupName) {
        if (value.password !== this.state.passwd) {
          alert("비밀번호가 틀립니다..\n다시 입력해주세요..");
          return;
        }
        alert(value.name + " 그룹에 추가 되었습니다.");
        flag = true;
        break;
      }
    }
    if (flag === false) {
      alert("해당 그룹을 찾지 못했습니다.\n그룹명을 다시 적어주세요.");
      return;
    }
    // const { image } = this.state;
    // const uploadTask = storage.ref(`images2/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {
    //     // progrss function ....
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     this.setState({ progress });
    //   },
    //   error => {
    //     // error function ....
    //     console.log(error);
    //   },
    //   () => {
    //     // complete function ....
    //     storage
    //       .ref("images2")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         console.log(url);
    //         this.setState({ url });
    //       });
    //   }
    // );
  };

  componentDidMount() {}

  render() {
    // const style = {
    //   height: "100vh",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center"
    // };
    var rootRef = firebase.database().ref();
    rootRef
      .child("users")
      .child("dir")
      .once("value", function(data) {
        console.log("1번 :", data.val());
      });
    /*
    var database = firebase.database();
    var dirname = "images2"; //이름
    var passwd = "123";
    var count;

    firebase
      .database()
      .ref("size/1")
      .once("value")
      .then(function(snapshot) {
        database.ref("size/1").set({ num: snapshot.val().num + 1 });
        count = snapshot.val().num + 1;
        alert(count);

        database
          .ref("users/" + count)
          .set({ dirname: dirname, passwd: passwd });
      });
*/
    /*
    
      while(i<count){
        firebase.database().ref('users/'+i).once('value').then(function(snapshot) {
        alert(snapshot.val().dirname);
        if(dirname == snapshot.val().dirname){
          alert("겹치는 그룹명이 존재합니다!");
          booliden = false;
        }
        })
        i++;
     }
    if(booliden == true){
      database.ref('users/').child('dir').push("dirname" : dirname, "passwd": 1234)  ;
    }*/

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="division">
          <div className="container p-left-0 align-items-center offset-top-8 offset-1">
            <div className="d-flex align-items-center img-fluid offset-1 p-left-50 ">
              <br />
              <h1 className="p-font-MiSaeng m-bottom-0 ">
                사진을 올려주세요! &nbsp;
                <input
                  type="group"
                  name="group"
                  value={this.state.groupName}
                  onChange={this.handleChangeGroupName}
                  placeholder="그룹명"
                  size="7"
                />
                &nbsp;&nbsp;
                <input
                  type="group"
                  name="group"
                  value={this.state.passwd}
                  onChange={this.handleChangeGroupPasswd}
                  placeholder="비밀번호"
                  size="7"
                />
              </h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h2 className="p-font-MiSaeng m-bottom-0">
                <input
                  className="button_YuChuNam p-font-MiSaeng"
                  type="file"
                  onChange={this.handleChange}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={this.state.url || "http://via.placeholder.com/400x300"}
                  alt="업로드 하기 전입니당"
                  width="400"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="button_YuChuNam2 p-font-MiSaeng"
                  onClick={this.handleUpload}
                >
                  등록
                </button>
              </h2>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bottom"></div>{" "}
      </div>
    );
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  list: state.userlist.list
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changelist: list => dispatch(changelist(list))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(Relations);

import React, { Component } from "react";
import GroupInfo from "./GroupInfo";
import { connect } from "react-redux";
import { changelist } from "../store/modules/userlist";

class GroupInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
  }

  setRedux = input => {
    const { changelist } = this.props;
    changelist(input);
  };

  render() {
    const style = {
      margin: "20px"
    };

    // list : redux용 리스트
    // console.log("render GroupInfoList");
    const { data, onRemove, onUpdate } = this.props;
    // console.log(data);
    const printList = data.map(info => (
      <div style={style}>
        <GroupInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </div>
    ));

    // this.setRedux(data);
    this.setRedux(data);

    return <div>{printList}</div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(GroupInfoList);

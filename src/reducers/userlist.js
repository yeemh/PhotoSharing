// 액션 타입 정의
const CHANGE_LIST = "userlist/CHANGE_LIST";

// 액션 생섬함수 정의
export const changelist = list => ({ type: CHANGE_LIST, list });

// **** 초기상태 정의
const initialState = {
  list: [
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
  ]
};

// **** 리듀서 작성
export default function userlist(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
}
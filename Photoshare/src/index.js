import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { createStore } from "redux";
// import reducers from "./reducers";

// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from "redux";
import rootReducer from "./store/modules";

// **** (3) Provider 불러오기
import { Provider } from "react-redux";

// **** (2) 스토어를 만들고 현재 값 확인해보기
const store = createStore(rootReducer);
// console.log(store.getState());

// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

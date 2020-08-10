import React from "react";
import { withRouter } from "react-router-dom";

// thunk함수 내에서 Router쓰는 것보다 withRouter사용이 더 편하다
const WithRouterSample = ({ history }) => {
  return <button onClick={() => history.push("/")}>되돌아 가즈아!</button>;
};

export default withRouter(WithRouterSample);

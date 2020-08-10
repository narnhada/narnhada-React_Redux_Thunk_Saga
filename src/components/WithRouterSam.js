import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ history }) {
  return <button onClick={() => history.push("/")}>홈으로로로</button>;
}

export default withRouter(WithRouterSample);

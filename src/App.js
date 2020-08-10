import React from "react";
import PostListPage from "./page/PostListPage";
import PostPage from "./page/PostPage";
import { Route } from "react-router-dom";
// import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <>
      {/* <CounterContainer /> */}
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;

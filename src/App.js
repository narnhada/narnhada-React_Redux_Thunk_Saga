import React from "react";
import PostListPage from "./page/PostListPage";
import { Route } from "react-router-dom";
import PostPage from "./page/PostPage";

function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;

### React redux Thunk (none Refactoring)

```javascript
[코드](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js)
export const getPosts = () => async dispatch => {
  dispatch({ type: GET_POSTS }); // 요청이 시작됨
  try {
    const posts = postsAPI.getPosts(); // API 호출
    dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
  }
};
```

### React redux Saga (none Refactoring)

```javascript
function* getPostsSaga() {
  try {
    const posts = yield call(postsAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
}
```

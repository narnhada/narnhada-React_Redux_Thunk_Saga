// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/// 카운터 딜레이
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 500);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 500);
};

// 초기값
const initialState = 0;

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

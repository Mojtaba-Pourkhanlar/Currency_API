const initialState = {
  loading: false,
  coins: [],
  error: "",
};

const coinReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        coins: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        coins: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export { coinReducer };

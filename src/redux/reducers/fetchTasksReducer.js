const INITIAL_STATE = {
  tasks: null,
  isFetching: false,
  errorMessage: undefined,
};

const fetchTasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TASKS_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_TASKS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        tasks: action.payload,
      };
    case "FETCH_TASKS_ERROR":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default fetchTasksReducer;

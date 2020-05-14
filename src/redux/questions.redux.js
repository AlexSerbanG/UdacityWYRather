import { _getQuestions } from "../api/_DATA";

const actionTypes = {
  GET_QUESTIONS: 'GET_QUESTIONS',
};

const actionCreators = {
  getQuestions: (questions) => ({
    type: actionTypes.GET_QUESTIONS,
    questions,
  }),
};

export const actions = {
  getQuestions: () => (dispatch) => new Promise((res) => {
    _getQuestions().then(result => {
      dispatch(actionCreators.getQuestions(result));
      res();
    })
  }),
};

const reducer = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case (actionTypes.GET_QUESTIONS):
      return {
        ...state,
        byId: { ...action.questions },
        allIds: Object.keys(action.questions),
      };
    default:
      return state;
  }
};

export default reducer;

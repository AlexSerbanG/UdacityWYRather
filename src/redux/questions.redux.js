import { _getQuestions, _saveQuestionAnswer } from "../api/_DATA";

export const actionTypes = {
  GET_QUESTIONS: 'GET_QUESTIONS',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
};

const actionCreators = {
  getQuestions: (questions) => ({
    type: actionTypes.GET_QUESTIONS,
    questions,
  }),
  answerQuestion: (questionId, user, answer) => ({
    type: actionTypes.ANSWER_QUESTION,
    questionId,
    user,
    answer,
  })
};

export const actions = {
  getQuestions: () => (dispatch) => new Promise((res) => {
    _getQuestions().then(result => {
      dispatch(actionCreators.getQuestions(result));
      res();
    })
  }),
  answerQuestion: (questionId, answer) => (dispatch, getState) => {
    const { auth: { authedUser } } = getState();
    _saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer,
    }).then(() => dispatch(actionCreators.answerQuestion(questionId, authedUser, answer)));
  }
};

const reducer = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case (actionTypes.GET_QUESTIONS):
      return {
        ...state,
        byId: { ...action.questions },
        allIds: Object.keys(action.questions),
      };
    case (actionTypes.ANSWER_QUESTION):
      const question = state.byId[action.questionId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.questionId]: {
            ...question,
            [action.answer]: {
              ...question[action.answer],
              votes: question[action.answer].votes.concat([action.user])
            }
          }
        }
      };
    default:
      return state;
  }
};

export default reducer;

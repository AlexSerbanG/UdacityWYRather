import { _getUsers } from "../api/_DATA";
import { actionTypes as questionsActionTypes } from './questions.redux';

const actionTypes = {
  GET_USERS: 'GET_USERS',
};

export const actionCreators = {
  getUsers: (users) => ({
    type: actionTypes.GET_USERS,
    users,
  }),
}

export const actions = {
  getUsers: () => (dispatch) => {
    _getUsers().then(result => {
      dispatch(actionCreators.getUsers(result));
    });
  }
};

const reducer = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case (actionTypes.GET_USERS):
      return {
        ...state,
        byId: { ...action.users },
        allIds: Object.keys(action.users),
      };
    case (questionsActionTypes.ANSWER_QUESTION):
      const user = state.byId[action.user];
      return {
        ...state,
        byId: {
          ...state.byId,
          [user.id]: {
            ...user,
            answers: {
              ...user.answers,
              [action.questionId]: action.answer,
            }
          }
        }
      };
    default:
      return state;
  }
};

export default reducer;

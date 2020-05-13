import { _getUsers } from "../api/_DATA";

const actionTypes = {
  GET_USERS: 'GET_USERS',
};

const actionCreators = {
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
    default:
      return state;
  }
};

export default reducer;

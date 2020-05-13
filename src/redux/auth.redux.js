const actionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
};

const actionCreators = {
  signIn: (userId) => ({
    type: actionTypes.SIGN_IN,
    userId,
  }),
  signOut: () => ({
    type: actionTypes.SIGN_OUT,
  })
};

export const actions = {
  signIn: (userId) => (dispatch, getState) => {
    const { users: { allIds } } = getState();
    const user = allIds.find(id => id === userId);
    if (user) {
      dispatch(actionCreators.signIn(userId));
    }
  },
  signOut: () => (dispatch, getState) => {
    dispatch(actionCreators.signOut());
  },
};

const reducer = (state = { authedUser: null }, action) => {
  switch (action.type) {
    case (actionTypes.SIGN_IN):
      return {
        authedUser: action.userId,
      };
    case (actionTypes.SIGN_OUT):
      return {
        authedUser: null,
      }
    default:
      return state;
  }
};

export default reducer;

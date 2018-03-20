export const incrementCount = () => {
  return dispatch => {
    dispatch({ type: 'INCREMENT' });
  };
};

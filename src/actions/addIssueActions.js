export const addIssue = issue => {
  return (dispatch, getState) => {
    //Make Redux-thunk call here
    dispatch({ type: 'ADD_ISSUE', issue });
  };
};

export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};

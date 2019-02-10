export const addIssue = issue => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make Redux-thunk call here
    const firestore = getFirestore();
    firestore
      .collection('issues')
      .add({ ...issue, createdAt: new Date() })
      .then(() => {
        dispatch({ type: 'ADD_ISSUE', issue });
      })
      .catch(err => {
        dispatch({ type: 'ADD_ISSUE_ERR', err });
      });
  };
};

//Two Packages to use firebase with React & Redux
//react-redux-firebase
//redux-firestore

//getFirebase & getFirestore know what to connect to because we have added the config files into our store enhancers

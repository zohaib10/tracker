export const deleteIssue = issue => {
  return {
    type: 'DELETE_ISSUE',
    issue
  };
};

export const updateIssue = issue => {
  return {
    type: 'UPDATE_ISSUE',
    issue
  };
};

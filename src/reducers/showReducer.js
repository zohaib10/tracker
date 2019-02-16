const initState = {
  issues: [
    {
      title: 'Watch show',
      description: 'Make sure to watch Yu Yu Hakushu',
      assignee: '',
      status: 'open'
    },
    {
      title: 'Wash Dishes',
      description: 'Make sure to completely Wash all dishes',
      assignee: '',
      status: 'open'
    },
    {
      title: 'Apply for jobs',
      description: 'Make sure to apply for jobs',
      assignee: '',
      status: 'open'
    },
    {
      title: 'Go to gym',
      description: 'Make sure to go to the gym',
      assignee: '',
      status: 'open'
    },
    {
      title: 'Talk to manager',
      description: 'Make sure to speak with manager about my interests',
      assignee: '',
      status: 'open'
    },
    {
      title: 'Control BP',
      description: 'Make sure to check and control my BP',
      assignee: '',
      status: 'open'
    }
  ],
  assignee: ['Zohaib', 'Maximus', 'Zeus']
};

const showReducer = (state = initState, action) => {
  console.log(state);
  if (action.type === 'ADD_ISSUE') {
    return {
      ...state,
      issues: [...state.issues, action.issue]
    };
  } else if (action.type === 'DELETE_ISSUE') {
    const newIssues = state.issues.filter(
      issue => issue.title !== action.issue
    );
    return {
      ...state,
      issues: newIssues
    };
  } else if (action.type === 'UPDATE_ISSUE') {
    console.log('Here');
    const newI = [];
    for (var i = 0; i < state.issues.length; i++) {
      if (state.issues[i].title === action.issue.title) {
        newI.push(action.issue);
      } else {
        newI.push(state.issues[i]);
      }
    }

    const newA = state.assignee;
    if (!newA.includes(action.issue.assignee)) {
      newA.push(action.issue.assignee);
    }

    return {
      ...state,
      issues: newI,
      assignee: newA
    };
  } else if (action.type === 'ADD_ISSUE_ERR') {
    console.log('ADD_ISSUE_ERR', action.err);
    return state;
  }

  return state;
};

export default showReducer;

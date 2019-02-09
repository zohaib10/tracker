import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addIssue } from '../actions/addIssueActions';

import { TextField, Button, Paper } from '@material-ui/core';

const styles = {
  paper: {
    width: '98%',
    margin: '1%'
  },
  tfield: {
    width: '98%',
    margin: '1%'
  }
};

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      assignee: '',
      status: 'open'
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        title: e.target.title.value,
        description: e.target.description.value
      },

      () => {
        this.props.addIssue(this.state);
      }
    );

    e.target.title.value = '';
    e.target.description.value = '';
  };

  render() {
    return (
      <Paper style={styles.paper}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            id="title"
            style={styles.tfield}
            placeholder="Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="description"
            style={styles.tfield}
            placeholder="Description"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{
              margin: 10,
              backgroundColor: '#222',
              textTransform: 'none'
            }}
          >
            Add
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIssue: issue => dispatch(addIssue(issue))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Add);

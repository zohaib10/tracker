import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteIssue, updateIssue } from '../actions/showIssuesActions';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

const styles = {
  panel: {
    width: '98%',
    marginLeft: '1%'
  },
  input: {
    margin: '1%',
    width: 130
  },
  tfield: {
    marginRight: 10,
    width: 270
  },
  button: {
    margin: 10,
    backgroundColor: '#222',
    textTransform: 'none',
    color: 'white',
    marginTop: 25
  }
};

class Show extends Component {
  state = {
    status: 'Open',
    assignee: 'All'
  };

  outputExpansion(issue) {
    return (
      <ExpansionPanel id="panel" style={styles.panel} key={issue.title}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>
            {issue.title} - {issue.status} - {issue.assignee} -
            {issue.description}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              style={styles.tfield}
              id="title"
              label="Title"
              margin="normal"
              defaultValue={issue.title}
            />
            <TextField
              style={styles.tfield}
              id="assignee"
              label="Assignee"
              defaultValue={issue.assignee}
              margin="normal"
            />
            <TextField
              style={styles.tfield}
              id="status"
              label="Satus"
              defaultValue={issue.status}
              margin="normal"
            />
            <TextField
              style={styles.tfield}
              id="description"
              label="Description"
              defaultValue={issue.description}
              margin="normal"
            />
            <Button type="submit" variant="contained" style={styles.button}>
              Update
            </Button>
            <Button
              onClick={() => this.handleClick(issue.title)}
              variant="contained"
              style={styles.button}
            >
              Delete
            </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  handleClick = title => {
    this.props.deleteIssue(title);
  };

  handleSubmit = e => {
    e.preventDefault();
    const issue = {
      title: e.target.title.value,
      assignee: e.target.assignee.value,
      status: e.target.status.value,
      description: e.target.description.value
    };
    this.props.updateIssue(issue);
  };

  handleChange = event => {
    this.setState({ status: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ assignee: event.target.value });
  };

  render() {
    const issues = this.props.issues ? (
      this.props.issues.length ? (
        <div>
          <FormControl style={styles.input}>
            <InputLabel htmlFor="status-customized-select">Satus</InputLabel>
            <Select value={this.state.status} onChange={this.handleChange}>
              <MenuItem value={'Open'}>Open</MenuItem>
              <MenuItem value={'Closed'}>Closed</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={styles.input}>
            <InputLabel htmlFor="status-customized-select">Assignee</InputLabel>
            <Select value={this.state.assignee} onChange={this.handleChange1}>
              <MenuItem value={'All'}>All</MenuItem>
              {this.props.assignee.map(assignee => {
                return <MenuItem value={assignee}>{assignee}</MenuItem>;
              })}
            </Select>
          </FormControl>

          {this.props.issues.map(issue => {
            if (
              this.state.assignee === 'All' &&
              this.state.status.toLowerCase() === issue.status.toLowerCase()
            ) {
              return (
                <ExpansionPanel
                  id="panel"
                  style={styles.panel}
                  key={issue.title}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>
                      {issue.title} - {issue.status} - {issue.assignee} -
                      {issue.description}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <form
                      onSubmit={this.handleSubmit}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        style={styles.tfield}
                        id="title"
                        label="Title"
                        margin="normal"
                        defaultValue={issue.title}
                      />
                      <TextField
                        style={styles.tfield}
                        id="assignee"
                        label="Assignee"
                        defaultValue={issue.assignee}
                        margin="normal"
                      />
                      <TextField
                        style={styles.tfield}
                        id="status"
                        label="Satus"
                        defaultValue={issue.status}
                        margin="normal"
                      />
                      <TextField
                        style={styles.tfield}
                        id="description"
                        label="Description"
                        defaultValue={issue.description}
                        margin="normal"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        style={styles.button}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => this.handleClick(issue.title)}
                        variant="contained"
                        style={styles.button}
                      >
                        Delete
                      </Button>
                    </form>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            } else if (
              this.state.assignee.toLowerCase() ===
                issue.assignee.toLowerCase() &&
              this.state.status.toLowerCase() === issue.status.toLowerCase()
            ) {
              return (
                <ExpansionPanel
                  id="panel"
                  style={styles.panel}
                  key={issue.title}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>
                      {issue.title} - {issue.status} - {issue.assignee} -
                      {issue.description}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <form
                      onSubmit={this.handleSubmit}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        style={styles.tfield}
                        id="title"
                        label="Title"
                        margin="normal"
                        defaultValue={issue.title}
                      />
                      <TextField
                        style={styles.tfield}
                        id="assignee"
                        label="Assignee"
                        defaultValue={issue.assignee}
                        margin="normal"
                      />
                      <TextField
                        style={styles.tfield}
                        id="status"
                        label="Satus"
                        defaultValue={issue.status}
                        margin="normal"
                      />
                      <TextField
                        style={styles.tfield}
                        id="description"
                        label="Description"
                        defaultValue={issue.description}
                        margin="normal"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        style={styles.button}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => this.handleClick(issue.title)}
                        variant="contained"
                        style={styles.button}
                      >
                        Delete
                      </Button>
                    </form>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            }
          })}
        </div>
      ) : (
        <ExpansionPanel style={styles.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography>No Issues</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      )
    ) : null;

    return <div>{issues}</div>;
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues,
    assignee: state.assignee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteIssue: issue => dispatch(deleteIssue(issue)),
    updateIssue: issue => dispatch(updateIssue(issue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);

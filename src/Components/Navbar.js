import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  }
};

function Navbar() {
  return (
    <div style={styles.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#222',
          color: 'yellow'
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

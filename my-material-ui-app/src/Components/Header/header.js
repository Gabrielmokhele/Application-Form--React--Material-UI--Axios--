import React from 'react';
import { Toolbar, AppBar, Typography } from '@mui/material';

const Header = ({ }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Form
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

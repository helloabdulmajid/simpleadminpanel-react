import React from 'react'
import { AppBar, Box,Toolbar,Typography, Button, } from '@mui/material';

const Navbar = () => {
  return (
<>
<Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography varient="h5" component="div" sx={{FlexGrow:1}}>
                AM-Panel
            </Typography>
        </Toolbar>
    </AppBar>

</Box>
</>
    )
}

export default Navbar
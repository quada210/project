
import { AppBar, Toolbar, Typography ,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>

        
         <Typography variant='h4'>BLOG &nbsp;&nbsp;&nbsp; &nbsp;</Typography>
         
         <Button variant="contained" color="secondary">
          <Link to={'/view'} style={{textDecoration:'none', color:'white'}}>
            Home
            </Link>
            </Button>
            &nbsp;&nbsp;&nbsp; &nbsp;

<Button variant="contained" color="secondary">
          <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>
            Add blog
            </Link>
            </Button>
            &nbsp;&nbsp;&nbsp; &nbsp;


            <Button variant="contained" color="secondary">
          <Link to={'/card'} style={{textDecoration:'none', color:'white'}}>
            card view
            </Link>
            </Button>



    
    </Toolbar>
    </AppBar>
  )
}

  
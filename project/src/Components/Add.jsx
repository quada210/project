import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'

const Add = () => {
    var[inputs,setInputs] = useState({
        name:"",
        des:"",
        author:"",
        
    })
     
  return (
    <div style={{margin:'6%'}} className='App' >
    <Typography variant='h4' style={{color:'purple'}}>
      Add Blog
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <TextField 
          label=' Name' 
          variant='outlined' 
          fullWidth
          name='name'
          value={inputs.name}
         
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField label='Description' 
          variant='outlined' 
          fullWidth
          name='des'
          value={inputs.des}
          
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}> 
          <TextField 
          label='Name of author'
           variant='outlined' 
           fullWidth
           name='author'
          value={inputs.author}
          
           />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}> 
        <Button variant='contained' color='secondary' >Submit</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Add
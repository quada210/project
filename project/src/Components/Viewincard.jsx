import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const Viewincard = () => {
var[data,setData] = useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })
  .catch((err)=>console.log(err))
},[])

  return (
        <div style={{margin:'4%'}}>
  <Grid container spacing={2}>
      {data.map((val,i)=>(
      <Grid item xs={12} sm={6} md={4} key={i}>
          <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h5' gutterBottom>
           id: {val.id}
          </Typography>
          <Typography variant='h6'>
          title : {val.title}
          </Typography>
          </CardContent>
         
          
      </Card>
        </Grid>
))}
  </Grid>
    </div>
  )
}

export default Viewincard

import React,{useState} from 'react'
import {Grid,Paper,Typography,Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


function Details(props) {
    console.log(props.namee)
    return (
        <>
         <div style={{height:"100vh",backgroundImage:"url(https://shaadiwish.com/blog/wp-content/uploads/2020/06/groom-outfit.jpg",  backgroundColor:"#3b3838",
             backgroundBlendMode:"multiply"}}>


<Grid container spacing={3} style={{paddingTop:"70px"}}>

<Grid item xs={6} >
<Paper style={{height:"500px",padding:"30px"}}>
    <img src={props.namee.img} width="450px"/>  </Paper>
</Grid>
<Grid item xs={6}>
<Paper style={{height:"500px",padding:"30px"}}>
    
    <Typography variant="h6"><b>Title:</b>{props.namee.name}</Typography><br/><br/>
    <Rating name="read-only" value="3" readOnly /><br/><br/>
    <Typography variant="h6"><b>Price: </b> PKR {props.namee.Price}/-</Typography><br/><br/>
    <Typography variant="h6"><b>Discription:   </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prifive centuries, but also the leap into electronic typesetting, passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography><br/><br/>

    <Button variant="contained" color="secondary">Add TO Cart</Button>&nbsp;&nbsp;
    <Button variant="contained" style={{backgroundColor:"orange"}}>Buy Now</Button>
     </Paper>
</Grid>
</Grid>
            
        </div>
        </>
    )
}

export default Details

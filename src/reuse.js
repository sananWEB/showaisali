import React,{useState} from 'react'
import {Grid,Paper,Typography,Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch} from "react-router-dom";
import Details from "./Details"
export function Reuse(props) {


    const productss=props.products;
    const url=useRouteMatch().url
    const path=useRouteMatch().path
    console.log(path)
    
    const [route1, setroute1] = useState("")

    function fun1(a){
        setroute1(a)
        console.log(a)
    }
    return (
        <>
       <Switch>
      
       <Route exact path={`/${props.name1}`}>
            <div style={{height:"200px",backgroundImage:`url(${props.pic})`,  backgroundColor:"#3b3838",
             backgroundBlendMode:"multiply",display:"flex",justifyContent:"center",alignItems:"center"}}>
<h1 style={{fontSize:"50px",color:"white"}}>{props.name1}</h1>
             </div>


             <div style={{height:"500px",backgroundImage:"url("+process.env.PUBLIC_URL+"./img1.jpg)",  backgroundColor:"#3b3838",
             backgroundBlendMode:"multiply"}}>

<Grid container spacing={3}>
    {productss.map((i)=>
        <Grid item xs={3}>
        <Paper >
            <center>
            <img src={i.img} width="250"/>
            
<Typography variant="h6">{i.name}</Typography>
<Rating name="read-only" value="3" readOnly />
<Typography variant="h6" style={{fontWeight:"bold"}}>PKR:{i.Price}</Typography>
<Button onClick={()=>{fun1(i)}} component={Link} to={`${url}/${i.name}`} variant="contained" color="secondary" style={{marginBottom:"20px"}}>View Info</Button>
</center>
        </Paper>
      </Grid>

    )}

      </Grid>

             </div>
             </Route>
           
              <Route exact path={`${path}/:id`}>
              <Details namee={route1}/>
              </Route>
              </Switch> 
           
            
        </>
    )
}






import React from 'react';
import {CssBaseline,Typography,Container, Button} from '@material-ui/core';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export function Main() {


    const useStyles=makeStyles({
       container:{
            backgroundColor: '#cfe8fc',height: '100vh'
             ,backgroundImage:"url("+process.env.PUBLIC_URL+"./img1.jpg)",
             backgroundPosition:"center",
             
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundColor:"#3b3838",
             backgroundBlendMode:"multiply",
             display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            "& button":{
                marginLeft:"20px",
            }
        },
        icon:{
          display:"flex",
          "& svg":{
            paddingLeft:"10px",
          }
        }
       
      })
      const classes=useStyles();
    const aryy1=["Shirts","Pants","shoes","Necktie"]
  return (
    <React.Fragment>
      <CssBaseline />
       
      <Container maxWidth="xl" disableGutters>
        <Typography component="div" className={classes.container}>
            <center>
            <Typography variant="h3" style={{fontWeight:"bold",color:"white"}}>Online Store</Typography>
            <Typography variant="body1" style={{paddingBottom:"30px",color:"white",marginLeft:"30px",marginRight:"30px"}}>
            E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems
            </Typography>
            </center>
            <br/>
            <br/>
            <Typography component="div">
              {aryy1.map((i)=>


     <Link to={`/${i}`} style={{textDecoration:"none"}}><Button color="primary" 
       variant="outlined"  >{i}</Button ></Link>


              )}
       
            
        </Typography>
        
        </Typography>
      </Container>
    </React.Fragment>
  );
}


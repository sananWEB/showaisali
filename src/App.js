import React,{Fragment} from 'react';
import {Main} from './main.js'
import {Reuse} from "./reuse"
import { createMuiTheme,ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F87C00',
      main: '#fff',
      dark: '#F83303',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1c54b2',
      main: '#2979ff',
      dark: '#5393ff',
      contrastText: '#fff',
    },
  }, 
  typography:{
    fontFamily:"Poppins, sans-serif"
  },
  shape:"0px",
  shadows:["none"]
});


theme = responsiveFontSizes(theme);

function App() {
  
  return (
    
    <ThemeProvider theme={theme}>
    <Fragment>
      <Router>
      <Route exact path="/">   
      <Main/>
      </Route>
      <Route  path="/Shirts">   
      <Reuse name1="Shirts" pic="https://s1.best-wallpaper.net/wallpaper/m/1910/T-shirt-tie_m.jpg"  products={ [{
        name:"Cotton T-shirt",
        true:true,
        Price:"450",
        img:"https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1492015505/475740_X3G17_1060_002_100_0000_Light-Childrens-cotton-T-shirt-with-Gucci-logo.jpg",
        S:"3",md:3,
    },
    {
        name:"DON'T METH WITH ME T-SHIRT",
        Price:"500",
        true:true,
        img:"https://5.imimg.com/data5/PQ/YH/MY-29477425/men-printed-casual-shirts-500x500.jpg",
        S:"3",md:3,
    },
    {
        name:" Men’s Office Shirts - Half Sleeve",
        Price:"600",
        true:true,
        img:"https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B41ED0F83-1DC4-4568-B273-4DBCCE756419%7D",
        S:"3",md:3,
    },
    {
        name:"Mens Stylish Check Shirts",
        Price:"340",
        true:true,
        img:"https://4.imimg.com/data4/PS/PL/MY-28598010/party-wear-shirts-500x500.jpg",
        S:"3",md:3,
    }]}/>
      </Route>
      
      <Route   path="/Pants">   
      <Reuse name1="Pants" pic="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" products={[{
    name:"Autumn Winter Skinny Mid Jeans",
    Price:"3140",
    img:"https://ae01.alicdn.com/kf/HTB1ZhrfXjDuK1Rjy1zjq6zraFXap/Autumn-Winter-Skinny-Mid-Jeans-Men-Clothes-2018-Mens-Jeans-Brand-Black-Jean-Pants-Fashion-Classic.jpg",
    S:"3",md:3,
},
{
    name:"Trousers for Men Online",
    Price:"2230",
    img:"https://i.pinimg.com/originals/29/43/73/2943730c84caca649efd95f46ea2716b.jpg",
    S:"3",md:3,
},

{
    img:"https://ashleyweston.com/wp-content/uploads/2015/10/How-Your-Jeans-Should-Fit-Ashley-Weston-Mens-Clothing-Fit-Guide.jpg",
    Price:"5900",
    name:"Men's Jeans Fit ",
    S:"3",md:3,
},
{
    name:"Jeans Should Fit",
    Price:"1470",
    img:"https://cdn.shopify.com/s/files/1/0740/9143/files/18.05_How_jeans_should_fit_5_grande.jpg?v=1526483144",
    S:"3",md:3,
}]}/>
      </Route>

      <Route  path="/Shoes">   
      <Reuse name1="Shoes" pic="https://wallpapercave.com/wp/wp2971379.jpg" 
      products={[{
        name:"Loafers Shoes Men Pure Velvet",
        Price:"2340",
        img:"https://billaberry.com/wp-content/uploads/2018/06/IMG_0711-min.jpg",
        S:"3",md:3,
    },
    {
        name:" Loafer Shoes For Men",
        Price:"2130",
        img:"https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
        S:"3",md:3,
    },
    {
        name:"Hot Men's Imported Shoes",
        Price:"2100",
        img:"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/1726/5712/DEKABR-2017-Hot-Men-Shoes-Fashion-Warm-Fur-Winter-Men-Boots-Autumn-Leather-Footwear-For-Man__42948.1514025919.jpg?c=2?imbypass=on",
        S:"3",md:3,
    },
    {
        name:"Waliicorners Men Shoes ",
        Price:"3500",
        img:"https://waliicorners.com/wp-content/uploads/2019/07/CatriCa-2019-Hot-Sale-Designer-Men-Shoes-Fashion-High-Top-Quality-Trainers-Human-Race-Sneakers-Black-4.jpg",
        S:"3",md:3,
    }]}
      />
      </Route>

      <Route  path="/Necktie">   
      <Reuse name1="Necktie" pic="https://cdn.shopify.com/s/files/1/2117/2759/collections/Ties_2048x.jpg?v=1567613546" products={[{
  name:"Student School Tie",
  Price:"600",
  img:"https://5.imimg.com/data5/EH/QW/MY-9491335/student-school-tie-500x500.jpg",
  S:"3",md:3,
},
{
  name:"Natives Cotton Tie",
  Price:"340",
  img:"https://i5.walmartimages.com/asr/389557bf-d7dc-4f63-8dd3-64e7fd0d125a_1.7eb74c629e58d666209b13f6d094a6c7.jpeg",
  S:"3",md:3,
},
{
  name:"Custom Neckties",
  Price:"230",
  img:"https://static.contrado.com/resources/images/2017-4/58992/custom-ties-with-navy-suit-120397_l.jpg",
  S:"3",md:3,
},
{
  name:"Hardy Amies Ties Black",
  Price:"200",
  img:"https://cdn10.bigcommerce.com/s-auqap/products/1985/images/3982/HA12-Black-Dotted-Necktie__53806.1429645398.1280.1280.jpg?c=2",
  S:"3",md:3,
}]}/>
      </Route>
     
      </Router>
      
    </Fragment>
    </ThemeProvider>
    
  );
}
export default App;

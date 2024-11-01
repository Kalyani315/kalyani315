import Home from "./Home";
import Veg from "./Veg";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import './App.css';
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Purchasehistory from "./Purchasehistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

function App(){
  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  
  return(
    <>
    

    <GoogleOAuthProvider clientId ="742663194895-12ftgmkkh01s6kji2d9r0cuk6o0upknq.apps.googleusercontent.com">
        <GoogleLoginComponent/>
    </GoogleOAuthProvider>

  <BrowserRouter>

   <Link to="/Home">Home</Link>
   <Link to="/veg">Veg Items</Link>
   <Link to="/nonveg">NonVeg Items</Link>
   <Link to="./Cart">Cart{totalItems}</Link>
   <Link to="/history">Purchasehistory</Link>
   <Link to="/aboutus">AboutUs</Link>
   <Link to="/contactus">ContactUs</Link>
 
   
  
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/veg" element={<Veg />} />
    <Route path="/nonveg" element={<NonVeg />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/history" element={<Purchasehistory />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    
   </Routes>
   

   </BrowserRouter>

   
   
   </> 
  )
}
export default App;
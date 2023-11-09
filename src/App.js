import './App.css';
import'./Components/carosol.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Carosol from './Components/Carosol';
import Contact from './Components/Contact';
import MainHome from './Components/MainHome';
import Footer from './Components/Footer';
import TalbatApp from './Components/TalbatApp';
import SingleItem from "./Components/SingleItem/SingleItem";
import Login from './Components/Login';
import Cart from './Components/Cart/Cart';
import { connect } from "react-redux";
import ValidationForm2 from './Components/Login';
import { ToastContainer } from 'react-toastify';

import {
  Route,
  Switch,
  Redirect,
  } from "react-router-dom";
import Allresturants from './Components/Allresturants';
import JoinUsMain from './Components/Joinusmain';
import CityService from './Components/CitiesServ';
import Products from "./Components/Products/Products"



function App({current}) {
  return (
   <>
<div>
  <Navbar/>

                <Switch>
                <Route exact path='/' component={Carosol} >
                <Carosol/>
                <MainHome/>
                <JoinUsMain/>
                <CityService/>
                < TalbatApp/>
                </Route>
                <Route exact path='/' component={MainHome} >
                <MainHome/>
                </Route>
                <Route exact path='/contact' component={Contact} >
                <Contact/>
                </Route>
                <Route exact path='/resturants' component={Allresturants} >
                <Allresturants/>
                </Route>
                <Route exact path='/products' component={Products} >
                <Products/>
                </Route>
                <Route exact path='/login' component={Login} >
                <Login/>
                </Route>
                <Route  path='/login' component={ValidationForm2} >
                <ValidationForm2/>
                
                </Route>
                <Route exact path="/cart" component={Cart} >
                  <Cart/>
                  </Route>
              {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} >
              <SingleItem/>
              </Route>
          )}
            </Switch>

  <Footer/>
  <ToastContainer/>
  </div>
   </>
  );
}


const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
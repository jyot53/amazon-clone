import React , {useEffect} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout1'
import Login from './components/Login'
import Payment from './components/Payment'
import Orders from './components/Orders'
// import {onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const App = () => {

  const promise = loadStripe('pk_test_51JgrGfSEkasDND80PnCmPZoqvx7KX40uO3DjUe5i6ZyDMgfcaAbwoVjDdQML6hLgrNihVXPGinQNvs98T9mhV2Qn00ynZ1G5gH');

  const [{basket} , dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((user)=>{
      // console.log(user);
      if(user){
        const uid = user.uid;
        // console.log(uid);
        dispatch({
          type:'SET_USER',
          user : user
        })

      }else{
        dispatch({
          type:'SET_USER',
          user : null
        })
      }
    })

  }, [])

  return (
    <BrowserRouter>
      <div className="app">     
        <Switch> 
          <Route exact path="/"> 
            <Header/>        
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  )
}

export default App

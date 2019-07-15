import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { auth, createUserProfileDocument } from './firebase/firebase.util'; //Importing from firebase.util.js

import { setCurrentUser } from './redux/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component{

  unsubscribeFromAuth = null; // Initial auth declaration 

  componentDidMount(){ //handling auth value (logged in or not) when a component mounts
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        } else {
          this.props.setCurrentUser(userAuth);
        }
      })
    }

  componentWillUnmount (){
    this.unsubscribeFromAuth(); //Handling auth value (whether logged in or out) when a component unmounts
  }

  render(){
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render= {() => this.props.currentUser ? (
          <Redirect to="/" />
          ) : (
          <SignInAndSignUpPage />
          )} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './ReactRouter.css';
import Header from './Header';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Error from './Error';
import User from './User';

 class ReactRouterDemo extends Component {
    render() {
        return (
        <React.Fragment>    
            <BrowserRouter>            
                <Header/>                    
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    {/* For passing  props in router */}
                    <Route exact path="/about-us" component = {()=> <AboutUs name="Abouttttt us"/>}/>
                    <Route exact path="/contact-us" render = {()=> <ContactUs name="Abouttttt us"/>}/>
                    {/* <Route path="/user/:fname/:lname" component = {User}/>  */}
                    <Route path="/user/:fname/:lname" render={(props) => <User {...props} />}/> 
                    <Route component = {Error}/>                   
                </Switch>
            </BrowserRouter>
        </React.Fragment>            
        )
    }
}

const Home = () => {
    return (
        <div className="contactUs">
            <h2>Home</h2>
        </div>
    )
}

export default ReactRouterDemo;
import React from "react";
import Index from "pages/index";
import Login from "pages/login";
import Registration from "pages/registration";
import Mycobinet from "pages/mycobinet";
import Resipesinfo from "pages/resipesinfo";
import Myresipes from "pages/myresipes";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/login' component={Login}/>
			<Route exact path='/registration' component={Registration}/>
			<Route exact path='/mycobinet' component={Mycobinet}/>
			<Route exact path='/resipesinfo' component={Resipesinfo}/>
			<Route exact path='/myresipes' component={Myresipes}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);

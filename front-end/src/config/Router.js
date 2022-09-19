import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import AuthenticatedRoute from "./AuthenticatedRoute";
// import ListUser from "../views/ListUser/ListUser";
// import EditUser from "../views/EditUser/EditUser";
// import CreateUser from "../views/CreateUser/CreateUser";
// import Profile from "../views/Profile/Profile";
import Page404 from "../views/Page404/Page404";
import Orders from "../views/Orders/Orders";
import OrderDetails from '../views/Orders/OrderDetails';
import TopProductsFilter from '../views/Products/TopProductsFilter';
import TopProducts from '../views/Products/TopProducts';

function Router(props) {
    return (
	    <Switch>
			{/* <AuthenticatedRoute path="/profile/:id" component={Profile}/>
			<AuthenticatedRoute path="/edit-user" component={EditUser}/> */}
			<AuthenticatedRoute path="/home" component={Home}/>
			{/* <Route exact path="/list-user" component={ListUser}/> */}
	    	<Route exact path="/login" component={Login}/>
			<Route exact path="/orders" component={Orders}/>
			<Route exact path="/order-details/:order_id" component={OrderDetails}/>
			<Route exact path="/top-products-filter" component={TopProductsFilter}/>
			<Route exact path="/top-products" component={TopProducts}/>
			<Route exact path="/" component={Home}/>
			<Route component={Page404}/>
        </Switch>
    );
}

export default Router;
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Category from './components/layout/Category';
import Ad from './components/layout/ad';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
	<Router>
		<Fragment>
			<Navbar />
			<Route exact path="/" component={Landing} />
      <Route exact path="/category/:slug" component={Category} />
      <Route exact path="/ad/:slug" component={Ad} />
			<section>
				<Switch>
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</section>
		</Fragment>
	</Router>
);

export default App;

import React from 'react';
import ReactCreditCardForm from '../ReactCreditCardForm/ReactCreditCardForm';
import UserForm from '../UserForm/UserForm';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from '../../store.js';

const handleSubmit = (user) => {
  // actions.submit('user', somePromise)
  console.log("App.js user", user)
}

const handleCCSubmit = (cc) => {
  // actions.submit('cc', somePromise)
  console.log("App.js cc", cc)
}

const App = () => (
  <Provider store={ store }>
  	<div>
  		<nav className="navbar navbar-default">
		  <div className="container-fluid">

		  	<div className="navbar-header">
			    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			    </button>
			    <a className="navbar-brand" href="#">
			        React Credit Card Form
			    </a>
			</div>
		  </div>
		</nav>
	    <div className="container">
	      <div className="row">
	        <div className="col-md-6 col-md-offset-3">
	          <ReactCreditCardForm handleSubmit={(cc) => handleCCSubmit(cc)}/>
	        </div>
	      </div>
	      <div className="row">
	        <div className="col-md-6 col-md-offset-3">
	          <UserForm handleSubmit={(user) => handleSubmit(user)}/>
	        </div>
	      </div>
	    </div>
	    <hr />
	    <div className="container">
	      <div className="row">
	      	<div className="col-md-6 col-md-offset-3">
	      		<h2>React Credit Card Form has some sweet features. 
	      			<br/><br/>
	      			<div className="small">"Let me tell you 'bout my sweet features." 
	      				<br/>– React Credit Card Form</div>
	      		</h2>
	      		<br/>	      	
	      		<ul>
	      			<li>Sweet feature bro.</li>
	      		</ul>
	      	</div>
	      </div>
	    </div>
	    <hr/>
	    <footer>
		    <div className="text-center">
		      <div className="row">
		        <p className="copyright-text">Copyright © 2015 <a href="http://codehangar.io/" target="_blank">Code Hangar</a>. All Rights Reserved.</p>
		      </div>
		    </div>
		</footer>
  	</div>
  	
  </Provider>
);

module.exports = App;

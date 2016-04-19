import React from 'react';

const App = () => (
  	<form action="">
		<div>
			<label for="name">Name</label>
			<input type="text" />
		</div>
		<div>
			<label for="number">Card Number</label>
			<input type="text" />
		</div>
		<div>
			<label for="expiration-month">Expiration</label>
			<select name="" id="">
				<option value="1">(1) January</option>
				<option value="1">(2) February</option>
				<option value="1">(3) March</option>
			</select>
			<select name="" id="">
				<option value="2016">2016</option>
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
			</select>
		</div>
		<div>
			<button>Submit</button>
		</div>
	</form>
);

module.exports = App;
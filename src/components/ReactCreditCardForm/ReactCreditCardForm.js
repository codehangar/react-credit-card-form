import React from 'react';

class ReactCreditCardForm extends React.Component{

	constructor(props) {
	    super(props);
	    // this.setStat

	    this.state = {
		    name: "",
		    number: "",
		    expMonth: "",
		    expYear: "",
		    cvc: ""
		  }

	}


	handleNumberChange(e) {
		console.log('number change')
	//     // var val = e.target.value;
	//     // this.setState({value: val});
	//     // this.validate(val, this.props.type);
	};

	render (){
		
		return(

		  	<form action="" className="row">
		  		<div className="col-md-12">
		  			<div className="form-group">
						<label for="name">Name</label>
						<input type="text" className="form-control"/>
					</div>
		  		</div>
				
				<div className="col-md-12">
					<div className="form-group">
						<label for="number">Card Number</label>
						<input type="text" className="form-control" onChange={this.handleNumberChange}/>
					</div>
				</div>
				<div className="col-md-6">
					<label for="expiration-month">Expiration</label>
					<div className="row">
						<div className="col-md-6">
							<select name="" id="" className="form-control">
								<option value="1">(1) January</option>
								<option value="1">(2) February</option>
								<option value="1">(3) March</option>
							</select>
						</div>
						<div className="col-md-6">
							<select name="" id="" className="form-control col-md-6">
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label for="name">CVC Code</label>
						<input type="text" className="form-control"/>
					</div>
				</div>
				<div className="col-md-12">
					<button className="btn btn-primary btn-lg pull-right">Submit</button>
				</div>
			</form>

		);
	}
}

module.exports = ReactCreditCardForm;
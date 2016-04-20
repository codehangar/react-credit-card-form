import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';

class ReactCreditCardForm extends React.Component{

	handleNumberChange(e) {
		console.log('number change')
	//     // var val = e.target.value;
	//     // this.setState({value: val});
	//     // this.validate(val, this.props.type);
	};

  handleSubmit(cc) {
    // let { dispatch } = this.props;
    let { handleSubmit } = this.props; //same as var handleSubmit = this.props.handleSubmit;

    console.log("cc", cc)

    handleSubmit(cc);

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

	render (){
		return(
		  	<Form className="row" model="cc" onSubmit={(cc) => this.handleSubmit(cc)}>
	  			<div className="form-group">
			  		<Field model="cc.name" className="col-md-12">
						<label for="name">Name</label>
						<input type="text" className="form-control"/>
					</Field>
	  			</div>

				<div className="col-md-12">
					<div className="form-group">
						<Field model="cc.number">
							<label for="number">Card Number</label>
							<input type="text" className="form-control" onChange={this.handleNumberChange}/>
						</Field>
					</div>
				</div>
				<div className="col-md-6">
					<label for="expiration-month">Expiration</label>
					<div className="row">
						<div className="col-md-6">
							<Field model="cc.expMonth">
								<select name="" id="" className="form-control">
									<option value="1">(1) January</option>
									<option value="2">(2) February</option>
									<option value="3">(3) March</option>
								</select>
							</Field>
						</div>
						<div className="col-md-6">
							<Field model="cc.expYear">
								<select name="" id="" className="form-control col-md-6">
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
									<option value="2020">2020</option>
								</select>
							</Field>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<Field model="cc.cvc">
							<label for="name">CVC Code</label>
							<input type="text" className="form-control"/>
						</Field>
					</div>
				</div>
				<div className="col-md-12">
					<button type="submit" className="btn btn-primary btn-lg pull-right">Submit</button>
				</div>
			</Form>

		);
	}
}

function mapStateToProps(state) {
  return { cc: state.cc };
}

export default connect(mapStateToProps)(ReactCreditCardForm);
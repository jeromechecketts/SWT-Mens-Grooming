import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_API_KEY;

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			values: {
				name: '',
				services: '',
				phone: '',
				email: '',
				message: '',
				date: '',
			},
			successMessage: "Sender's message was sent successfully",
			warningMessage: 'Fill out the form, please!',
			errorMessage: 'Something went wrong. Try again later!',
			alertClass: '',
			responseMessage: '',
			alertTimeout: '',
			delay: 5000,
		};
	}

	submitForm = (e) => {
		e.preventDefault();

		if (document.querySelector('#alert')) {
			document.querySelector('#alert').remove();
		}

		emailjs
			.send(
				EMAILJS_SERVICE_ID, // Use your EmailJS service ID here
				EMAILJS_TEMPLATE_ID, // Use your EmailJS template ID here
				this.state.values,
				EMAILJS_USER_ID // Use your EmailJS user ID here
			)
			.then(
				(response) => {
					if (response.text === 'OK') {
						this.callAlert(this.state.successMessage, 'success');
						this.resetForm();
					} else {
						this.callAlert(this.state.errorMessage, 'error');
					}
				},
				(error) => {
					this.callAlert(this.state.errorMessage, 'error');
				}
			);
	};

	resetForm = () => {
		this.setState({
			values: {
				name: '',
				services: '',
				phone: '',
				email: '',
				message: '',
				date: '',
			}
		});
	}
	
	removeAlert = () => {
		clearTimeout(this.state.alertTimeout);
		this.setState({
			alertTimeout: setTimeout(function () {
				var element = document.querySelector('#alert');
				element.classList.remove('fadeIn');
				element.classList.add('fadeOut');
				setTimeout(function () {
					element.remove();
				}, 900);
			}, this.state.delay),
		});
	};

	callAlert = (message, type) => {
		if (!document.querySelector('#alert')) {
			if (type === 'success') {
				this.setState({ alertClass: 'success' });
			}

			if (type === 'error') {
				this.setState({ alertClass: 'danger' });
			}

			if (type === 'warning') {
				this.setState({ alertClass: 'warning' });
			}

			var alert =
				'<div id="alert" class="animated fadeIn alert alert--shadow alert-' +
				this.state.alertClass +
				'">' +
				message +
				'</div>';

			var element = document.querySelector('#cf-1');

			element.insertAdjacentHTML('beforeend', alert);

			this.removeAlert();
		}
	};

	handleInputChange = (e) =>
		this.setState({
			values: {
				...this.state.values,
				[e.target.name]: e.target.value,
			},
		});

	render() {
		return (
			<form
				method='post'
				onSubmit={this.submitForm}
				id='cf-1'
				className='contact-form'
			>
				<div className='form-group form-group-lg'>
					<p className='input-group gutter-width-sm no-space'>
						<span className='gutter-width'>
							<label
								className='form-label-lg before after mb-0'
								htmlFor='fullName'
							>
								Full Name *
							</label>

							<input
								name='name'
								value={this.state.values.name}
								onChange={this.handleInputChange}
								type='text'
								id='fullName'
								placeholder='Your name here'
								required='required'
							/>
						</span>

						<span className='gutter-width'>
							<label
								className='form-label-lg before after mb-0'
								htmlFor='cf-1-services'
							>
								Choose a service
							</label>

							<select
								name='services'
								htmlFor='cf-1-services'
								id='cf-1-services'
								value={this.state.values.services}
								onChange={this.handleInputChange}
							>
								<option value='haircut'>Haircut</option>
								<option value='shave'>Shave</option>
								<option value='haircut & shave'>
									Haircut & Shave
								</option>
								<option value='beard trim'>Beard Trim</option>
							</select>
						</span>
					</p>
				</div>

				<div className='form-group form-group-lg'>
					<p className='input-group gutter-width-sm no-space'>
						<span className='gutter-width'>
							<label
								className='form-label-lg before after mb-0'
								htmlFor='cf-1-phone'
							>
								Phone number *
							</label>

							<input
								name='phone'
								value={this.state.values.phone}
								onChange={this.handleInputChange}
								type='text'
								id='cf-1-phone'
								placeholder='Your phone here'
								required='required'
							/>
						</span>

						<span className='gutter-width'>
							<label
								className='form-label-lg before after mb-0'
								htmlFor='cf-1-date'
							>
								Choose an appointment date
							</label>
							<input
								name='date'
								value={this.state.values.date}
								onChange={this.handleInputChange}
								type='date'
								id='cf-1-date'
								placeholder='dd/mm/yyyy'
							/>
						</span>
					</p>
				</div>

				<div className='form-group form-group-lg'>
					<label
						className='form-label-lg before after mb-0'
						htmlFor='cf-1-message'
					>
						Message
					</label>

					<textarea
						name='message'
						value={this.state.values.message}
						onChange={this.handleInputChange}
						id='cf-1-message'
						placeholder='Your message here'
					></textarea>
				</div>

				<div className='form-group form-group-lg mb-5'>
					<button
						type='submit'
						className='btn btn-outline-secondary text-uppercase'
					>
						Book Now
					</button>
				</div>
			</form>
		);
	}
}

export default ContactForm;

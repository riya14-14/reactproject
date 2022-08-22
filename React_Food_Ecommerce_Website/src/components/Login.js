import React, { useEffect, useState } from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import logo from "./assets/Food-Logo.jpg";

const Login = () => {
	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	};
	return (
		<>
			<div className="row container-fluid px-0 ">
				<div className="col-sm-6">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
								alt="First slide"
								style={{ height: "700px" }}
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp"
								alt="Second slide"
								style={{ height: "700px" }}
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg"
								alt="Third slide"
								style={{ height: "700px" }}
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="col-sm-6">
					<div className="login-form-1 ">
						<img src={logo} className="logo" alt="Tasty Treat" style={{ height: "8rem" }} />
						<form className="form" onSubmit={handleSubmit}>
							<div className="input-group">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" placeholder="nome@email.com.br" value={formValues.email} onChange={handleChange} />
							</div>
							<p style={{ color: "red" }}>{formErrors.email}</p>
							<div className="input-group">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" placeholder="***********" value={formValues.password} onChange={handleChange} />
							</div>
							<p style={{ color: "red" }}>{formErrors.password}</p>
							<button className="primary">SUBMIT</button>
						</form>
						{/* <button className="secondary" onClick={this.handleClick}>
					Criar uma nova conta
				</button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;

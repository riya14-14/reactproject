import React, { useState, useEffect } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	// useEffect(() => {
	// 	document.body.style.backgroundColor = "#f2e2d3";
	// }, []);

	if (submitted) {
		return (
			<>
				<div className="row">
					<div className="col-sm-12">
						<div className="mt-3 d-flex justify-content-center">
							<p>Thank you!</p>
							<p>We'll be in touch soon.</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit} target="_blank">
			<div className="col-sm-12">
				<div className="contact-form">
					<div className="input-group">
						<input
							type="text"
							placeholder="Your name"
							name="name"
							className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="input-group">
						<textarea
							placeholder="Your message"
							name="message"
							className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
							required
						/>
					</div>
					<div className="primary">
						<button className="primary" type="submit" style={{ background: "#ed4c67" }}>
							Send a message
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;

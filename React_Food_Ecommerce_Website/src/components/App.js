import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import CardsDetail from "./CardsDetail";
import Login from "./Login";
import ContactForm from "./ContactFom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" exact element={<Cards />} />
				<Route path="/cart/:id" element={<CardsDetail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contactus" element={<ContactForm />} />
			</Routes>
		</>
	);
}

export default App;

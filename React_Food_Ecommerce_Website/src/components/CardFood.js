import React from "react";
import Card from "react-bootstrap/Card";
import { DLT, ADD } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const CardFood = ({ data }) => {
	const getdata = useSelector((state) => state.cartreducer.carts);

	const dispatch = useDispatch();

	const dlt = (id) => {
		dispatch(DLT(id));
	};

	const send = (e) => {
		dispatch(ADD(e));
	};

	return (
		<>
			{data.map((element, k) => {
				return (
					<>
						<Card style={{ width: "22rem", border: "none" }} className="mx-2 mt-4 hove">
							<Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
							<Card.Body>
								<Card.Title>{element.rname}</Card.Title>
								<Card.Text>Price : ₹ {element.price}</Card.Text>
								<div className="button_div d-flex justify-content-center">
									{getdata.some((p) => p.id === element.id) ? (
										<button
											className="btn btn-danger text-light col-lg-12"
											onClick={() => {
												dlt(element.id);
											}}
										>
											Remove from cart
										</button>
									) : (
										<button
											disabled={element.inStock}
											className="btn text-light col-lg-12"
											onClick={() => {
												send(element);
											}}
											style={{ background: "#ed4c67" }}
										>
											{element.inStock ? "Out of Stock" : "Add to Cart"}
										</button>
									)}
								</div>
							</Card.Body>
						</Card>
					</>
				);
			})}
		</>
	);
};

export default CardFood;

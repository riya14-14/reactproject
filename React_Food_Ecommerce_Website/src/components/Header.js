import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import "./style.css";
import Fade from "@mui/material/Fade";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {
	const getdata = useSelector((state) => state.cartreducer.carts);
	console.log(getdata);
	const [anchorEl, setAnchorEl] = useState(null);
	const [price, setPrice] = useState(0);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const dispatch = useDispatch();
	const handleClose = () => {
		setAnchorEl(null);
	};

	const history = useNavigate();

	const dlt = (id) => {
		dispatch(DLT(id));
	};

	const total = () => {
		let price = 0;
		getdata.map((ele) => {
			price = ele.price * ele.qnty + price;
			return price;
		});
		setPrice(price);
	};

	const ready = () => {
		history("/login");
	};

	useEffect(() => {
		total();
	}, [total]);

	return (
		<>
			<Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
				<Container>
					<NavLink to="/" className="text-decoration-none text-light mx-3" href="#home" style={{ fontSize: 25 }}>
						Tasty Treat
					</NavLink>
					<Nav className="me-auto">
						<NavLink to="/" className="text-decoration-none text-light mx-3" style={{ fontSize: 15 }}>
							Home
						</NavLink>
						<NavLink to="/cart" className="text-decoration-none text-light" style={{ fontSize: 15 }}>
							Contacts
						</NavLink>
					</Nav>

					<Badge
						badgeContent={getdata.length}
						color="primary"
						id="fade-button"
						aria-controls={open ? "fade-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
					</Badge>
					<div className="mx-3">
						<PersonOutlineIcon style={{ color: "white", fontSize: 28 }} onClick={() => ready()}></PersonOutlineIcon>
					</div>
				</Container>
				<Menu
					id="fade-menu"
					MenuListProps={{
						"aria-labelledby": "fade-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					{getdata.length ? (
						<div className="card_details" style={{ width: "24rem", padding: 10 }}>
							<Table>
								<thead>
									<tr>
										<th>Photo</th>
										<th>Restaurant Name</th>
									</tr>
								</thead>
								<tbody>
									{getdata.map((e) => {
										return (
											<>
												<tr>
													<td>
														<NavLink to={`/cart/${e.id}`} onClick={handleClose}>
															<img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
														</NavLink>
													</td>
													<td>
														<p>{e.rname}</p>
														<p>Price : ₹{e.price}</p>
														<p>Quantity : {e.qnty}</p>
														<p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
															<i className="fas fa-trash smalltrash"></i>
														</p>
													</td>

													<td className="mt-5" style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
														<i className="fas fa-trash largetrash"></i>
													</td>
												</tr>
											</>
										);
									})}
								</tbody>
							</Table>

							<div className="row mx-2">
								<div className="col-sm-6">
									<p className="text-center">Total :₹ {price}</p>
								</div>

								<div className="col-sm-6">
									<button className="btn text-light col-lg-10" style={{ background: "#ed4c67" }}>
										Checkout
									</button>
								</div>
							</div>
						</div>
					) : (
						<div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
							<i className="fas fa-close smallclose" onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
							<p style={{ fontSize: 22 }}>Your carts is empty</p>
							<img src="./cart.gif" alt="" className="emptycart_img" style={{ width: "5rem", padding: 10 }} />
						</div>
					)}
				</Menu>
			</Navbar>
		</>
	);
};

export default Header;
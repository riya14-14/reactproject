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
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openNav = () => {
    setNavbarOpen((prev) => !prev);
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
      <div className="position-relative">
        <nav className="navbar navbar-expand-lg border-bottom bg-white sticky-top shadow-sm navbar-light" id="header">
          <div className="container-fluid">
            <div className="d-flex">
              <a
                href="/"
                className="navbar-brand "
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  paddingLeft: "40px",
                }}
              >
                Go<span className="head"> || Food</span>
              </a>
            </div>
            <div className="top mt-4">
              <ul open={open} className={`navbar-nav ${navbarOpen ? " showMenu" : ""}`} id="navbar">
                <li className="nav-item active ">
                  <a className="nav-link " href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Contacts
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/items">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    AboutUs
                  </a>
                </li>
              </ul>
            </div>

            <div className="icon-header">
              <PersonOutlineIcon className="border" style={{ fontSize: 28, cursor: "pointer" }} onClick={() => ready()}></PersonOutlineIcon>
              <FavoriteBorderIcon
                className="border"
                style={{
                  color: "red",
                  fontSize: 28,
                  cursor: "pointer",
                  marginLeft: "1rem",
                }}
              ></FavoriteBorderIcon>
              <Badge
                badgeContent={getdata.length}
                color="primary"
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ShoppingCartOutlinedIcon
                  className="border"
                  style={{
                    fontSize: 28,
                    cursor: "pointer",
                    marginLeft: "1rem",
                  }}
                ></ShoppingCartOutlinedIcon>
              </Badge>
              {/* <div className="mobile">
              <i className="fa-solid fa-bars" open={open} onClick={openNav}>{navbarOpen ? "" : ""}</i>
            </div> */}
            </div>
          </div>

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
        </nav>
      </div>
    </>
  );
};

export default Header;

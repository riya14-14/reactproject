import React, { useEffect, useState } from "react";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../redux/actions/action";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Model from "./Model";
import { DLT, REMOVE } from "../redux/actions/action";
import CardFood from "./CardFood";
import Set from "./Set";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();
  // const setText = "Items added to cart";
  // const [showModal, setShowModal] = useState(true);
  // const handleClose = () => {
  // 	setShowModal(false);
  // };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const [modalOpen, setModalOpen] = useState(false);

  const [copydata, setCopyData] = useState([]);

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();
    if (getchangedata == "") {
      setCopyData(data);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyData(Cardsdata);
    }, 3000);
  }, []);
  return (
    <div className="container-fluid mx-0 px-0 py-0">
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
          <img className="d-block w-100" src="https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg" alt="Third slide" style={{ height: "700px" }} />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="row mt-2">
        <Form className="d-flex justify-content-center align-items-center mt-3">
          <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
            <Form.Control type="text" onChange={(e) => chanegData(e.target.value)} placeholder="Search Restaurant" />
          </Form.Group>
        </Form>

        <div className="row d-flex justify-content-center align-items-center mb-4">
          <>
            {copydata && copydata.length ? <CardFood data={copydata} /> : <Set sdata={data} />}
            {modalOpen && <Model setOpenModal={setModalOpen} />}
          </>
        </div>
      </div>
    </div>
  );
};

export default Cards;

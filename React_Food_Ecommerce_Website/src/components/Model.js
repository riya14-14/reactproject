import React, { Component } from "react";
import "./style.css";

class Model extends Component {
	render() {
		let modalstyle = {
			display: "block",

			// backgroundColor: "rgba(0,0,0,0.8)",
		};
		return (
			<div className="modal" style={modalstyle}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<p>item added to cart</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Model;

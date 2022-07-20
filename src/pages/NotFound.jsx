import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const NotFound = () => {
	return (
		<div className="hero">
			<div className="text-center hero-content">
				<div className="max-w-lg">
					<h1 className="text-8xl font-bold mb-8">OOPS</h1>
					<p className="text-5xl mb-8">NotFound</p>
					<Link to="/" className="btn btn-primary btn-lg">
						<AiFillHome className="mr-2 mx-2" /> Back to home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;

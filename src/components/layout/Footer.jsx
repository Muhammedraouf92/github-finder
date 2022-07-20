import React from "react";
import { FaSlackHash } from "react-icons/fa";

const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
			<div className="container mx-auto">
				<FaSlackHash className="inline text-3xl" />
				<p>Copyright &copy; {footerYear} </p>
			</div>
		</footer>
	);
};

export default Footer;

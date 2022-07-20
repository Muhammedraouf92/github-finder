import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import User from "./pages/User";
function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<div className="flex flex-col justify-between h-screen">
					<Router>
						<Navbar />
						<main className="container mx-auto px-3 pb-12">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/user/:login" element={<User />} />
								<Route path="/notfound" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</Router>
				</div>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductPage />} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}

export default App;

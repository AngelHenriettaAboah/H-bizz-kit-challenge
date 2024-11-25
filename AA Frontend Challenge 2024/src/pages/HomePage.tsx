// HomePage.tsx
import { useState } from 'react';
import { productList } from '../feed/sample';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

interface Product {
	id: number;
	brand: string;
	name: string;
	description: string;
	image: {
		sm: string;
		lg: string;
	};
	price: number;
	specifications: {
		name: string;
		value: string;
	}[];
}

const HomePage = () => {
	const [products, setProducts] = useState<Product[]>(productList);
	const [sortOption, setSortOption] = useState('name');

	const handleSort = (option: string) => {
		setSortOption(option);
		const sortedProducts = [...products].sort((a, b) => {
			if (option === 'priceLow') return a.price - b.price;
			if (option === 'priceHigh') return b.price - a.price;
			return a.name.localeCompare(b.name);
		});
		setProducts(sortedProducts);
	};

	return (
		<div className="homepage-container">
			<h1 style={{ marginBottom: '24px' }}>Toys</h1>

			<div className="header-row">
				<span style={{ fontSize: '16px', color: '#555' }}>{products.length} products</span>

				<select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
					<option value="name">Sort</option>
					<option value="priceLow">Sort by Lowest Price</option>
					<option value="priceHigh">Sort by Highest Price</option>
				</select>
			</div>

			<div className="product-grid">
				{products.slice(0, 10).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default HomePage;

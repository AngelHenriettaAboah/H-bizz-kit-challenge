import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductListProps {
	products: Product[];
	searchQuery: string;
}

const ProductList = ({ products, searchQuery }: ProductListProps) => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: isSmallScreen ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
				gap: '16px',
				padding: '16px',
				boxSizing: 'border-box',
			}}
		>
			{filteredProducts.length > 0 ? (
				filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
			) : (
				<p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>No products found.</p>
			)}
		</div>
	);
};

export default ProductList;

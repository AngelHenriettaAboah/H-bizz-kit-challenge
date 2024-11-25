import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
	product: Product;
	style?: React.CSSProperties;
}

const ProductCard = ({ product, style }: ProductCardProps) => {
	return (
		<Link
			to={`/product/${product.id}`}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				border: '1px solid #ddd',
				borderRadius: '8px',
				textDecoration: 'none',
				color: 'black',
				backgroundColor: 'rgba(0, 28, 36, 0.04)',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				overflow: 'hidden',
				transition: 'transform 0.2s ease-in-out',
				height: '100%',
				...style,
			}}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.05)';
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
			}}
		>
			<div
				style={{
					width: '100%',
					height: '200px',
					overflow: 'hidden',
				}}
			>
				<img
					src={product.image.sm}
					alt={product.name}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</div>

			<div
				style={{
					padding: '16px ',
					width: '100%',
					textAlign: 'left',
					marginLeft: '30px',
				}}
			>
				<h2
					style={{
						fontSize: '12px',
						fontWeight: '600',
						margin: '5px 0',
					}}
				>
					{product.brand}
				</h2>

				<p style={{ fontSize: '12px', margin: '2px 0', color: '#666' }}>{product.name}</p>

				<p
					style={{
						fontSize: '14px',
						fontWeight: 'bold',
						color: '#333',
					}}
				>
					€{product.price.toFixed(2)}
				</p>
			</div>
		</Link>
	);
};

export default ProductCard;

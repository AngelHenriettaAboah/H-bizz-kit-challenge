import { useParams, useNavigate } from 'react-router-dom';
import { productList } from '../feed/sample';
import './ProductPage.css';

const ProductPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const product = productList.find((p) => p.id === parseInt(id || '', 10));

	if (!product) {
		return <p className="error-message">Product not found</p>;
	}

	const handleAddToBasket = () => {
		console.log(`Product added to basket: ${product.id}`);
	};

	return (
		<div className="product-page-container">
			<button onClick={() => navigate('/')} className="back-button">
				<span className="back-arrow">&lt;</span> Back
			</button>

			<div className="product-details">
				<div className="product-image">
					<img src={product.image.lg} alt={product.name} className="product-img" />
				</div>

				<div className="product-info">
					<h1 className="product-brand">{product.brand}</h1>
					<h2 className="product-name">{product.name}</h2>
					<p className="product-price">€{product.price.toFixed(2)}</p>

					<button onClick={handleAddToBasket} className="add-to-basket-btn">
						Add to basket
					</button>

					<div className="product-description">
						<h3>Description</h3>
						<p>
							This item has been made of wood sourced from sustainably managed forests that do not
							contribute to deforestation.
						</p>
					</div>

					<div className="product-specifications">
						<h3>Specifications</h3>
						<table>
							<tbody>
								<tr>
									<td>Name:</td>
									<td>{product.name}</td>
								</tr>
								<tr>
									<td>Material:</td>
									<td>Wood (Non-toxic paint)</td>
								</tr>
								<tr>
									<td>Length:</td>
									<td>68.8 cm</td>
								</tr>
								<tr>
									<td>Height:</td>
									<td>74.5 cm</td>
								</tr>
								<tr>
									<td>Weight:</td>
									<td>11.86 cm</td>
								</tr>
								<tr>
									<td>EAN:</td>
									<td>78809885030911</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

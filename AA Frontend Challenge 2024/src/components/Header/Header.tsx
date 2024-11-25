import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logos/hesehus.svg';
import basketIcon from '../../assets/icons/basket.svg';
import searchIcon from '../../assets/icons/search.svg';

export const Header: React.FunctionComponent = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleSearch = () => {
		console.log('Searching for:', searchQuery);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="header-left">
				<button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
					☰<span className="menu-label">Menu</span>
				</button>

				<img src={logo} alt="Logo" className="header-logo" />
			</div>

			<div className="search-bar">
				<input
					type="text"
					placeholder="Search products..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<button onClick={handleSearch} className="search-button" aria-label="Search">
					<img src={searchIcon} alt="Search" />
				</button>
			</div>

			<div className="header-right">
				<div className="mobile-search">
					<img src={searchIcon} alt="Search" className="icon" />
					<span className="label">Search</span>
				</div>

				<div className="cart-wrapper">
					<img src={basketIcon} alt="Cart" className="icon" />
					<span className="label">Cart</span>
				</div>
			</div>
		</header>
	);
};

export default Header;

const Footer = () => {
	return (
		<footer
			style={{
				backgroundColor: 'rgba(255, 255, 255, 1)',
				color: 'rgba(0, 0, 0, 1)',
				padding: '16px',
				textAlign: 'center',
				fontSize: '0.9rem',
				width: '100%',
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<p style={{ margin: '0 8px' }}> Coyright &copy; 2022 Hesehus. All rights reserved.</p>
			<p style={{ margin: '0 8px' }}>
				E-mail:{' '}
				<a href="mailto:salg@hesehus.dk" style={{ color: 'rgba(0, 0, 0, 1)' }}>
					salg@hesehus.dk
				</a>
			</p>
		</footer>
	);
};

export default Footer;

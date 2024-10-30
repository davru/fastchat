import settingsIcon from '../assets/icons/settings.svg';
import logo from '../assets/logo.svg';
import './styles/Navbar.css';

import { useState } from 'react';
import useTouchedOutside from '../hooks/useTouchedOutside';
import { isPWA } from '../utils/pwa';

const Navbar = ({ clickInstall }) => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	const ref = useTouchedOutside((e) => {
		const isSettings =
			e.target?.classList?.contains('navbar__settings') ||
			e.target?.classList?.contains('navbar__settings__icon');
		if (!isSettings) setMenu(false);
	});

	return (
		<nav className="navbar">
			<img className="navbar__logo" src={logo} alt="WhatsApp fast chat" />

			{isPWA() && (
				<div className="navbar__settings" onClick={toggleMenu}>
					<img className="navbar__settings__icon" src={settingsIcon} />
				</div>
			)}

			{(!isPWA() || menu) && (
				<div
					ref={ref}
					className={`navbar__list ${
						isPWA() ? 'navbar__list--dropdown' : null
					}`}
				>
					<a className="navbar__item navbar__item--active navbar__item--no-mobile">
						The app
					</a>
					<a className="navbar__item" href="mailto:contact@davru.dev">
						Report issue
					</a>
					{!isPWA() && (
						<a className="navbar__item" onClick={clickInstall}>
							Install app
						</a>
					)}
					{isPWA() && (
						<a
							className="navbar__item"
							href="https://www.paypal.com/donate?hosted_button_id=YFXTYPKAALV2E"
							target="_blank"
						>
							Contribute
						</a>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;

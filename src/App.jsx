import { useMatomo } from '@datapunt/matomo-tracker-react';
import PWAInstall from '@khmyznikov/pwa-install/react-legacy';
import { useEffect } from 'react';
import { isDesktop } from 'react-device-detect';
import logo from './assets/logo.svg';
import ConnectivityAlert from './components/ConnectivityAlert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PhoneForm from './components/PhoneForm';
import { isPWA } from './services/pwa.service';

import { useRef } from 'react';
import './App.css';

function App() {
	const { trackPageView, trackEvent } = useMatomo();
	const pwaInstallRef = useRef(null);

	const openPrompt = () => {
		trackEvent({ category: 'pwa', action: 'wants-to-install' });
		pwaInstallRef.current?.showDialog(true);
	};

	useEffect(() => {
		trackPageView();
		window.addEventListener('appinstalled', () => {
			trackEvent({ category: 'pwa', action: 'install' });
		});
	}, []);

	return (
		<>
			{isPWA() && <ConnectivityAlert />}
			<Navbar clickInstall={openPrompt} />
			<div className="app-container">
				<h2>
					Simple. Secure. Fast.
					<br />
					Start a whatsapp chat!
				</h2>

				{!isPWA() && (
					<p>
						An easy and fast solution to avoid needing to add contacts before
						writing to them through WhatsApp.
						{isDesktop ? (
							<>
								<br /> <br />
								It is preferable to visit this website through a{' '}
								<span style={{ color: '#25a914' }}>mobile device</span>, as you
								will be able to download the tool as an app.
							</>
						) : null}
						<br /> <br />
						You can now start any chat using the form below, so you will keep
						your contact list as clean as a whistle. Keep your phone secure!
						When clicking on <b>"Launch chat"</b>, you will be redirected to an
						official WhatsApp link.
					</p>
				)}

				<PhoneForm />
			</div>
			<Footer />
			{!isPWA() && (
				<PWAInstall
					ref={pwaInstallRef}
					name={'FastChat'}
					icon={logo}
					description="An easy and fast solution to avoid needing to add contacts before writing to them through WhatsApp."
				/>
			)}
		</>
	);
}

export default App;

import PWAInstall from '@khmyznikov/pwa-install/react-legacy';
import { useEffect } from 'react';
import logo from './assets/logo.svg';
import ConnectivityAlert from './components/ConnectivityAlert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PhoneForm from './components/PhoneForm';
import { isPWA } from './utils/pwa';

import { useAptabase } from '@aptabase/react';
import { useRef } from 'react';
import './App.css';

function App() {
	const { trackEvent } = useAptabase();
	const pwaInstallRef = useRef(null);

	const openPrompt = () => {
		trackEvent('wants-to-install');
		pwaInstallRef.current?.showDialog(true);
	};

	useEffect(() => {
		trackEvent('visit');
		window.addEventListener('appinstalled', () => {
			trackEvent('install');
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
					Start a WhatsApp chat!
				</h2>

				{!isPWA() && (
					<p>
						Need to send a quick message on WhatsApp without the hassle of
						adding a new contact? Our tool lets you start a chat immediately,
						keeping your contact list clutter-free and organized.
						<br /> <br />
						Simply enter the phone number below and hit <b>"Launch Chat"</b> –
						you’ll be redirected to an official WhatsApp link in seconds. It’s
						fast, secure, and keeps your phonebook neat. Enjoy a cleaner contact
						list and a seamless messaging experience!
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
					isDialogHidden={true}
					description="An easy and fast solution to avoid needing to add contacts before writing to them through WhatsApp."
				/>
			)}
		</>
	);
}

export default App;

import { AptabaseProvider } from '@aptabase/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AptabaseProvider appKey={import.meta.env.VITE_APTABASE_KEY}>
			<App />
		</AptabaseProvider>
	</StrictMode>,
);

import './styles/ConnectivityAlert.css';
import errorIcon from '../assets/icons/error.svg';
import { useEffect, useState } from 'react';

const ConnectivityAlert = () => {
  const [connectivity, setConnectivity] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setConnectivity(true));
    window.addEventListener('offline', () => setConnectivity(false));
  }, []);

  return (
    !connectivity && (
      <div className="connectivity-alert">
        <img className="connectivity-alert__icon" src={errorIcon} />
        <p className="connectivity-alert__text">
          You are having connection issues, please ensure you are connected to a
          network before using the app.
        </p>
      </div>
    )
  );
};

export default ConnectivityAlert;

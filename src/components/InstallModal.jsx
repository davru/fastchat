import './styles/InstallModal.css';
import iosShare from '../assets/icons/ios-share.png';
import androidShare from '../assets/icons/android-share.png';

import { isAndroid, isIOS } from 'react-device-detect';

const InstallModal = ({ state, closeModal }) => {
  return (
    state && (
      <div className="modal-layout">
        <div className="modal-container">
          <div className="modal-header">
            <span className="modal-header__cross" onClick={closeModal}></span>
          </div>
          <div className="modal-body">
            {isIOS && (
              <>
                You can install this app on an iOS device using Safari, by
                pressing <img src={iosShare} height="20px" /> then "Add to home
                screen"
              </>
            )}
            {isAndroid && (
              <>
                You can install this app on an Android, by pressing{' '}
                <img src={androidShare} height="15px" /> then "Add to home
                screen"
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default InstallModal;

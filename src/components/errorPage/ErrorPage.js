import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Style.scss';

const ErrorPage = () => {
  return (
    <div className="error_page-container">
      {/* <FontAwesomeIcon icon={regular("message-exclamation")} /> */}
      <div className="err_page-items">
        <FontAwesomeIcon icon={faExclamationCircle} style={{ width: '100%', height: '100%' }} />
        <Link to={'/'} className="error-btn">
          <button className="btn btn-primary" style={{ width: '100%', height: '100%' }}>
            Back To Login Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

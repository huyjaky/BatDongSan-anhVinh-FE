import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loginpage from '../Loginpage';

const NotComplete = () => {
  const [timeHis, setTimeHis] = useState(3);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeHis(timeHis - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeHis]);

  useEffect(() => {
    if (timeHis === 0) {
      setRedirect(true);
    }
  }, [timeHis]);

  const handleOnClick = async (event) => {
    setRedirect(true);
  };

  if (redirect) {
    return <Loginpage />;
  }

  return (
    <div>
      <div
        style={{
          fontSize: '100px',
          width: '100%',
          color: 'grey',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      <div style={{ color: 'black', textAlign: 'center', margin: '20px', fontSize: '30px' }}>
        User not exist! <br />
        Redirect login page in: {timeHis}
      </div>
      <button onClick={handleOnClick} className="btn btn-primary" style={{ width: '100%' }}>
        Back now!
      </button>
    </div>
  );
};

export default NotComplete;

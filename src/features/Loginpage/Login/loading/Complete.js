import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setLogIn } from '../../../../store/actions/Log';

const Complete = () => {
  const [redirect_, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setLogIn());
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
        <FontAwesomeIcon icon={faCheckCircle} />

      </div>
      <div style={{ color: 'black', textAlign: 'center', margin: '20px', fontSize: '30px' }}>
        Success!
      </div>
      <Link to='/homepage'>
        <button onClick={handleOnClick} type='button' data-bs-dismiss="modal" className="btn btn-primary" style={{ width: '100%' }}>
          Homepage
        </button>
      </Link>
    </div>
  );
};

export default Complete;

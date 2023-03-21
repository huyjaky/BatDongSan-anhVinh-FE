import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setLogIn } from '../../../../store/actions/Log';
import { getIsLogIn } from '../../../../store/Selector';

const Complete = () => {
  const dispatch = useDispatch();

  const setLog = () => {
    sessionStorage.setItem('Log', true);
    dispatch(setLogIn(true));
  }

  useEffect(() => {
    setLog();
  }, [useSelector(getIsLogIn)]);

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
        <button  data-bs-dismiss="modal" className="btn btn-primary" style={{ width: '100%' }}>
          Homepage
        </button>
      </Link>
    </div>
  );
};

export default Complete;

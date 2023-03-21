import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Complete = () => {
  return (
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
  );
};

export default Complete;

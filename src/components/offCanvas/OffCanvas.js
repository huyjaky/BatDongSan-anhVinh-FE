import { useSelector } from 'react-redux';
import { getUser } from '../../store/Selector';

const OffCanvas = () => {
  const user = useSelector(getUser);

  return <div>{sessionStorage.getItem('TaiKhoan')}</div>;
};

export default OffCanvas;

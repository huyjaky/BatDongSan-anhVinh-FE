import { useSelector } from 'react-redux';
import { getKhachThue } from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachThue = (props) => {
  const khachthue = useSelector(getKhachThue);
  return <KhachCell arrKhach={khachthue.khachthue} arrHinh={khachthue.imgKhachThue} />;
};

export default KhachThue;

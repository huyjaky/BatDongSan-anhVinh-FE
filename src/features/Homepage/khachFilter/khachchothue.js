import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import { getKhachChoThue } from '../../../store/Selector';

const KhachChoThue = (props) => {
  const khachchothue = useSelector(getKhachChoThue);
  return <KhachCell arrKhach={khachchothue.khachchothue} arrHinh={khachchothue.imgKhachChoThue} />;
};

export default KhachChoThue;

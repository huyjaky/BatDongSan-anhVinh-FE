import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import { getKhachMua } from '../../../store/Selector';

const KhachMua = (props) => {
  const khachmua = useSelector(getKhachMua);
  return <KhachCell arrKhach={khachmua.khachmua} arrHinh={khachmua.imgKhachMua} />;
};

export default KhachMua;

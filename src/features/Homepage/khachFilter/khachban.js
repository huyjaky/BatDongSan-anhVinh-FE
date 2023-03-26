import { useSelector } from 'react-redux';
import { getKhachBan } from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachBan = () => {
  const khachban = useSelector(getKhachBan);

  return <KhachCell arrKhach={khachban.khachban} arrHinh={khachban.imgKhachBan} />;
};

export default KhachBan;

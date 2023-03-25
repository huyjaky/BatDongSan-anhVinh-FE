import { useSelector } from 'react-redux';
import { getKhachBan } from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachBan = () => {
  const khachban = useSelector(getKhachBan);

  return (
    <div className="showKhach">
      {khachban.imgKhachBan &&
        khachban.imgKhachBan.map((item, index) => {
          return (
            <KhachCell key={index} arrHinh={item}/>
          )
        })
      }
    </div>
  );
};

export default KhachBan;

import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import { getKhachMua } from '../../../store/Selector';

const KhachMua = (props) => {
  const khachmua = useSelector(getKhachMua);
  return (
    <div className="showKhach">
      {khachmua.imgKhachMua &&
        khachmua.imgKhachMua.map((item, index) => {
          return (
            <KhachCell key={index} arrHinh={item}/>
          )
        })
      }
    </div>
  );
};

export default KhachMua;

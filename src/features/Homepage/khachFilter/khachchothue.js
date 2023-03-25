import KhachCell from '../khachCell/KhachCell';
import { useSelector } from 'react-redux';
import { getKhachChoThue } from '../../../store/Selector';

const KhachChoThue = (props) => {
  const khachchothue = useSelector(getKhachChoThue);
  return (
    <div className="showKhach">
      {khachchothue.imgKhachChoThue &&
        khachchothue.imgKhachChoThue.map((item, index) => {
          return (
            <KhachCell key={index} arrHinh={item}/>
          )
        })
      }
    </div>
  );
};

export default KhachChoThue;

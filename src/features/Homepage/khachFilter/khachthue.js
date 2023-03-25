import { useSelector } from 'react-redux';
import { getKhachThue } from '../../../store/Selector';
import KhachCell from '../khachCell/KhachCell';

const KhachThue = (props) => {
  const khachthue = useSelector(getKhachThue);
  return (
    <div className="showKhach">
      {khachthue.imgKhachThue &&
        khachthue.imgKhachThue.map((item, index) => {
          return (
            <KhachCell key={index} arrHinh={item}/>
          )
        })
      }
    </div>
  )
}


export default KhachThue;
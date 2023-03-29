import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getKhachBan, getKhachChoThue, getKhachMua, getKhachThue } from '../../../store/Selector';
import './Style.scss';

const Contents = () => {
  const khachthue = useSelector(getKhachThue);
  const khachchothue = useSelector(getKhachChoThue);
  const khachban = useSelector(getKhachBan);
  const khachmua = useSelector(getKhachMua);

  useEffect(()=>{}, [khachthue, khachchothue, khachban, khachmua]);

  return (
    <div className="contents-container">
      {/* contents */}
    
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
      </div>
    </div>
  )
}

export default Contents;
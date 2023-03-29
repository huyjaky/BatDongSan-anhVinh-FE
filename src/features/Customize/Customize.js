import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFetch, setKhachBan, setKhachChoThue, setKhachMua, setKhachThue } from '../../store/actions/Log';
import { getFetch, getKhachBan, getKhachChoThue, getKhachMua, getKhachThue } from '../../store/Selector';
import Contents from './contents/Contents';
import './Style.scss';

const Customize = () => {
  const khachthue = useSelector(getKhachThue);
  const khachchothue = useSelector(getKhachChoThue);
  const khachban = useSelector(getKhachBan);
  const khachmua = useSelector(getKhachMua);
  const dispatch = useDispatch();
  const isFetch = useSelector(getFetch);

  useEffect(() => {
    fetchData();
  }, [isFetch])

  const fetchData = async () => {
    if (isFetch == false) {
      const allkhach = await axios.get('http://localhost:4000/api/getallkhach');
      await dispatch(setKhachThue(allkhach.data.khachthue));
      await dispatch(setKhachMua(allkhach.data.khachmua));
      await dispatch(setKhachChoThue(allkhach.data.khachchothue));
      await dispatch(setKhachBan(allkhach.data.khachban));
      dispatch(setFetch(true));
      console.log(allkhach, 'customize');

    }
  }

  return (
    <div className="customize-container">
      <div className="customize-items_contents">
        <Contents />
      </div>
      <div className="customize-items_preview">
        preview
      </div>
    </div>
  )
};

export default Customize;

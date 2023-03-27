import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSoPhongNgu, setSoPhongVeSinh, setTheLoai } from '../../../../../store/actions/Log';
import { getSoPhongNgu, getSoPhongVeSinh } from '../../../../../store/Selector';

const Room = () => {
  const SoPhongVeSinh = useSelector(getSoPhongVeSinh);
  const SoPhongNgu = useSelector(getSoPhongNgu);
  const dispatch = useDispatch();

  useEffect(() => {}, [SoPhongNgu, SoPhongVeSinh]);

  return (
    <div className="Room-filter">
      <div className="Room-filer-container">
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="So Phong Ngu"
            aria-label="Username"
            value={SoPhongNgu}
            onChange={(event) => dispatch(setSoPhongNgu(event.target.value))}
          />
          <span className="input-group-text">@</span>
          <input
            type="number"
            className="form-control"
            placeholder="So Phong Ve Sinh"
            aria-label="Server"
            value={SoPhongVeSinh}
            onChangeCapture={(event) => dispatch(setSoPhongVeSinh(event.target.value))}
          />

          <select
            className="form-select"
            aria-label="Default select example"
            onClick={(event) => dispatch(setTheLoai(event.target.value))}
            defaultValue="Can Ho"
          >
            <option value="Can Ho">Can Ho</option>
            <option value="Nguyen Can">Nguyen Can</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Room;

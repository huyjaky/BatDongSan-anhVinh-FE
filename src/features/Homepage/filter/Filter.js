import { useDispatch } from 'react-redux';
import { setDonVi, setSoPhongNgu, setSoPhongVeSinh, setTenPhuong, setTenQuan } from '../../../store/actions/Log';
import FilterComponent from './filterComponent/FilterComponent';

const Filter = () => {
  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    dispatch(setSoPhongNgu(''));
    dispatch(setSoPhongVeSinh(''));
    dispatch(setTenQuan('Quan'));
    dispatch(setTenPhuong('Phuong'));
    dispatch(setDonVi('Ty'));
  };

  return (
    <div
      className="modal fade"
      id="modalFilter"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Filter
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* ... */}
            <FilterComponent />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleOnClick}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

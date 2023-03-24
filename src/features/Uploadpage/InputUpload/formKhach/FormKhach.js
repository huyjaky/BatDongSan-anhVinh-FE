import Phuong from '../phuong_quan/phuong/Phuong';
import Quan from '../phuong_quan/quan/Quan';
import PropTypes from 'prop-types';
import './Style.scss';

const FormKhach = (props) => {

  const {Donvi} = props;

  return (
    <form className="form_khach" method='get' action='/upoad/'>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Ten Khach" aria-label="Username" />
        <span className="input-group-text">@</span>
        <input type="number" className="form-control" name='Sdt' placeholder="Sdt" aria-label="Server" required />
      </div>

      <div className="input-group mb-3 diachi">
        <input required name='TenDuong' type="text" className="form-control" placeholder="Ten Duong" aria-label="Username" />
        <div className="danhsach_quanhuyen">
          <Quan />
          <Phuong />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          Link Face
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            Link:
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="form-text text-light">Tai Chinh</div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">VND</span>
        <input type="number" name='TaiChinh' className="form-control" required aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-text">{Donvi}</span>
      </div>

      <div className="input-group">
        <span className="input-group-text">Nhu Cau Chi Tiet</span>
        <textarea className="form-control" required name='NhuCau'  aria-label="With textarea"></textarea>
      </div>

      <div className='submit_form' style={{marginTop: '20px'}}>
        <button className='btn btn-primary' style={{width: '100%'}}>Submit</button>
      </div>
    </form>
  );
};

export default FormKhach;


FormKhach.propTypes = {
  Donvi: PropTypes.string
}

import Phuong from '../../../../components/phuong_quan/phuong/Phuong';
import Quan from '../../../../components/phuong_quan/quan/Quan';
import './Style.scss';

const FormKhachMua = () => {
  return (
    <div className="form_khachthue">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Ten Khach" aria-label="Username" />
        <span className="input-group-text">@</span>
        <input type="tel" className="form-control" placeholder="Sdt" aria-label="Server" />
      </div>

      <div className="input-group mb-3 diachi">
        <input type="text" className="form-control" placeholder="Ten Duong" aria-label="Username" />
        <div className="danhsach_quanhuyen">
          <Quan />
          <Phuong />
        </div>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Gmail Khach"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @gmail.com
        </span>
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
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-text">Ty</span>
      </div>

      <div className="input-group">
        <span className="input-group-text">Nhu Cau Chi Tiet</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
};

export default FormKhachMua;

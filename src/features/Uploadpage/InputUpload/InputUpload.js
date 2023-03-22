import FormKhachThue from './formKhachThue/FormKhachThue';
import './Style.scss';

const InputUpload = () => {
  return (
    <div style={{ width: '100%' }} className=" dropdown_inp">
      <div className="btn-group" style={{ width: '60%', marginBottom: '30px' }}>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Action
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          style={{ width: '100%', boxShadow: '0px 0px 20px rgba(0, 255,255, 0.6)' }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
      <FormKhachThue />
    </div>
  );
};

export default InputUpload;

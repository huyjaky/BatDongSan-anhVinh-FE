import { useEffect, useState } from 'react';
import logo from '../../assets/img/icons8-vue-js-600.png';
import axios from 'axios';
import './Style.scss';
import Loginpage from './Loginpage/Loginpage';

const Login = () => {
  const [nhanvien, setNhanvien] = useState();
  const [TenNhanVien, setTenNhanVien] = useState('');
  const [MatKhau, setMatKhau] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const check = async () => {
    let data = await axios.post('http://localhost:4000/api/login', {
      TenNhanVien: 'jajajajau2',
      MatKhau: '$2b$10$w58B4yAdtVqC22UWuPZ3gOxnaJxk7Mhu.k6CDhT6CFN'
    });
    console.log(data);
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="homepage-container">
      <img src={logo} />
      <div className='homepage-item_btn'>
        <button
          type="button"
          className="btn btn-primary homepage-item_btn_styles"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Sign In
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: 'black'}}>
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            {/* add component */}
            <div className="modal-body">
              <Loginpage />
            </div>

            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

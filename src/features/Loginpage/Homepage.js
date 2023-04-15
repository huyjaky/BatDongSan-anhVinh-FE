import logo from '../../assets/img/icons8-vue-js-600.png';
import Loginpage from './Login/Loginpage';
import './Style.scss';

const Login = () => {
  return (
    <div className="homepage-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>
        <img src={logo} style={{ scale: '0.7', padding: '0', width: '500px', height: '500px' }} />
      </div>
      <hr />
      <div className="homepage-item_btn">
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
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'black' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

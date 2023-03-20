import { useState } from 'react';
import SuccessLogin from './loading/SuccessLogin';

const Loginpage = () => {
  const [TenNhanVien, setTenNhanVien] = useState('');
  const [MatKhau, setMatKhau] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = (event) => {
    setIsLoading(true)
  };

  return (
    <div>
      {isLoading == false ? (
        <form style={{ color: 'grey' }}>
          <div className="mb-3">
            <label htmlFor="TenNhanVien" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="TenNhanVien"
              onChange={(event) => setTenNhanVien(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="MatKhau" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="MatKhau"
              onChange={(event) => setMatKhau(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleOnClick}
            className="btn btn-primary"
            style={{ width: '100%' }}>
            Submit
          </button>
        </form>
      ) : (
        <SuccessLogin 
          TenNhanVien={TenNhanVien}
          MatKhau={MatKhau}
        />
      )}
    </div>
  );
};

export default Loginpage;

import { useState } from 'react';
import Loading from './loading/Loading';
const Loginpage = () => {
  const [TaiKhoan, setTaiKhoan] = useState('');
  const [MatKhau, setMatKhau] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick =async (event) => {
    await setIsLoading(true);
  };

  return (
    <div>
      {isLoading == false ? (
        <form style={{ color: 'grey' }}>
          <div className="mb-3">
            <label htmlFor="TaiKhoan" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="TaiKhoan"
              onChange={(event) => setTaiKhoan(event.target.value)}
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
            style={{ width: '100%' }}
          >
            Submit
          </button>
        </form>
      ) : (
        <Loading TaiKhoan={TaiKhoan} MatKhau={MatKhau} />
      )}
    </div>
  );
};

export default Loginpage;

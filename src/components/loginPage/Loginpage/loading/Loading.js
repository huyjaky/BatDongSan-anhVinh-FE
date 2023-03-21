import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import Complete from './Complete';
import NotComplete from './NotComplete';

const SuccessLogin = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [typeLog, setTypeLog] = useState(true);
  let { TaiKhoan, MatKhau } = props;

  const fetchData = async () => {
    let data = await axios.post('http://localhost:4000/api/login', {
      TaiKhoan: TaiKhoan,
      MatKhau: MatKhau
    });
    setIsLoading(false);
    console.log(data);
    if (data.data.errCode === 1) {
      setTypeLog(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return <div>{typeLog ? <Complete /> : <NotComplete />}</div>;
};

export default SuccessLogin;

SuccessLogin.propTypes = {
  TaiKhoan: PropTypes.string,
  MatKhau: PropTypes.string
};

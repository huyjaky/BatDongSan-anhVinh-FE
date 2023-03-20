import axios from 'axios';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const SuccessLogin = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  let {TaiKhoan, MatKhau}  = props;

  const fetchData = async () => {
    let data = await axios.post('http://localhost:4000/api/login', {
      TaiKoan: 'huy',
      MatKhau: '123'
    });

    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  if (isLoading) {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }



  return <div></div>;
};

export default SuccessLogin;

SuccessLogin.propTypes = {
  TaiKhoan: PropTypes.string,
  MatKhau: PropTypes.string
}
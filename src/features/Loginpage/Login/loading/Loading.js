import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import bcrypt from 'bcryptjs';

import Complete from './Complete';
import NotComplete from './NotComplete';

const SuccessLogin = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [typeLog, setTypeLog] = useState(true);
  let { TaiKhoan, MatKhau } = props;
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      let data = await axios.post('http://112.213.89.28:4001/api/login', {
        TaiKhoan: TaiKhoan,
        MatKhau: MatKhau
      });
      setIsLoading(false);
      if (data.data.errCode === 1) {
        setTypeLog(false);
      }
      let salt = bcrypt.genSaltSync(10);
      var hashMK = bcrypt.hashSync(MatKhau, salt);
      var hashPQ = bcrypt.hashSync(data.data.MaPQ, salt);

      sessionStorage.setItem('MatKhau', hashMK);
      sessionStorage.setItem('TaiKhoan', TaiKhoan);
      sessionStorage.setItem('PQ', hashPQ);
    } catch (error) {
      setIsLoading(false);
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

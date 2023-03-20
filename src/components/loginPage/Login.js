import { useEffect, useState } from 'react';
import logo from '../../assets/img/icons8-vue-js-600.png';
import axios from 'axios';

const Login = () => {
  const [nhanvien, setNhanvien] = useState();
  const [TenNhanVien, setTenNhanVien] = useState('');
  const [MatKhau, setMatKhau] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const check = async () => {
    let data = await axios.post('http://localhost:4000/api/login', {
      TenNhanVien: 'jajajajau2',
      MatKhau: '$2b$10$w58B4yAdtVqC22UWuPZ3gOxnaJxk7Mhu.k6CDhT6CFN'
    })
    console.log(data);
  }

  useEffect(() => {
    check();
  }, []);

  return (
    <div>
      <img src={logo}/>
    </div>
  );
};

export default Login;

import { useEffect, useState } from 'react';
import axios from 'axios';

const testApi = () => {
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
      {nhanvien &&
        nhanvien.data.map((item, index) => {
          return (
            <div key={index}>

            </div>
          )
        })
      }
    </div>
  );
};

export default testApi;

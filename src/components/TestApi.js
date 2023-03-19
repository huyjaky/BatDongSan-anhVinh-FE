import { useEffect, useState } from 'react';
import axios from 'axios';

const testApi = () => {
  const [nhanvien, setNhanvien] = useState();

  const getNhanvien = async () => {
    let data = await axios.get('http://localhost:4000');
    console.log(data);
  };

  useEffect(() => {
    getNhanvien();
  }, [nhanvien]);

  return (
    <div>
      check123456
    </div>
  );
};

export default testApi;

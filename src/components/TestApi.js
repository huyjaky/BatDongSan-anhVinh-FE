import { useEffect, useState } from 'react';
import axios from 'axios';

const testApi = () => {
  const [nhanvien, setNhanvien] = useState();

  const getNhanvien = async () => {
    let data = await axios.get('http://localhost:4000/');
    console.log('count');
    setNhanvien(data);
  };

  useEffect(() => {
    getNhanvien();
  }, []);

  return (
    <div>
      {nhanvien &&
        nhanvien.data.map((item, index) => {
          return (
            <div key={index}>
              {console.log(item)}
            </div>
          )
        })
      }
    </div>
  );
};

export default testApi;

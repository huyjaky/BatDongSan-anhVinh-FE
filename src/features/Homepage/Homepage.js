import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KhachCell from "./khachCell/KhachCell";

const Homepage = () => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const allkhach = await axios.get('http://localhost:4000/api/getallkhach');
    } catch (error) {
      console.log(error);
    }
  }

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div style={{ width: '90%', margin: '30px' }}>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              className={`nav-link ${activeItem === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              Khach Thue
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeItem === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              Khach Mua
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeItem === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              Khach Cho Thue
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeItem === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              Khach Ban
            </Link>
          </li>
        </ul>
      </div>
      <KhachCell />
    </>
  )
};

export default Homepage;

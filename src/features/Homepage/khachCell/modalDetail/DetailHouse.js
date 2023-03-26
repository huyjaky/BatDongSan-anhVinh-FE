import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getkhachDetail } from "../../../../store/Selector";
import Detail from "./detail/Detail";

const DetailHouse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const khach = useSelector(getkhachDetail);

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-xxl-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ height: '100vh' }}>
              <Detail />
            </div>
            <div className="modal-footer">
              {khach && typeof khach.khach === 'string' && (
                <div>
                  {khach.khach}
                </div>
              )}
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DetailHouse;

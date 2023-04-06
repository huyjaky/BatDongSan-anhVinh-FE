import React, { useEffect, useState } from 'react';

// Import React FilePond
import { registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import axios from 'axios';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPhuong, setPhuongQuan, setQuan } from '../../store/actions/Log';
import { getPhuong, getQuan, getRe } from '../../store/Selector';
import InputUpload from './InputUpload/InputUpload';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function Upload() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const phuong = useSelector(getPhuong);
  const quan = useSelector(getQuan);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const fetchData = async () => {
    if (phuong.length == 0 || quan.length == 0) {
      let data = await axios.get('http://112.213.89.28:4001/api/phuongquan');
      await dispatch(setPhuong(data.data.phuong));
      await dispatch(setQuan(data.data.quan));
      await dispatch(setPhuongQuan(data.data.phuongquan));
      console.log(data);
    }
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return (
    <>
      <InputUpload />
    </>
  );
}
export default Upload;

import React, { useEffect, useRef, useState } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

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
import InputUpload from './InputUpload/InputUpload';
import { getRe } from '../../store/Selector';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function Upload() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const re = useSelector(getRe);

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [re]);

  console.log(useParams());

  const fetchData = async () => {
    let data = await axios.get('http://localhost:4000/api/phuongquan');
    await dispatch(setPhuong(data.data.phuong));
    await dispatch(setQuan(data.data.quan));
    await dispatch(setPhuongQuan(data.data.phuongquan));
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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          className="file-pond"
          style={{
            width: '50%',
            height: '100%',
            marginTop: '1vh',
            zIndex: '0',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center'
          }}
        >
          <FilePond
            className={`${re}`}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={30}
            maxParallelUploads={30}
            server="http://localhost:4000/api/img"
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle='Keo va tha anh <span class="filepond--label-action">Browse</span>'
            acceptedFileTypes={[
              'image/jpeg',
              'image/png',
              'image/gif',
              'image/bmp',
              'image/svg+xml',
              'image/webp',
              'image/tiff',
              'image/x-icon',
              'application/pdf'
            ]}
            onremovefile={(file) => {
              console.log(file);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default Upload;
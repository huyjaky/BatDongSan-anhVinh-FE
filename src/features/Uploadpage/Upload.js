import React, { useState } from 'react'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

// Our app
function Upload() {

  const [files, setFiles] = useState([])
  return (
    <div className="file-pond" style={{ width: '40%', height: '100%', marginTop: '10vh', zIndex: '0' }}>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={20}
        server="http://localhost:4000/api/img"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        acceptedFileTypes={['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml', 'image/webp', 'image/tiff', 'image/x-icon', 'application/pdf']}
      />
    </div>
  )
}
export default Upload;

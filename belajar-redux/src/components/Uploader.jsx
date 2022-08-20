import React from 'react'
import Dropzone from 'react-dropzone-uploader';
import "react-dropzone-uploader/dist/styles.css";

const Uploader = () => {
    const getUploaderParams = ({meta}) => {
        return { url: 'https://httpbin.org/post'};

    };

    const handleChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file);
    };

    const handleSubmit = (files, allFiles) => {
        console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    }

    return (
        <div>
            <Dropzone 
                getUploadParams={getUploaderParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
            />
        </div>
    )
}

export default Uploader

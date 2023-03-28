import React, { useState } from "react";

import "./FileInput.css";

import uploadImg from "../../assets/images/icons8-upload-to-cloud-48.png";

const FileInput = (props) => {
  const [fileList, setFileList] = useState([]);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  return (
    <>
      <div className="drop-file-input">
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>upload Your Resume</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
    </>
  );
};

export default FileInput;

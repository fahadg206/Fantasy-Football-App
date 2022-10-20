import React from "react";
import ReactFileReader from "react-file-reader";

const Article11 = () => {
  const handFiles = (file) => {
    console.log(file);
  };

  return (
    <div>
      <ReactFileReader
        fileTypes={[".txt"]}
        base64={true}
        multipleFiles={false}
        handleFiles={handFiles}
      >
        <button className="btn">Upload</button>
      </ReactFileReader>
    </div>
  );
};

export default Article11;

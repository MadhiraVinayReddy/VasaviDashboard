import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mainnav from "../MainDashboard/Mainnav";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { useParams } from "react-router-dom";

const Files = () => {
  const fileURL = useParams();
  const [files, setFiles] = useState([]);
  React.useEffect(() => {
    console.log(fileURL);
    const fileRef = ref(storage, `${fileURL.url}`);
    getDownloadURL(fileRef).then((url) => {
      console.log(url);
      setFiles(url);
    });
  }, []);

  return (
    <div>
      <Mainnav />
      return (
      <embed
        src={files}
        className=" z-20 absolute right-0 bottom-0"
        type="application/pdf"
        width={80 + "%"}
        height={85 + "%"}
      />
      );
    </div>
  );
};

export default Files;

import React, { useState } from "react";
import { read, utils } from "xlsx";
const useExcel = () => {
  const [upload, setUpload] = useState([]);

  const uploadExcel = async (data) => {
    const excel = data.target.files[0];
    return fetchExcel(excel);
  };

  const fetchExcel = async (file) => {
    const excel = await file.arrayBuffer();
    const workbook = read(excel);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = utils.sheet_to_json(worksheet);
    setUpload(data);
    return data;
  };

  return [upload, uploadExcel];
};

export default useExcel;

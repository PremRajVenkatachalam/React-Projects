import React, { useState, useRef } from 'react';
import './App.css'

const MainComp = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const qrdata = useRef('');
  const qrimageSize = useRef('');
  const [inputData, setInputData] = useState('');
  const [inputSize, setInputSize] = useState('');

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrimageSize.current}x${qrimageSize.current}&data=${encodeURIComponent(qrdata.current)}`;
      setImg(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleDataChange(e) {
    qrdata.current = e.target.value;
    setInputData(e.target.value);
  }

  function handleSizeChange(e) {
    qrimageSize.current = e.target.value;
    setInputSize(e.target.value);
  }

  function generateCurrentQR() {
    qrdata.current = window.location.href;
    setInputData(window.location.href);
  }

  function qrDownload() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${qrdata.current}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <>
      <header>
        <h3>QR CODE GENERATOR</h3>
      </header>

      {loading && "Please Wait"}
      {img && <img src={img} id='image1' alt="QR Code" />}

      <div id='container'>
        <label id='label'>
          Data For QR Code
          <input type='text' placeholder='Data' id='inputfield' value={inputData} onChange={handleDataChange} />
        </label>
        <label id='label'>
          Image Size (e.g., 150)
          <input type='text' placeholder='Size' id='inputfield' value={inputSize} onChange={handleSizeChange} />
        </label>
      </div>

      <div className='buttoncontainer'>
        <button className='button1' onClick={generateQr}>Generate QR Code</button>
        <button className='button2' onClick={qrDownload}>Download QR Code</button>
        <button className='button3' onClick={generateCurrentQR}>Current Page QR Code</button>
      </div>
    </>
  );
}

export default MainComp;
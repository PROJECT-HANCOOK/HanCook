import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export default function Camera({isVideoStart}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  // const [choice, setChoice] = useState('food')

  useEffect(() => {
    getVideo();
  });

  const getVideo = async () => {
    try {
      if (isVideoStart) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  // const clickRadioBtn = (btnName) => {
  //   setChoice(btnName)
  // };

  const getCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png')
      // console.log(dataUrl)
      imageMaker(dataUrl);
    }
  };
  const imageMaker = (dataUrl) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        console.log('111111111111')
        const imageFile = new File([blob], 'image.png', { type: 'image/png' });
        axiosFunc(imageFile);
      }, 'image/png', 1);
    };
    img.src = dataUrl;
  };

  const axiosFunc = (imageFile) => {
    
    const apiEndpointUrl = 'https://18c2a61d-b6aa-4581-b1df-02f9c7337ce0.api.kr-central-1.kakaoi.io/ai/vision/4906cb06cc5f42858a61ccbf10bd0f74';
    const apiKey = 'cc044e06145b8c458fba2fb91ed7629f';

    const formData = new FormData();
    formData.append('image', imageFile);

    const headers = {
      'Content-Type': 'multipart/form-data',
      'x-api-key': apiKey,
    };

    axios.post(apiEndpointUrl, formData, { headers })
      .then(response => {
        // API 요청 성공 시 처리할 코드
        console.log(response.data);
      })
      .catch(error => {
        // API 요청 실패 시 처리할 코드
        console.error(error);
      });
    
    
  }
   

  return (
    <div>
      <div>
        <video ref={videoRef} />
      </div>
      {/* <div className='radioBtnGroup'>
        <input type="radio" id="food" checked={choice==='food'} onClick={()=> clickRadioBtn('food')}/>
        <label htmlFor="food">food</label>

        <input type="radio" id="text" checked={choice==='text'} onClick={()=> clickRadioBtn('text')}/>
        <label htmlFor="text">text</label>
      </div> */}
      <div>
        <button type="button" onClick={getCapture}> capture </button>
        <canvas ref={canvasRef} style={{display: 'none'}} />
      </div>
      
    </div>
  );
}
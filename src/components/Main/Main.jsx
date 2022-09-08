import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

import "./Main.css";
import { drawRect } from "../../common/utilities";

const Main = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Main Function
  const runMain = async () => {
    // loads the pre trained models
    const net = await cocossd.load();

    // calls detect function every 10 milliseconds
    setInterval(() => {
      detect(net);
    }, 10);
  };

  // Detection function
  const detect = async (net) => {
    // check for data
    if (
      typeof videoRef.current !== "undefined" &&
      videoRef.current !== null &&
      videoRef.current.video.readyState === 4
    ) {
      // get video props
      const video = videoRef.current.video;
      const videoWidth = videoRef.current.video.videoWidth;
      const videoHeight = videoRef.current.video.videoHeight;

      // set video props
      videoRef.current.video.width = videoWidth;
      videoRef.current.video.height = videoHeight;

      // set canvas props
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // detect objects
      const obj = await net.detect(video);
      // console.log(obj);

      const canvasCtxt = canvasRef.current.getContext("2d");
      // console.log(canvasCtxt);

      // draw bbox
      drawRect(obj, canvasCtxt);
    }
  };

  useEffect(() => {
    runMain();
  }, []);

  return (
    <div className="container">
      <h1>Test</h1>
      <Webcam ref={videoRef} muted={true} className="webRef" />
      <canvas ref={canvasRef} className="canvasRef" />
    </div>
  );
};

export default Main;

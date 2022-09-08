export const drawRect = (detectedObject, canvasContext) => {
  detectedObject.forEach((predictedValue) => {
    // get bbox and class
    const [x, y, width, height] = predictedValue["bbox"];
    const text = predictedValue["class"];

    // styling
    const color = "#5D3FD3";
    canvasContext.strokeStyle = color;
    canvasContext.font = "24px Roboto";

    // draw rectangles and text
    canvasContext.beginPath();
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
    canvasContext.rect(x, y, width, height);
    canvasContext.stroke();
  });
};

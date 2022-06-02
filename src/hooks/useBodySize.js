import { useState } from "react";

const useBodySize = () => {
  const [currWidth, setCurrWidth] = useState(document.body.clientWidth);
  const [currHeight, setCurrHeight] = useState(document.body.clientHeight);

  window.onresize = () => {
    setCurrWidth(document.body.clientWidth);
    setCurrHeight(document.body.clientHeight);
  };

  return [currWidth, currHeight];
};
export default useBodySize;

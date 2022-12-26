import { useState, useEffect } from "react";

const ProgressiveImg = (props: TImage) => {
  const { src, className = "image" } = props;
  const [imageSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return <img src={imageSrc} alt="" className={`${className} ${imageSrc ? " back-gradient" : ""}`} />;
};
export default ProgressiveImg;

type TImage = {
  src: string,
  alt?: string,
  className?: string
};

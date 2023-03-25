import { useState, useEffect } from "react";
import { TApiAnswer } from "../../types";

const defaultSrc = "";

const ProgressiveImg = (props: TImage) => {
  const { src, className = "image" } = props;
  const [image, setImage] = useState<TApiAnswer & { src: string }>({
    isLoaded: false,
    isLoading: true,
    isError: false,
    src: "",
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage({
        isLoaded: true,
        isLoading: false,
        isError: false,
        src,
      });
      img.onerror = () => {
        setImage({
          isLoaded: false,
          isLoading: false,
          isError: true,
          src: "",
        });
      };
    };
  }, [src]);

  return (
    <>
      {image.isLoaded && <img src={image.src} alt="" className={className} />}
      {image.isLoading && <div className={`${className} back-gradient`}> </div>}
      {image.isError && <img src={defaultSrc} alt="" className={className} />}
    </>
  );
};
export default ProgressiveImg;

type TImage = {
  src: string;
  alt?: string;
  className?: string;
};

//imgOnload => setSrc
//img

const ImgDetails = ({imageLink, imageHeight, imageWidth}) => {
  return (
    <>
    <div className="img"><h1>Image</h1>
    <img src={imageLink} height={imageHeight} width={imageWidth} alt="Image " />
  </div>
  </>
);
};
    
export default ImgDetails
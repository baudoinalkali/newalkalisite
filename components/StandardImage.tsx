import Image from "./Image";

const StandardImage = (props) => {
  const imageAngle2 = () => {
    return `${
      props.imageAngle === "left"
        ? "portfolio-image--left m-auto rounded-md shadow-2xl"
        : props.imageAngle === "right rounded-md shadow-2xl"
        ? "portfolio-image--right rounded-md shadow-2xl"
        : props.imageAngle === "none"
    } m-auto`;
  };

  const imageAngle = () => {
    return `${
      props.imageAngle === "left"
        ? "portfolio-image--left m-auto rounded-md shadow-2xl"
        : props.imageAngle === "right"
        ? "portfolio-image--right rounded-md shadow-2xl"
        : ""
    } m-auto`;
  };

  const imageContainerAngle = () => {
    return `${
      props.imageAngle === "left"
        ? "portfolio-image-container"
        : props.imageAngle === "right"
        ? "portfolio-image-container"
        : " "
    }`;
  };

  return (
    <div>
      <div className={imageContainerAngle()} style={{ fontSize: "0"}}>
        <div className={imageAngle()}>
          <Image className="rounded-md" src={props.image} alt={props.altText} quality={100}/>
        </div>
      </div>
    </div>
  );
};

export default StandardImage;

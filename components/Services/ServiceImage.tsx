import Image from "next/image";

const ServiceImage = (props) => {
    return (
        <div className="mx-auto flex justify-center">
            <Image 
            src={props.image} 
            alt={props.altText}
            width={props.width}
            height={props.height}
            quality={100} />
        </div>
    );
};

export default ServiceImage;

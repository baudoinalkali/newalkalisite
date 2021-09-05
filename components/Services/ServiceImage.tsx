import Image from "next/image";

const ServiceImage = (props) => {
    return (
        <div className="mx-auto flex justify-center">
            <img
                src={props.image}
                alt={props.altText}
                width={props.width}
                height={props.height}
            />
        </div>
    );
};

export default ServiceImage;

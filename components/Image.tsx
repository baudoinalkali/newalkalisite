import Image from "next/image";
import ImageProps from "next/image"

type IImageProps = {
  aspectRatio?: number;
} & Partial<ImageProps>;

const Image = (props: IImageProps) => {
  const { aspectRatio = 4 / 3, ...restProps } = props;
  return (
    <div
      // @ts-ignore
      style={{ "--aspectRatio": `${(1 / aspectRatio) * 100}%` }}
      className="next-image-wrapper"
    >
      <Image
        // @ts-ignore
        layout="fill"
        {...restProps}
      />
    </div>
  );
};

export default Image;

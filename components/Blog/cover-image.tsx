import cn from 'classnames'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  borderRadius: string
}

const CoverImage = ({ title, src, slug, borderRadius }: Props) => {
  if (src) {
    const image = (
      <Image
        height="350"
        width="580"
        quality={100}
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn(`${borderRadius}`, {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
      />
    )
    return (
      <div className="sm:mx-0">
        {slug ? (
          <a href={`/blog/${slug}`}>
            <a aria-label={title}>{image}</a>
          </a>
        ) : (
          image
        )}
      </div>
    )
  } else {
    return <div className="sm:mx-0"></div>
  }
}

export default CoverImage

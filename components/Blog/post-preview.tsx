import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="group transform duration-500 hover:-translate-y-2 rounded-md shadow-2xl bg-white">
      <a href={`/blog/${slug}`}>
        <div className="mb-5">
          <CoverImage borderRadius="rounded-t-md" slug={slug} title={title} src={coverImage} />
        </div>
        <div className="px-6">
          <h3 className="text-3xl mb-3 leading-snug mb-7">
            <a>{title}</a>
          </h3>
          <p className="text-lg leading-relaxed mb-5">{excerpt}</p>
          <div className="mt-5 flex items-center lg:justify-start group space-x-3 mb-6">
            <div className="font-medium text-md text-alkaligrey-400 group-hover:text-alkali-500">
              Learn More
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:transform duration-500 group-hover:translate-x-3 h-4 w-4 group-hover:text-alkali-500 text-alkaligrey-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PostPreview

import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center pt-14 lg:pt-24 gap-x-14">
      <div>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 items-center space-x-10 justify-center lg:justify-start">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage borderRadius="rounded shadow-xl" title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
      </div>
      </div>
    </>
  )
}

export default PostHeader

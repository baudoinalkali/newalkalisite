import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl font-medium tracking-tighter leading-normal md:leading-none mb-12 text-center lg:text-left">
      {children}
    </h1>
  )
}

export default PostTitle

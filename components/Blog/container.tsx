import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="px-7 xl:px-0">
      <section className="max-w-7xl container mx-auto">{children}</section>
    </div>
  )
}

export default Container

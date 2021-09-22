import Container from '../components/Blog/container'
import Layout from '../components//Blog/layout'
import MoreStories from '../components/Blog/more-stories'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'
import { getAllGhostPosts } from '../lib/ghost'
import Post from '../types/post'

type Props = {
    allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
    const morePosts = allPosts
    return (
        <>
            <div id="home">
                <CombinedNavigation headerBackground="bg-alkaligrey-300" />
                <Layout>
                    <div className="bg-alkaligrey-300">
                        <div className="py-20 pb-80 flex text-center justify-center z-20 px-7 mb-36">
                            <div className="relative z-20">
                                <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
                                    Blog
                                </h1>
                                <p className="py-10 text-alkaligrey-800 max-w-xl m-auto text-lg lg:text-xl">
                                    Browse our selection of content designed to empower you and your business's online presence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-96">
                        <Container>
                            <MoreStories posts={morePosts} />
                        </Container>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default Index

export const getStaticProps = async () => {

    const allGhostPosts = (await getAllGhostPosts()) || []

    const allPosts = [...allGhostPosts]

    return {
        props: { allPosts },
    }
}

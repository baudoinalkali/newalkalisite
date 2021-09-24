import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/Blog/container'
import PostBody from '../../components/Blog/post-body'
import PostHeader from '../../components/Blog/post-header'
import Layout from '../../components/Blog/layout'
import PostTitle from '../../components/Blog/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import { getAllGhostPosts, getSingleGhostPost } from '../../lib/ghost'
import DesktopNavigation from '../../components/Navigation/DesktopNavigation'
import CombinedNavigation from '../../components/Navigation/CombinedNavigation'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div id="post">
      <Layout preview={preview}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <CombinedNavigation headerBackground="bg-white">
                  <title>
                    {post.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  <meta property="og:image" content={post.ogImage?.url} />
                </CombinedNavigation>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
      </Layout>
    </div>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  let post

  const ghostPost = await getSingleGhostPost(params.slug)

  ghostPost.content = ghostPost.html
  post = ghostPost

  return { props: { post } }
}

export async function getStaticPaths() {

  const allGhostPosts = (await getAllGhostPosts()) || []

  const posts = [...allGhostPosts]

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

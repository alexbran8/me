import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')
  /* eslint-disable */

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const allPosts = await getAllFilesFrontMatter('blog')

    const filteredPosts = allPosts.filter(
      (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
    )

    // rss
    if (filteredPosts.length > 0) {
      const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
      const rssPath = path.join(root, 'public', 'tags', params.tag)
      fs.mkdirSync(rssPath, { recursive: true })
      fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
    }

    return { props: { posts: filteredPosts, tag: params.tag } }
  } catch (error) {
    console.log(error, post)
  }
}

export default function Tag({ posts, tag }) {
  try {
    // Capitalize first letter and convert space to dash
    const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
    return (
      <>
        <TagSEO
          title={`${tag} - ${siteMetadata.author}`}
          description={`${tag} tags - ${siteMetadata.author}`}
        />
        <ListLayout posts={posts} title={title} />
      </>
    )
  } catch (error) {
    console.log(error)
  }
}

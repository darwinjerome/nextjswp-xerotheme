import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-8 md:gap-y-16 mb-20">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

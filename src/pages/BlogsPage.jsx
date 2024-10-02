import BlogCard from '../components/BlogCard'
import blogs from '../data/blogs'
const BlogsPage = () => {
  return (
    <div>
      <h1 className='text-white'>Latest Blogs</h1>
      {
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            imagealt={blog.imagealt}
            title={blog.title}
            publisheddate={blog.publisheddate}
            updatedate={blog.lastupdate}
          />
        ))
      }
    </div>
  )
}

export default BlogsPage

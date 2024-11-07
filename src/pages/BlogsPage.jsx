import BlogCard from '../components/BlogCard'
import blogs from '../data/blogs'
const BlogsPage = () => {
  return (
    <div className='flex flex-col w-3/4 mx-auto'>
      <h1 className='mx-auto text-3xl font-semibold text-white my-10 '>Latest Blogs</h1>
      <div className='flex flex-wrap mx-auto my-10'>

        {
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              url={blog.url}
              image={blog.image}
              imagealt={blog.imagealt}
              title={blog.title}
              publisheddate={blog.publisheddate}
              updatedate={blog.lastupdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BlogsPage

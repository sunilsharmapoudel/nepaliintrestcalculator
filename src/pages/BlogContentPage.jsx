import BlogSection from "../components/BlogSection"
import blogs from "../data/blogs"
const BlogContentPage = () => {
    return (
        <div className='flex flex-col w-3/4 mx-auto'>
            <h1 className='mx-auto text-3xl font-semibold text-white my-10 '></h1>
            <div className='flex flex-wrap mx-auto my-10'>

                {
                    blogs.map((blog) => (
                        <BlogSection
                            key={blog.id}
                            title={blog.title}
                            publisheddate={blog.publisheddate}
                            updatedate={blog.lastupdate}
                            content={blog.content}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogContentPage

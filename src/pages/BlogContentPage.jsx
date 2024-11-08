
import blogs from "../data/blogs"
import { useParams } from "react-router-dom"

const BlogContentPage = () => {
    const { url } = useParams();

    const blog = blogs.find(blog => blog.url == `/${url}`)
    if (!blog) {
        return <div>Blog post not found. Error 404!</div>
    }
    return (

        <div className='flex flex-col w-3/4 mx-auto mb-16'>
            <div className="mx-auto my-16">
                <div>
                    <h1 className='text-5xl font-semibold text-white mb-5 text-center'>{blog.title}</h1>
                    <div className="flex justify-around items-center">
    <span className="text-sm font-semibold text-white">Published on : {blog.publisheddate}</span>
    <span className="text-sm font-semibold text-white">Updated on : {blog.lastupdate}</span>
</div>
                </div>
            </div>
            <div className="text-white text-lg" dangerouslySetInnerHTML={{ __html: blog.content }}>
            </div>



            {/* <div className='flex flex-wrap mx-auto my-10'>

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
            </div> */}
        </div>
    )
}

export default BlogContentPage

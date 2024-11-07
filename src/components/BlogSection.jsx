import { Link } from "react-router-dom"
import blogs from "../data/blogs"
const BlogSection = ({ title, content, lastupdate, publisheddate }) => {
    return (
        <div className="w-full bg-slate-400 rounded-xl mb-16 mr-auto mx-auto">
            <div>{title}</div>
            <div>{publisheddate} and {lastupdate}</div>
            <div>{content}</div>
        </div>
    )
}

export default BlogSection

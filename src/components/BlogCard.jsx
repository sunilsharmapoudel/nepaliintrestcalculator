import blogs from "../data/blogs";
import { Link } from "react-router-dom";
const BlogCard = ({image, imagealt, title, publisheddate,  updatedate}) => {
    return (
        <>
            <div className="inline-block bg-slate-400 rounded-xl">
                <div className="inline-block rounded-xl featured-img p-1 bg-slate-300 hover:scale-[1.01]">
                   <Link to={"/"}><img className="rounded-xl" src={image} alt={imagealt}/></Link> 
                </div>
                <div className="flex justify-between m-1 font-semibold">
                    <span className="text-white">Published on: {publisheddate}</span>
                    <span className="text-white">Updated on: {updatedate}</span>
                </div>
                <div className="text-center bg-blue-500 rounded-br-xl rounded-bl-xl">
                    <Link to={"/"}><h2 className="inline font-bold text-2xl text-white">{title}</h2></Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard;

import { Link } from "react-router-dom";
const BlogCard = ({ image, imagealt, title, url }) => {
    return (
        <>
            <div className="inline-block bg-slate-400 rounded-xl mb-16 w-[400px] mr-auto mx-auto">
                <div className="inline-block rounded-xl featured-img p-1 bg-slate-300 hover:scale-[1.01] transition">
                    <Link to={url}><img className="rounded-xl" src={image} alt={imagealt} /></Link>
                </div>
                <div className="h-max text-center bg-blue-500 rounded-br-xl rounded-bl-xl">
                    <Link to={url}><h2 className="inline font-bold text-2xl text-white">{title}</h2></Link>
                </div>

            </div>
        </>
    )
}

export default BlogCard;

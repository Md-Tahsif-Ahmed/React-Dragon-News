import { FaEye} from "react-icons/fa";

const HomeView = ({ ne }) => {
    const { title, image_url, details, rating, total_view, author } = ne;
    return (
        <div className="space-y-6">
            <div className="navbar bg-gray-100 mt-6">
                <div className="navbar-start">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <img className="w-10 rounded-full" src={author.img}/> 
                    </label>
                
                    <div className="flex-col ml-2">
                        <h3>{author.name}</h3>
                        <p>{author.published_date}</p>
                    </div>
                </div>
            </div>

            <div className="px-4 space-y-6">
                <h1>{title}</h1>
                <img src={image_url} alt="" />
                <p>{details}</p>
                <div className="flex items-center justify-between">
                    <div className="flex  ">
                        <div className="rating mr-4">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <p className="flex items-center justify-center gap-2"><FaEye/>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeView;

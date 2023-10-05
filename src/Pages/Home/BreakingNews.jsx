import Marquee from "react-fast-marquee";
 const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 py-2 mt-4">
            <button className="btn bg-red-600 text-white rounded-none ml-2">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
        </div>
    );
};

export default BreakingNews;
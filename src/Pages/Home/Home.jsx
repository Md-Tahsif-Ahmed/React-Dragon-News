import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";

 const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-4 gap-6">
                <div className="border border-yellow-400">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="border border-pink-600  col-span-2">
                    <h2>News Coming.........</h2>
                </div>
                <div className="border border-red-400">
                    <RightNavbar></RightNavbar>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
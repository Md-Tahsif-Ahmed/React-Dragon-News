import { useState } from "react";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";
import { useEffect } from "react";
import HomeView from "./HomeView";

 const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(ne=>setNews(ne))
    })
    return (
        <div className="">
            <div className="text-center">
                <Header></Header>
            </div>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
                <div className="border border-yellow-400">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="border border-pink-600  col-span-2">
                    <h2 className="text-2xl font-bold">Dragon News Home</h2>
                    {
                        news.map((ne)=> <HomeView key={ne.id} ne={ne}></HomeView>)
                    }
                </div>
                <div className="border border-red-400">
                    <RightNavbar></RightNavbar>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
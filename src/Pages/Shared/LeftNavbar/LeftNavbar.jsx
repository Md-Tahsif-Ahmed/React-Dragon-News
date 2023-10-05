import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  FaCalendar } from "react-icons/fa";
import card1 from '../../../assets/1.png'
import card2 from '../../../assets/2.png'
import card3 from '../../../assets/3.png'

 

const LeftNavbar = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('category.json')
        .then(result=>result.json())
        .then(cat => setCategory(cat))

    }, [])
    return (
        <div>
             <h1 className="text-2xl font-bold">All Caterogy</h1>
             
             {
                category.map((cat)=><Link to={`/category/${cat.id}`} key={cat.id} className="block text-xl ml-4 font-semibold text-gray-500 p-3">{cat.name}</Link>)
             }

            <div className="card card-compact w-full bg-base-100 shadow-xl mt-2 rounded-md">
            <figure><img src= {card1} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                 <p className="flex items-center justify-start space-x-4">Sports <span className="ml-4"><FaCalendar/></span><span>Jan 4, 2022</span></p>
            </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl  rounded-md">
            <figure><img src= {card2} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                 <p className="flex items-center justify-start space-x-4">Sports <span className="ml-4"><FaCalendar/></span><span>Jan 4, 2022</span></p>
            </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl  rounded-md">
            <figure><img src= {card3} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                 <p className="flex items-center justify-start space-x-4">Sports <span className="ml-4"><FaCalendar/></span><span>Jan 4, 2022</span></p>
            </div>
            </div>
        </div>
    );
};

export default LeftNavbar;
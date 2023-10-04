import { FaGithub, FaGoogle, FaTwitter, FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import backgroundImage from '../../../assets/bg.png'
const RightNavbar = () => {
    const bgStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height to 100% of the viewport
      };
    return (
        <div className="">
             <h1 className="font-bold font-poppins">Login With</h1>
             <div className="mt-3">
                <button className="btn btn-outline btn-primary normal-case w-full mb-2"><FaGoogle/>Login With Google</button>
                <button className="btn btn-outline normal-case w-full"><FaGithub />Login With Github</button>
             </div>
              
             <h1 className="font-medium text-lg font-poppins my-8 ">Find Us On</h1>
             <div className="">
                <a className="p-4 normal-case px-10 outline-none border text-lg flex items-center rounded-t-lg"><span className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center mr-2"><FaFacebookF/></span><p className="text-gray-500 font-medium font-poppins">Facebook</p></a>
                <a className="p-4 normal-case px-10 text-lg flex items-center border rounded-none"><span className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center mr-2"><FaTwitter/></span><p className="text-gray-500 font-medium font-poppins">Twitter</p></a>
                <a className="p-4 normal-case px-10 text-lg flex items-center border rounded-b-lg"><span className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center mr-2"><FaInstagramSquare/></span><p className="text-gray-500 font-medium font-poppins">Instagram</p></a>
             </div>
             <div className="my-6 bg-gray-100 space-y-6">
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
             </div>
             <div style={bgStyle} className="flex flex-col justify-center items-center">
                   <h1 className="text-white font-bold font-poppins text-3xl text-center">Create an Amazing Newspaper</h1>
                   <p className="text-white  font-poppins p-8 text-center">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                   <button className="btn bg-pink-700 border-none text-white text-lg font-semibold  normal-case rounded-none">Learn More</button>
             </div>
              
        </div>
    );
};

export default RightNavbar;
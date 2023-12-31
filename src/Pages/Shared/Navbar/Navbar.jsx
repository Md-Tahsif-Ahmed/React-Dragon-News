 import { NavLink } from "react-router-dom";
 import userDefaultProfile from '../../../assets/user.png'
 import { Link } from "react-router-dom";
 const Navbar = () => {
    const Navlinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {Navlinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4">
       {Navlinks}
    </ul>
  </div>
  <div className="">
    
  </div>
  <div className="navbar-end gap-4">
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userDefaultProfile} />
        </div>
      </label>
     <Link><button className="btn btn-accent">Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;
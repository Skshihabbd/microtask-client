import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navber = () => {
  const {users ,logOut}=useAuth()
  const navlink=<>
  
  {
    users?<><ul className="flex justify-between items-center"><Link to={'/dashboard'} ><li>Dashboard</li></Link><li><Link to={'/profile'}>User profile</Link></li><li>Available coin{}</li><li><button onClick={logOut}>Logout</button></li></ul></>:<><Link to={'/login'}><li>Login</li></Link> <Link to={'/register'}><li>Registration</li></Link></>
  }
  
  </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navlink}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl"><Link to={'/'}>Pico Worker</Link></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navlink}
      </ul>
    </div>
    {users?<ul><li><Link >
    <img className="w-16 h-16 rounded-full" src={users?.photoURL} alt="" />
    </Link></li></ul>:<li><a href="https://youtu.be/eQzqfSGuEWk?t=2" target="_blank">Watch demo</a></li>}
  </div>
  );
};

export default Navber;
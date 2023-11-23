import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from './../../../Hooks/useCart';
import useAdmin from "../../../Hooks/useAdmin";




const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [isAdmin]=useAdmin();
const [cart]=useCart();


const handleLogOut=()=>{
logOut()
.then(()=>{})
.catch(error=>console.log(error))
}

    const navOptions=<>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/menu">Our Menu</Link></li>
     <li><Link to="/order/salad">Order Food</Link></li>
    {
      user && isAdmin &&  <li><Link to="/dashboard/adminHome">Dashboadrd</Link></li>
    }
    {
      user && !isAdmin &&  <li><Link to="/dashboard/userHome">Dashboadrd</Link></li>
    }
    
     <li><Link to='/dashboard/cart'>
     <button className="btn btn-ghost">
     <FaShoppingCart className="mr-2"></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
     </Link></li>
   {
    user ? <>
    <button onClick={handleLogOut} className="btn btn-ghost">SignOut</button>
    </> :
     <>
     <li><Link to="/login">LogIn</Link></li>
    </>
   }
    </>
    return (
        <div className="navbar fixed max-w-screen-xl bg-black text-white bg-opacity-30 z-10">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm text-black  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 
      rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost font-bold normal-case text-xl">BISTRO BOSS <br />RESTAURANT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-white text-xl menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;
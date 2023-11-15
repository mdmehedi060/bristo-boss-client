import { NavLink, Outlet } from "react-router-dom";
import {  FaBookmark, FaCalendar, FaHome, FaPaypal, FaReceipt, FaSearch, FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  const [cart]=useCart();
  return (
    <div className="flex">
      <div className="w-56 min-h-screen bg-orange-400">
        <ul className="menu text-2xl">
          <li>
            <NavLink to="/dasboard/cart">
              <FaShoppingCart />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasboard/userHome">
              <FaHome />
             User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasboard/reservation">
              <FaCalendar />
           Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasboard/payment">
              <FaPaypal />
          Payment Mathod
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasboard/review">
              <FaReceipt />
          Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasboard/bookings">
              <FaBookmark />
          My Bookings
            </NavLink>
          </li>
          <div className="divider text-black font-extrabold"></div>
          <li>
            <NavLink to="/">
              <FaHome />
             Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
            Menu
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

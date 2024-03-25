import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <nav className='flex justify-between items-center max-w-6xl h-20 mx-auto'>

        <NavLink to="/">
          <div className='ml-5'>
            <img src='../logo.png' alt='' className="h-14"/>
          </div>
        </NavLink>

        <div className='flex items-center mr-5 text-slate-100 font-medium space-x-6'>
           <NavLink to="/">
             <p>Home</p>
           </NavLink>

           <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
              cart.length > 0 && 
              (<span 
                className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
                flex justify-center items-center animate-bounce rounded-full text-white'
                >
                {cart.length}
                </span>) 
              } 
            </div>
           </NavLink>
        </div>

      </nav>
    </div>
  )
}

export default Navbar

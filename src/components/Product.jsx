import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {add, remove} from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';


const Product = ({post}) => {
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  } 

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  return (
    <div className='flex flex-col justify-between items-center
      hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
      hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>      
      {/*Above box shadow values are taken from the website : https://manuarora.in/boxshadows */}

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt={post.title} className="h-full w-full "/>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className='text-green-600 font-semibold'>
            ${post.price}
          </p>
        </div>
        {
        cart.some((item) => item.id === post.id) ?
        (
          <button
          className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
           text-[12px] p-1 px-3 uppercase transition duration-300 ease-in hover:bg-gray-700 hover:text-white'
          onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) :
        (
          <button
           className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
           text-[12px] p-1 px-3 uppercase transition duration-300 ease-in hover:bg-gray-700 hover:text-white'
           onClick={addToCart}
           >
            Add To Cart
          </button>
        )
        }
      </div>

    </div>
  )
}

export default Product

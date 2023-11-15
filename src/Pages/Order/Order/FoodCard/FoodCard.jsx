import useAuth from "../../../../Hooks/useAuth";
import  Swal  from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAxioxSecure from "../../../../Hooks/useAxioxSecure";
import useCart from "../../../../Hooks/useCart";





const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
const {user}=useAuth();
const navigate=useNavigate();
const location=useLocation();
const axiosSecure=useAxioxSecure();
const [,refatch]=useCart();

  const handelAddToCart = () => {
    if(user && user.email){
      // sent cart item to the database

const cartItem={
menuId:_id,
email: user.email,
name,
image,
price
}
axiosSecure.post('/carts',cartItem)
.then(res=>{
  console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to your cart`,
      showConfirmButton: false,
      timer: 1500
    });
    // refatch the card update the item count
    refatch();
  }
})
    }
    else{
      Swal.fire({
        title: "You are not Login",
        text: "Please Login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
        //  send to the navigate
        navigate('/login',{state:{from:location}})
        }
      });
    }
  };




  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[300px]" src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handelAddToCart}
            className="btn btn-outline border-0 border-b-4 flex items-center
             text-orange-400 mx-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

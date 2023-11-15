import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext} from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const {createUser,updateUserProfile}=useContext(AuthContext)
const navigate=useNavigate();
    const onSubmit = (data) =>{ 
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('User Profile info Update');
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch(error=>console.log(error))
    })
}

  return (
    <>
    <Helmet>
      <title>Bistro Boss | SignUp</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name",{ required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                
              />
              {errors.name && <span className='text-red-600'>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
              {...register("photoURL",{ required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                
              />
              {errors.photoURL && <span className='text-red-600'>PhotoURL required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email",{ required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              
              />
                {errors.email && <span className='text-red-600'>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password",{ required: true,
                minLength: 6,
                maxLength: 20, 
            pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              
              />
               {errors.password?.type === "required" && (<p className='text-red-600' role="alert">Password is required</p>)}
                {errors.password?.type === "minLength" && (<p className='text-red-600' role="alert">Password must be 6 cheretars</p>)}
                {errors.password?.type === "maxLength" && (<p className='text-red-600' role="alert">Password must be less then 20 cheretars</p>)}
                {errors.password?.type === "pattern" && (<p className='text-red-600' role="alert">Password must be one uparcase one lowercase one number & one special charecters</p>)}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <input  className="btn btn-primary" type="Submit" value="SignUp" />
              
            </div>
          </form>
          
          <p><small>Allready Have a Account. Please <Link to="/login"> Login</Link></small></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;

import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/api';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname|| '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error=>console.log(error))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-12 flex-col lg:flex-row">
                <div className=" ml-20 text-center lg:text-left">
                    <img className='w-3/4' src={login} alt=''></img>
                </div>

                <div style={{ fontFamily: "Inter" }} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl text-center py-2 font-bold">Sign Up </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl  text-gray-600 font-semibold label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl  text-gray-600 font-semibold label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-xl  text-gray-600 font-semibold label-text">Confirm Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input style={{ backgroundColor: " #FF3811" }} className="btn border-0" type="submit" value="Sign Up"></input>
                        </div>
                    </form>
                    <p className='text-center '>Already Have an Account Click <Link className=' text-orange-600 font-bold ' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
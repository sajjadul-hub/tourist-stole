import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login1 from '../../assets/images/login/login.jpeg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const { login} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius', data.token)
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-12 flex-col lg:flex-row">
                <div className=" ml-20 text-center lg:text-left mb-64">
                <img style={{height:"500px",width:"500px"}} className='' src={login1} alt=''></img>
                </div>

                <div style={{ fontFamily: "Inter" }} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl text-center py-2 font-bold">Login </h1>
                    <form onSubmit={handleLogin} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl  text-gray-600 font-semibold label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-xl  text-gray-600 font-semibold label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover  text-gray-600 font-semibold ">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn border-0 bg-cyan-400" type="submit" value="Login"></input>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'>New to Genius Car <Link className=' text-cyan-400 font-bold ' to='/signUp'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
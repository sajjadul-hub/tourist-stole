import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../../api/api';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
               setAuthToken(user);
            })
            .catch(error => console.error(error))
    };
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info w- my-4 w-64">Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;
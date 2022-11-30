import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext/UseContext';
import UseToken from '../../Hooks/useToken';
import image from '../Login/login-circle.gif'

const Login = () => {
const {signInUser} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"
const [userEmail,setUserEmail] = useState('')
const [token] = UseToken(userEmail)

if(token){
    navigate(from, { replace: true })
}
    const handleLogin= event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            toast.success('log in SuccessFully')
            setUserEmail(email)
            console.log(email)
            navigate(from, { replace: true })
            form.reset()
            

        })
        .catch(error=>{
            toast.error(error.message)
        })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={image} alt=''></img>
            </div>

            {/* logIn  */}
            <div className='px-10 bg-white'>
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered shadow-xl" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered shadow-lg" required />
                    </div>
                    <input type="submit" value="Log In" className='btn btn-primary mt-5 w-4/5 mx-auto' />
                    <p className='mt-4'>New To Dream bike ?<Link className='btn-link text-primary' to='/register'>Please Register Now!!</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
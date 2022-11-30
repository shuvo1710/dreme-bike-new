import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext/UseContext';
import UseToken from '../../Hooks/useToken';
import image from '../Register/Register.gif'

const Register = () => {
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    
    const [userEmail,setUserEmail] = useState('')
    const [token] = UseToken(userEmail)

    if(token){
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const position = form.select.value;
        const image = form.image.files[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        // 30c45cbf02b1638a98e8ac99319f604c
        const url = "https://api.imgbb.com/1/upload?key=4ed0788280979d06e12345ebe75021e9"

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const photoURL = imageData.data.display_url;
                console.log(imageData.data.display_url);
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        console.log(user)
                        toast.success('SuccessFully Register')
                        updateUser(name, imageData.data.display_url)
                        navigate('/')
                        saveUser(photoURL, name, email, position)
                        setUserEmail(email)
                        form.reset()
                            
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(err => console.error(err))
    }


    // google login
    const handleLogin = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser( user.photoURL,user.displayName, user.email)
                setUserEmail(user.email)
                navigate(from, { replace: true })
                toast.success('Google LogIn SuccessFully')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // saveuser

    const saveUser = (photoURL, name, email, position) => {
        const user = {
            photoURL, name, email, position
        }

        fetch('https://dream-bike-server.vercel.app/position', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
  
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero bg-white mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img src={image} alt=''></img>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mb-2">
                    <h1 className="text-5xl font-bold text-center mb-4">Register</h1>
                    <form onSubmit={handleSubmit} className="card-body ">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered shadow-lg" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered shadow-xl" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" name='image' placeholder="photo" className="input input-bordered shadow-lg" required />
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select your position</span>

                            </label>
                            <select name='select' className="select select-bordered">
                                <option>Buyer</option>
                                <option>Seller</option>
                                

                            </select>

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered shadow-lg" required />

                        </div>


                        <input type="submit" value="Register" className='btn btn-primary mt-5' />
                        <p>All Ready Have An Account?<Link className='btn-link text-primary' to='/login'>Please Log in!</Link></p>
                    </form>
                    <button onClick={handleLogin} className="btn btn-active btn-secondary w-4/5 mx-auto text-white mb-4">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
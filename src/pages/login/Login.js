import './Login.css';
import loginImage from '../../assets/images/loginImage.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        if (email && password) {
            alert("Login Successful!");
        } else {
            alert("Please enter correct email & password!");
        }
    }

    return (
        <>
            <div className='login'>
                <div className='container login-form'>
                    <div className='row gx-0 align-items-center vh-100 border rounded-2'>
                        <div className='col-md-6'>
                            <img src={loginImage} className='img-fluid' alt='login-image' />
                        </div>
                        <div className='col-md-6 login-main'>
                            <form>
                                <div className='form-title py-2 mb-4'>
                                    <h3>Login</h3>
                                    <div className="mb-3 text-start form-container">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="mb-3 text-start form-container">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <div className='login-button'>
                                        <Link to='/home' ><button className='button py-2 px-2 rounded-3' onClick={() => { handleLogin() }}> Login</button> </Link>
                                    </div>
                                    <div className='login-last text-center mt-4'>
                                        <Link to='/signup' className='signUp-link'><h4> Not Registered ? Sign Up </h4> </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;



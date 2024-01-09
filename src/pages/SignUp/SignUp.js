import './SignUp.css';
import loginImage from '../../assets/images/loginImage.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [userType, setUserType] = useState('company');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (userType === 'individual') {

        } else {

        }
    };


    return (
        <>
            <div className="signUp">
                <div className="container signUp-form">
                    <div className="row gx-0 algn-items-center  vh-100 border rounded-2">
                        <div className="col-md-6">
                            <img src={loginImage} alt="signUp-image" className="img-fluid" />
                        </div>
                        <div className='col-md-6 signUp-main'>
                            <div className='signUp-title py-2 mb-4'>
                                <h3>Sign Up</h3>
                                <form>
                                    <div className="form-check form-check-inline signUp-radios">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="individual" checked={userType === 'individual'}
                                            onChange={() => setUserType('individual')} />
                                        <label className="form-check-label" for="inlineRadio1">Company</label>
                                    </div>

                                    <div className="form-check form-check-inline signUp-radios">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="company" checked={userType === 'company'}
                                            onChange={() => setUserType('company')} />
                                        <label className="form-check-label" for="inlineRadio2">Individual</label>
                                    </div>
                                    {userType === 'individual' ? (
                                        <>
                                            <div className="mb-3 text-start signUp-container">
                                                <label htmlFor="name" className="form-label">Company Name</label>
                                                <input type="email" className="form-control" id="name" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-mb-3 text-start  signUp-container ">
                                                <label htmlFor="FirstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="FirstName" />
                                            </div>

                                            <div className="col-mb-3 text-start  signUp-container">
                                                <label htmlFor="LastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="LastName" />
                                            </div>
                                        </>
                                    )}
                                    <div className="mb-3 text-start signUp-container">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email}
                                            onChange={(e) => { setEmail(e.target.value) }} />

                                        <div className="mb-3 text-start signUp-container">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="email" className="form-control" id="password" placeholder="password" value={password}
                                                onChange={(e) => { setPassword(e.target.value) }} />
                                        </div>

                                        <div className='signUp-button'>
                                            <Link to='/home'> <button className='button py-2 px-2 rounded-3' onClick={handleSignUp}>Sign Up</button></Link>
                                        </div>
                                        <div className='signUp-last text-center mt-4'>
                                            <Link to='/login' className='login-link'><h4> Already have an account ? Login </h4> </Link>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp;


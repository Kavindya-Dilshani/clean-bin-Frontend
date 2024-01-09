import './Header.css';

const Header = () => {
    return (
        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid nav-main">
                        <a className="navbar-brand" href="#">CLEAN BIN</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        < div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  nav-ul px-md-5 me-auto mb-3 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link" href="/service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                            <div className='navbar-login px-5 mx-3'>
                                <a href='/login'>Log In / Registration</a>
                            </div>
                            <div className='navbar-pickup px-3 mx-3'>
                                <a href='/pickUp'>Request PickUp</a>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>
        </>
    );
};

export default Header;

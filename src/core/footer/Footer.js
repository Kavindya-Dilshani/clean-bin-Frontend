import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-4 footer-col1 text-start">
                            <h3>Clean Bin</h3>
                            <p className='lh-base'>Your partner in sustainable waste management for a cleaner and greener tomorrow </p>
                            <div className='footer-icons'>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row gx-0">
                                <div className="col-md-3 footer-main">
                                    <h3>Links</h3>
                                    <ul className="footer-lists">
                                        <li>About</li>
                                        <li>Request Pick Up</li>
                                        <li>Management</li>
                                        <li>Start Service</li>
                                    </ul>
                                </div>
                                <div className="col-md-3 footer-main">
                                    <h3>Services</h3>
                                    <ul className="footer-lists">
                                        <li>Dumpster Rentals</li>
                                        <li>Bulk Trash PickUp</li>
                                        <li>Waste Removal</li>
                                        <li>Zero waste</li>
                                    </ul>
                                </div>
                                <div className="col-md-3 footer-main">
                                    <h3> Contact</h3>
                                    <p>234/A, Wijerama Mawatha, Colombo-3</p>
                                    <h4>needhelp@cleanbin.com</h4>
                                    <h4>011- 2347890</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;

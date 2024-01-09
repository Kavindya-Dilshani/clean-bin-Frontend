import './About.css';
import aboutimage from '../../../assets/images/aboutimage.webp';


const About = () => {
    return (
        <>
            <div className="about">
                <div className="container-fluid about-main">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-6">
                            <div className="about-image">
                                <img src={aboutimage} alt="about-image" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="about-col1  text-start">
                                <span> Get to know about us</span>
                                <h2>Leading in Waste Disposal</h2>
                                <h2>Management Services</h2>
                                <p className='lh-base'>We're in this business Since 1987 and we
                                    provide the best services</p>
                                <div className=' about-ul'>
                                    <ul>
                                        <li><i className="fa-solid fa-angle-right"></i> prioritize environmentally friendly methods</li>
                                        <li><i className="fa-solid fa-angle-right"></i>employ cutting-edge technologies to ensure efficient</li>
                                        <li><i className="fa-solid fa-angle-right"></i>provide comprehensive waste disposal solutions</li>
                                    </ul>
                                    <button className="btn2">Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

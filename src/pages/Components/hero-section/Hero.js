import './Hero.css';
import wastehero from '../../../assets/images/wastehero.png'
const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='container-fluid home-main'>
                    <div className='row gx-0 align-items-center'>
                        <div className='col-md-6'>
                            <div className='home-col1 text-start'>
                                <h2> Recycle Your <span>Waste!</span></h2>
                                <h2>Small Changes Big Impact</h2>
                                <p>Be the change you want to see in the world</p>
                                <button className='btn1'> Request PickUp</button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='home-col2 hero-image'>
                                <img src={wastehero} alt='hero-image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;

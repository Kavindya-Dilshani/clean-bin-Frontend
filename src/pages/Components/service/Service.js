import './Service.css';
import trash from '../../../assets/images/trash.png';
import garbage from '../../../assets/images/garbage.png';
import toilet from '../../../assets/images/toilet.png';
import recycle from '../../../assets/images/recycle.png';


const ServiceCard = [
    {
        image: trash,
        title: 'Zero Waste',
        description: 'Eco-friendly waste management'

    },
    {
        image: garbage,
        title: 'Dumpster Rental',
        description: 'Convenient waste disposal solutions',
        topHeight: '3rem'

    },

    {
        image: toilet,
        title: 'Portable Toilet',
        description: 'Clean and mobile restroom options',
        bottomHeight: '4rem'
    },

    {
        image: recycle,
        title: 'Recycling Service',
        description: 'Easy recycling for a greener tomorrow',
        topHeight: '5rem'
    },
];



const Service = () => {
    return (
        <>
            <div className='service'>
                <div className='container service-main '>
                    <div className='row gx-0'>
                        <span> What we're Offering</span>
                        <h2>The Services We’re Providing</h2>
                        {ServiceCard.map((cards, index) => (
                            <div key={index} className='col-md-3'>
                                <div className='service-col1'>
                                    <div className='service-box text-start' style={{ marginTop: cards.topHeight, marginBottom: cards.bottomHeight }}>
                                        <img src={cards.image} alt={`${cards.title} -logo`} className='img-fluid' />
                                        <h3>{cards.title}</h3>
                                        <p>{cards.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
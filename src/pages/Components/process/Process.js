
import './Process.css';
import truck from '../../../assets/images/truck.png';
import waste from '../../../assets/images/waste.png';
import process from '../../../assets/images/process.png';
import bin from '../../../assets/images/bin.png';


const ProcessSteps = [
    {
        image: truck,
        title: 'PickUP',
        description: 'Our dedicated team provides efficient and reliable pickup services'
    },

    {
        image: waste,
        title: 'Collection',
        description: 'We employ advanced waste sorting technologies to ensure responsible handling'
    },

    {
        image: process,
        title: 'Processing',
        description: 'we strive to minimize environmental impact and maximize resource recovery'
    },

    {
        image: bin,
        title: 'Disposed',
        description: 'Our secure disposal methods guarantee the safe and environmentally conscious'
    },
];


const Process = () => {
    return (
        <>
            <div className='process process-main'>
                <div className='container'>
                    <div className='row gx-0'>
                        <span>4 simple steps</span>
                        <h3> Our Working Process</h3>
                        {ProcessSteps.map((step, index) => (
                            <div key={index} className='col-md-3'>
                                <div className='process-col1'>
                                    <img src={step.image} alt={`${step.title}-logo`} className='img-fluid' />
                                    <h3>{step.title}</h3>
                                    <p className='lh-base'>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Process;

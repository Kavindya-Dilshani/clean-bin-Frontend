import './PickUp.css';

export const PickUp = () => {
    return (
        <>
            <div className="pickUp">
                <div className='pickUp-heading text-center'>
                    <h2> Are you interested in a pickUp ?</h2>
                    <p>Please complete the form below, to request a quote, and we’ll be in touch. Or you can call us
                        011- 2347890 and our specialists will provide the necessary help!</p>
                </div>
                <div className="container pickUp-main text-start vh-100">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <h3>Trusted And Reliable</h3>
                            <h3>Waste Collection!</h3>
                            <p>We offer customers regular collection of trash, on a scheduled or call basis
                                with a safe level of service</p>
                            <h3><i className="fa-solid fa-phone"></i>011- 2347890</h3>
                            <hr></hr>
                            <h3><i className="fa-solid fa-location-dot"></i>234/A, Wijerama Mawatha, Colombo-3</h3>
                            <button className="button-first"> Contact Our Team<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                        </div>


                        <div className="col-md-6 pickUp-form">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <select id="inputText" className="form-select">
                                        <option selected>Waste Type</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputText" placeholder='First Name' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputText" placeholder='Last Name' />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputText" placeholder="Company Name (if Applicable)" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Street Address" />
                                </div>
                                <div className="form-check form-check-inline form-radios">
                                    <h4> Collection Frequency</h4>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Once Per Week</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" for="inlineRadio2">Twice Per Week</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputCity" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputCity" placeholder='Email Address' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputText" placeholder='PickUp Date' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputText" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputText" placeholder='PickUp Time' />
                                </div>
                                <div className="col-12 form-button">
                                    <button type="submit" className="btn btn-primary">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default PickUp;

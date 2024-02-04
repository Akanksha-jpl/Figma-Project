
import "../Card/Card.css";


const Card = () => {
    return (
        <div className="section p-5">
            <div className='container'>
                <div className='row'>
                    <h2>You Can do it All With a Form</h2>
                    <p  className="Lorem">Lorem Ipsum dolor sit omet consteture,
                        sodipsting ellitir,sed diam nonumy elmod<br></br>
                        temper invidut ut labor et dolor magna
                        alliquyayam erat,sed diam voluptua.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card mt-0">

                        <div className="card-body" style={{ backgroundColor: "lightgray" }}>
                            <h4 className="card-title text">Products </h4>
                            <p className="card-text"></p>
                            <ul>
                                <li>
                                    EasyForm
                                </li>
                                <li>Product Research</li>
                                <li>Product Feedback</li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body" style={{ backgroundColor: "lightgray"}} >
                            <h4 className="card-title text">Creators</h4>
                            <ul>
                                <li>
                                    Contact Details
                                </li>
                                <li>Customefr Feedback</li>
                                <li>Product Recommendation</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body" style={{ backgroundColor: "lightgray" }} >
                            <h4 className="card-title text">Response</h4>
                            <ul>

                                <li>Request</li>
                                <li>Recieved</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body" style={{ backgroundColor: "lightgray" }} >
                            <h4 className="card-title text">Marketing</h4>
                            <ul>
                                <li>
                                    SignUps
                                </li>
                                <li>Branding</li>
                                <li>Customefr Feedback</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body" style={{ backgroundColor: "lightgray" }} >
                            <h4 className="card-title text">General Buisness</h4>
                            <ul>
                                <li>
                                    Referral
                                </li>
                                <li>Registration</li>
                                <li>Client Onboarding</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">

                        <div className="card-body" style={{ backgroundColor: "lightgray" }} >
                            <h4 className="card-title text">Customer Success</h4>
                            <ul>
                                <li>
                                    FAQ Builder
                                </li>
                                <li>Net Promoter Score</li>
                                <li>Customer Satisfaction</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}
export default Card;
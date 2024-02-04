import "../EasyForm1/EasyForm1.css";
import easylogo from "../../images/easylogo.png";
import easymanas from "../../images/easymanas.png";
import green from "../../images/green.png";
import easycreate from "../../images/easycreate.png";
import easycontactinfo from "../../images/easycontactinfo.png";
import easytravel from "../../images/easytravel.png";
import easyeventbook from "../../images/easyeventbook.png";


const EasyForm1 = () => {
    return(
        <div className="container text-center">
        <div className="row" >
            <div className="col-sm-7"> 
            <img src = {easylogo} alt = {easylogo}  style = {{marginLeft: "-480px"}}  />
            </div>
            <div className="col-sm-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg> <img src={easymanas} alt={easymanas}  style = {{width:"100px" , height:"80px" }}  /><h6 className="Manas">Manas Barai</h6><p className="gmail"> manas.barai@gmail.com</p></div>
        </div>
        <div className="card text-bg-dark">
            <img src={green} className="card-img" alt={green}/>

        </div>
        <hr></hr>
        <div className="white-container">
            <div className="row">
                <div className="col-5">
                    <h2 >Create a new form</h2>
                </div>
                <div className="row row-cols-1 row-cols-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={easycreate}  className="card-img-top" alt={easycreate}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Create New</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={easycontactinfo} className="card-img-top" alt={easycontactinfo}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Contact Booking</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={easytravel} className="card-img-top" alt={easytravel}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Travel Booking Form</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={easyeventbook} className="card-img-top" alt={easyeventbook}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Event Booking Form</h5>

                            </div>
                        </div>

                    </div>
                    <div className="Recent-form">
                        <h2>Recent Forms</h2>
                    </div>





                </div>
                <hr></hr>
                <div className="row row-cols-1 row-cols-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={easycontactinfo} className="card-img-top" alt={easycontactinfo}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Contact Informations</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={easytravel} className="card-img-top" alt={easytravel}/>
                            <div className="card-body">
                                <h5 className="card-title word"> Travel Booking Form</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}
export default EasyForm1;
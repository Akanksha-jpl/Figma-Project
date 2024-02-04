import "../Greenman/Greenman.css";
import boy from "../../images/boy.png";

const Greenman = () => {
    return(
        <div>
        <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-6">
                <img src={boy} className="img-fluid rounded-start" alt={boy}   style = {{width: "480px", height: "370px", marginLeft: "100px"}} />
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">Why EasyForm<br></br>Because After switching to us</h5>
                    <h6>95% of customers say they have better brand experience</h6>
                    <h6>92% customers say they gather more data,more easily</h6>
                    <h6>85% of customers say they reveal deeper insights from data.</h6>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Greenman;
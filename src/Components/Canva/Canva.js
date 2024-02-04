import "../Canva/Canva.css";
import canva from "../../images/canva.png"
import miching from "../../images/miching.png";
import Arrows from "../../images/Arrows.png";

const Canva = () => {
    return (
        <>
                <div className="card mb-3" >
            <div className="section" style = {{background: "lightgray"}}>
                <div className="row">
                    <div className=" col-6">
                    <h1 className='icons-arrow'>Works with your existing<br></br> work-flow</h1>
                        <a href='./' className='icons-arrow'>Browse 50+ Integrations</a>
                        <br></br>
                        <img src={Arrows} alt={Arrows}  className = "arrows" style={{ width: "100px", height: "80px" }} />
                    </div>
                    <div className="col-6">
                    <div className="card">
                        <div className="card-body" style = {{background: "lightgray"}}>
                            <img src={canva} alt={canva} className = "canva" />
                           
                            <img src={miching} alt={miching} style={{ borderRadius: "20px", width: "250px", height: "250px" }} />


                        </div>
                    </div>
                    </div>

                    </div>
                </div>
                </div>
                
                </>
         
    )
}
export default Canva;
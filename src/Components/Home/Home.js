import "../Home/Home.css";
import plant from "../../images/plant.png";
import form from "../../images/form.png";


const Home = () => {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={plant} className="img-fluid rounded-start" alt={plant} style={{ width: "480px", height: "370px", marginLeft: "100px" ,  }} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">How to Embedded Easy<br></br>Forms On Your Site(Easy)   </h5>
                        <button>Get Started it's free</button>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">
                                    To Get Started, you first need to<br></br>Create EasyForm</h5>
                                <p>Lorem ipsum dolor sit amet, consecututer adipiscing elit,sed do
                                    elismud tempor incidudnt ud labore et dolar magna aliqua.
                                    Ut emin ad minim veniam,quis nostro execitation ulaamo, laboris nis tut alique ex ea commodo consiquato.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={form} alt={form} style={{ width: "480px", height: "370px"}} />
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={form} className="img-fluid rounded-start" alt={form} style={{ width: "480px", height: "370px",  marginLeft:"100px" }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Create an online form as easily<br></br> as creating a document</h5>
                                <p>Lorem Ipsum dolor sit omet consteture,
                                    sodipsting ellitir,sed diam<br></br> nonumy elmod
                                    temper invidut ut labor et dolor magna
                                    alliquyayam erat,<br></br>sed diam voluptua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
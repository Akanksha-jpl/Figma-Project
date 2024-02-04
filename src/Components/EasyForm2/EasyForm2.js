import "../EasyForm2/EasyForm2.css";
import green from "../../images/green.png";
import easymanas from "../../images/easymanas.png";
import easylogo from "../../images/easylogo.png";
import easyrequest from "../../images/easyrequest.png";
import easyrecieved from "../../images/easyrecieved.png";

const EasyForm2 = () => {
    return (
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
                <img src={green} className="card-img" alt={green} />
            </div>
            <div>
                <div className="input-group mb-3">
                    <label className="input-group-text" for="inputGroupSelect01">Contact Informations</label>
                    <select className="form-select" id="inputGroupSelect01 ">
                        <option selected>Choose form color</option>


                        <option value="1">Green</option>
                        <option value="2">Blue</option>
                        <option value="3">Red</option>

                    </select>
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">Contact Informations</label>
                        <select className="form-select" id="inputGroupSelect01 ">
                            <option selected>Form Border</option>


                            <option value="1">Green</option>
                            <option value="2">Blue</option>
                            <option value="3">Red</option>

                        </select>
                    </div>
                </div>



                <div className="input-group flex-nowrap">

                    <input type="text" className="form-control" placeholder="Form Description" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Name </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type your name"></input>
            </div>


            <div className='heading'>
                <h5 className="ques">Untitled Question</h5>
                <div className='input'>
                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Add Text Fields</label>

                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Paragraph</label>

                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Radio Button</label>

                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Check Box</label>

                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Dropdown</label>

                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                    <label className="btn" for="option5">Date</label>
                    <div className="input-group flex-nowrap">

                        <input type="text" className="form-control" placeholder="Question" aria-label="Username" aria-describedby="addon-wrapping"></input>
                        <div className="input-group mb-3">
                            <label className="input-group-text" for="inputGroupSelect01">Select Input Type</label>
                            <input type="text" className="form-control" placeholder="Text" aria-label="Username" aria-describedby="addon-wrapping"></input>

                            <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked></input>
                            <label className="btn" for="option5"> Save </label>


                        </div>
                    </div>
                    <div className='Send'>
                        <div className='row'>
                            <div className='col-6'>
                                <button type="button" className="btn btn-primary">Send</button>
                                <hr></hr>
                            </div>
                        </div>
                        <div className='Email'>
                            <h4>Send Via  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z" />
                                </svg>           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                                </svg>    </h4>

                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" placeholder=""
                                    value="Email"></input>

                                <input type="email" className="form-control" id="floatingInputValue" placeholder=""
                                    value="Enter your email address"></input>

                                <input type="email" className="form-control" id="floatingInputValue" placeholder="" value="Subject"></input>
                                <input type="email" className="form-control" id="floatingInputValue" placeholder="" value="Message"></input>
                                <hr></hr>


                            </form>
                            <button type="button" className="btn btn-primary">Send</button>
                            <button type="button" className="btn btn-primary">Cancel</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}
export default EasyForm2;
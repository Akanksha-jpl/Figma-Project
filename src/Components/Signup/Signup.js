import "../Signup/signup.css";
import { useState } from 'react';



import girl from "../../images/girl.png";
import easylogo from "../../images/easylogo.png";



export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-8">
                        <img src={easylogo} alt={easylogo} style={{ marginLeft: "-480px" }} />
                        <div className="form">
                            <div>
                                <span className="user">Join EasyForm</span>
                                <p className="sign">Sign Up for free</p>
                            </div>
                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <form>
                                <label className="label">Name</label>
                                <input
                                    onChange={handleEmail}
                                    className="input"
                                    value={name}
                                    type="name"
                                />
                                <label className="label">Email</label>
                                <input
                                    onChange={handleEmail}
                                    className="input"
                                    value={email}
                                    type="email"
                                />
                                <label className="label">Password</label>
                                <input
                                    onChange={handlePassword}
                                    className="input"
                                    value={password}
                                    type="password"
                                />
                                <label className="label">Confirm Password</label>
                                <input
                                    onChange={handlePassword}
                                    className="input"
                                    value={password}
                                    type="confirm password"
                                />
                                <button onClick={handleSubmit} className="btn" type="submit">
                                    Create Account
                                </button>
                            </form>

                            <a href="./blank" className="forgot">forgot password</a>



                        </div>
                        <input type="checkbox" className="checkbox"></input>
                        <span className="conditions"> I Understand and agree with the</span>
                        <a href="./blank" className="terms">Terms and Conditions</a> and
                        <a href="./blank" className="terms">Privacy Policy</a>
                        <p style={{ color: "grey", fontSize: "medium", marginLeft: "120px" }}>Does'nt have an account yet?
                            <a href="./" className="terms">SignUp</a> </p>

                    </div>





                    <div className="col-4" style={{ background: "light-green", padding: "30px", marginTop: "50px" }}>
                        <div className="row">
                            <div className="girl">
                                <img src={girl} alt={girl} style={{ marginBottom: "60px", borderRadius: "160px", height: "300px" }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
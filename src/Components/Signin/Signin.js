
import "../Signin/signin.css";

import { useState } from "react";
import laptopboy from "../../images/laptopboy.png";
import easylogo from "../../images/easylogo.png";



export default function Signin() {
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
                                <span className="user">Welcome  </span>
                                <p className="log"> Login to your EasyForm</p>
                            </div>
                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <form>
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
                                <button onClick={handleSubmit} className="btn" type="submit">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-4" style={{ background: "light-green", padding: "70px", marginTop: "0px" }}>
                        <div className="row">
                            <div className="laptop">
                                <img src={laptopboy} alt={laptopboy}  className = "lap"  />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
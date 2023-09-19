
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle, AiFillAmazonCircle } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {auth} from "../../firebase"
import InputControl from "../InputControl/InputControl";
import styles from "./Login.module.css";

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/product");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };



    return (
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login</h1>
          <p>Please enter your e-mail and password</p>
           <div className="Social_icons">
            <Link><i><BsFacebook size='1.8rem' color="#1877f2"/></i></Link>
            <Link><i><AiFillTwitterCircle size='1.99rem' color="#55acee"/></i></Link>
            <Link><i><FcGoogle size='1.99rem'/></i></Link>
            <Link><i><AiFillAmazonCircle size='1.99rem' color="#ffa100"/></i></Link>
           </div>
          <InputControl
           
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <InputControl
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />
  
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Login

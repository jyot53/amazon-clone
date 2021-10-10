import React, {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
// import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
const Login = () => { 

    const history = useHistory();
    const [user,setUser] = useState({
         email : "",password : ""
    });

    const handleInputs = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user , [name]:value});
    };

    const loginData = async (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(user.email,user.password).then((auth) => {
            if(auth){
                history.push('/');
            }
        }).catch((err) => alert(err.message))
        // signInWithEmailAndPassword(auth,user.email, user.password)
        // .then(auth => {
        //     history.push('/');
        // })
        // .catch(error => alert(error.message)); 
    } 
    
    const registerData = async (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(user.email, user.password).then((auth) => {
                if(auth){
                    history.push('/');
                }
        }).catch((err) => alert(err.message))
        // createUserWithEmailAndPassword(auth,user.email,user.password)
        // .then((auth) => {
        //     if(auth){
        //         history.push('/');
        //     }
        // }).catch((err) => alert(err.message))
    }

    return (
        <>
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Login" />
            </Link>

            <div className="login__container">
                <h1 className="login__title">Sign-In</h1>

                <form method="post"> 
                    <h3 className="login__label" >Email</h3>
                    <input name="email" value={user.email} onChange={handleInputs} type="email" className=""/>

                    <h3 className="login__label">Password</h3>
                    <input name="password" value={user.password} onChange={handleInputs} type="password" className=""/>
                    <p></p>
                    <button type="submit" onClick={loginData}  className="login__signinbtn">Continue</button>
                </form>

                <p>By continuing, you agree to Amazon's <span>Conditions of Use</span>  and <span> Privacy Notice</span>.</p>
                

            </div>
        </div>
        <div className="login__newaccount">
                <p>New to Amazon?</p>
                <button onClick={registerData} className="login__createbtn">Create your Amazon account</button>
            </div>
        </>
    )
}

export default Login

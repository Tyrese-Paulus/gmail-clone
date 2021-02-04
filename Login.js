import React from 'react';
import "./Login.css";
import { auth, provider } from './firebase';
import Button from '@material-ui/core/Button';
import { login } from './features/userSlice';
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                })
            );
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>

            <div className="demo">
                <p className="title">You may use your real google details or use the demo email address provided:</p>
                <p className="email">Email - demosubject369@gmail.com</p>
                <p className="password">Password - demo12345</p>
            </div>

        </div>
    )
}

export default Login

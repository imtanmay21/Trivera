import classes from './Login.module.css';
import showcaseImage from '../../img/showcase-main.png';

import Card from '../UI/Card';
import fire from '../../helper/fire';

import { useState } from "react";

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const loginHandler = event => {

        event.preventDefault();

        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    default: console.log('Error');
                }
            })
        
        props.onLogin();
    }

    const signUpHandler = event => {

        event.preventDefault();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                    default: console.log('Error');
                }
            })
        props.onLogin();
    }


    return (
        <section className={classes.login}>
            <Card className={classes['login-form']}>
                <form>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id="email" type="email" value={email} autoFocus required onChange={event => {
                            clearErrors();
                            setEmail(event.target.value)}} />
                        <p>{emailError}</p>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input id="password" type="password" value={password} required onChange={event => setPassword(event.target.value)} />
                        <p>{passwordError}</p>
                    </div>
                    {!hasAccount &&
                        <div>
                            <button type="submit" onClick={signUpHandler}>Sign Up</button>
                            <p>Already have an account ? <span onClick={() => setHasAccount(true)}>Sign In</span> </p>
                        </div>}
                    {hasAccount &&
                        <div>
                            <button type="submit" onClick={loginHandler}>Sign In</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(false)}>Sign Up</span> </p>
                        </div>}

                </form>
            </Card>
            <div className={classes.showcase}>
                <h1>Login now to check your knowledge !</h1>
                <img src={showcaseImage} alt="Showcase" />
            </div>
        </section>
    )

}

export default Login;
import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './LoginForm.css';
import '../../../../src/global.css';

const LoginFormContainer = styled.div`
    width: 20%;
    font-size: calc(2px + 1vw);
    background-size: auto;
    background-color: #ECFFFA; /*Green Color Scheme*/
    //background-color: #FCF2FB; /*Fuchsia Color Scheme*/
    font-family: Inter, sans-serif;
    padding: 2% 3%;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 12% auto;
    
`;

const headingStyle = {
    color: '#006E47', /*Green Color Scheme*/
    //color: '#700025', /*Fuchsia Color Scheme*/
    fontSize: 'calc(2px + 1.5vw)',
    textAlign: 'center',
};

const labelStyle = {
    color: '#006E47', /*Green Color Scheme*/
    //color: '#700025', /*Fuchsia Color Scheme*/
    fontWeight: 'bold',
    fontSize: 'calc(2px + 1vw)',
}

const StyledButton = styled.button`
    background-color: rgba(0, 191, 100, 0.56); /*Green Color Scheme*/
    //background-color: rgb(199, 0, 78); /*Fuchsia Color Scheme*/
    color: black; /* sets text color */ /*Green Color Scheme*/
    //color: white; /*Fuchsia Color Scheme*/
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-family: Inter, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    font-size: calc(2px + 1vw);
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    };


    return (
        <LoginFormContainer>
            <h2 style={headingStyle}>Account Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" style={labelStyle}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="Enter email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="link-container">
                    <Link to="/signup" className="create-account">Create an Account</Link>
                    <Link to="/ForgotPassword" className="forgot-password">Forgot Password</Link>
                </div>
                <StyledButton type="submit" className="submit-button">SIGN IN</StyledButton>
            </form>
        </LoginFormContainer>
    );
};
export default LoginForm;
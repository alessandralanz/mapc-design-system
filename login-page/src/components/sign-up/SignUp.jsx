import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './SignUp.css';
import '../../global.css';

const RegistrationFormContainer = styled.div`
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

const headingRegistrationStyle = {
    color: '#006E47', /*Green Color Scheme*/
    //color: '#700025', /*Fuchsia Color Scheme*/
    fontSize: 'calc(2px + 1.5vw)',
    textAlign: 'center',
};

const labelRegistrationStyle = {
    color: '#006E47', /*Green Color Scheme*/
    //color: '#700025', /*Fuchsia Color Scheme*/
    fontWeight: 'bold',
    fontSize: 'calc(2px + 1vw)',
}

const StyledRegistrationButton = styled.button`
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

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        console.log(firstname, lastname, email, password);
    };


    return (
        <RegistrationFormContainer>
            <h2 style={headingRegistrationStyle}>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="firstname" style={labelRegistrationStyle}>First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        className="input"
                        placeholder="Enter first name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <label htmlFor="lastname" style={labelRegistrationStyle}>Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        className="input"
                        placeholder="Enter last name"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <label htmlFor="email" style={labelRegistrationStyle}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="Enter email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" style={labelRegistrationStyle}>Password</label>
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
                    <Link to="/" className="log-in">Already have an account?</Link>
                </div>
                <StyledRegistrationButton type="submit" className="register-button">REGISTER</StyledRegistrationButton>
            </form>
        </RegistrationFormContainer>
    );
};
export default RegistrationForm;
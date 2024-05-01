import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "../mapc-components/src/components/LoginPage/Login/LoginForm.jsx";
import RegistrationForm from "./components/sign-up/SignUp.jsx";
import ForgotPassword from "./components/forgot-password/ForgotPassword.jsx";
import './global.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LoginForm/>}/> {/*sets up LoginForm as default page*/}
              <Route path="/SignUp" element={<RegistrationForm/>}/>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          </Routes>
      </Router>
  );
}

export default App;

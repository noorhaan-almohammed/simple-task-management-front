import { Link } from "react-router-dom";
import "../css/Login.css"; 

function Login() {
  return (
    <div className="login-wrapper">
      <form className="login-form">
        <h2 className="form-title">Login</h2>
        
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password"
            className="form-input"
            required
          />
        </div>
        
        <button type="submit" className="login-button">Login</button>
      </form>
      
      <div className="signup-section">
        <p className="signup-text">Don't have an account?</p>
        <Link to="/signUp" className="signup-link">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
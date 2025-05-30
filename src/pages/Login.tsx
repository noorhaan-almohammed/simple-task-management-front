import { Link } from "react-router-dom";
import styles from "../css/Login.module.css"; 

function Login() {
  return (
    <div className={styles.login_wrapper}>
      <form className={styles.login_form}>
        <h2 className={styles.form_title}>Login</h2>
        
        <div className={styles.input_group}>
          <input 
            type="email" 
            placeholder="Email"
            className={styles.form_input}
            required
          />
        </div>
        
        <div className={styles.input_group}>
          <input 
            type="password" 
            placeholder="Password"
            className={styles.form_input}
            required
          />
        </div>
        
        <button type="submit" className={styles.login_button}>Login</button>
      </form>
      
      <div className={styles.signup_section}>
        <p className={styles.signup_text}>Don't have an account?</p>
        <Link to="/signUp" className={styles.signup_link}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
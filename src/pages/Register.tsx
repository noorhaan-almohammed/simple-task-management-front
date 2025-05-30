import { useRef, type FormEvent } from "react";
import styles from "../css/Register.module.css";
import axios from "axios";

export default function SignupForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const profileImageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/api/register",
        {
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          img_profile_url: profileImageRef.current?.files?.[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //  get Token from response
      const token = response.data["Register Successful"]?.token;
      // store token in local storage
      localStorage.setItem("auth_token", token);
      console.log("token:", token);
      // get Token from local storage
      console.log("token: ", localStorage.getItem("auth_token"));

      console.log("Registered:", response);
      alert("User Registered successfully");
    } catch (error: any) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
      } else {
        alert("Failed to Register User");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Register</h2>

      <div className={styles.formGroup}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          ref={nameRef}
          required
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          required
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          required
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="profileImage">profile Image</label>
        <input
          type="file"
          id="profileImage"
          ref={profileImageRef}
          accept="image/*"
          className={styles.formInput}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        submit
      </button>
    </form>
  );
}



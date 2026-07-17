import styles from "./Login.module.css";
import heroImage from "./../../assets/loginHero.png";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className={styles.loginPage}>
    <div className={styles.header}>
        <div className={styles['left-section']}>
          <h1>EXPOHUB</h1>
        </div>
        <div className={styles['right-section']}>
          <NavLink to="/register" className={styles['register']} >Register</NavLink>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.displayPanel}>
          <img src={heroImage} alt="" />
          <div className={styles.heroSection}>
            <h1>Connecting people.</h1>
            <p>Discover exhibitions, connect with exhibitors...</p>
          </div>
        </div>
        <div className={styles.loginPanel}>
          <div className={styles["login-form"]}>
            <p>lksdfjlds</p>
            <p>lksdfjlds</p>
            <p>lksdfjlds</p>
            <p>lksdfjlds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

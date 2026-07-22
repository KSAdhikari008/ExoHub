import { NavLink } from "react-router-dom";
import heroImage from "./../../assets/loginHero.jpg";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <div className={styles["left-section"]}>
          <h1>EXPOHUB</h1>
        </div>
        <div className={styles["right-section"]}>
          <NavLink to="/register" className={styles["register"]}>
            Register
          </NavLink>
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
        <div className={`${styles.loginPanel} flex justify-center items-center `}>
          <div className=" flex flex-col justify-center items-center bg-amber-200 h-9/10 w-9/10 p-7  ">
            <div className={`${styles.title} basis-1/10`}>
              <h3 className="text-3xl font-medium  ">Welcome Back</h3>
              <p>Sign in to continue to your account</p>
            </div>
            <div className={`${styles["login-form"]} basis-9/10 bg-amber-600`}>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="submit" value="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

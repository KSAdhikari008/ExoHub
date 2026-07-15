import styles from "./Login.module.css";
import heroImage from "./../../assets/hero.png";

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.header}></div>
      <div className={`${styles.main} flex flex-row justify-center items-center`}      >
        <div className={styles.displayPanel}>
          <img src={heroImage} alt="" />
          <div className={styles.heroSection}>
            <h1>Connecting people.</h1>
            <p>Discover exhibitions, connect with exhibitors...</p>
          </div>
        </div>
        <div className={styles.loginPanel}></div>
        <p>Discover exhibitions, connect with exhibitors...</p>
      </div>
    </div>
  );
}

export default Login;

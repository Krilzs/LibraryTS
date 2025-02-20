import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Library By Jero</h1>
        <p>TS Version</p>
      </header>
    </>
  );
}

export default Header;

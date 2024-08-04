import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/auth/signin" className={styles.signInButton}>
        Sign In
      </Link>
      <Link href="/auth/register" className={styles.registerButton}>
        Register
      </Link>
    </nav>
  );
}

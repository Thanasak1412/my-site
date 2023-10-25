import Link from "next/link";
import Image from "next/image";
//
import styles from "./page.module.css";
const getData = async () => {
  const res = await fetch("https://reqres.in/api/users/2");

  return res.json();
};

export default async function Home() {
  const { data } = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>User Profile</h1>
        <div>
          <h2>Email: {data.email}</h2>
          <h2>First name: {data.first_name}</h2>
          <h2>Last name: {data.last_name}</h2>
        </div>

        <Image
          className={styles.logo}
          src="/user-profile.svg"
          alt="User profile image"
          width={120}
          height={120}
          priority
        />

        <div className={styles["button-wrapper"]}>
          <Link href="/blog">Checkout my Blog</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}

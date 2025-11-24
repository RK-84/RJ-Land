import Image from "next/image";
import Link from "next/link";
import styles from "./notFound.module.css";
export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.imgNotFound}>
        <Image
          src="/images/notFound.png"
          alt="not-Found"
      fill
          priority
          className={styles.NotFoundImage}
        />
        <div className={styles.returnHomeContainer}>
          <Link className={styles.returnHomeLink} href="/">بازگشت به صفحه اصلی</Link>
        </div>
      </div>
    </main>
  );
}

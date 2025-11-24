import React from "react";
import FooterData from "./FooterData";
import styles from "./Footer.module.css";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.headerFooter}>
        <Link href="/">
          <Image src="/logo/RJLand.png" width={125} height={125} alt="RJLand" className={styles.rjLogo} priority/>
        </Link>{" "}
        <div>
          <Link href="#top" className={styles.goUp} >
            <p>بازگشت به بالا</p>
            <IoIosArrowUp className={styles.upIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.FooterData}>
        <FooterData />
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./resume.module.css";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1JA8XZvtrvRig5UON6-fZHqJAVU28kpLZ";

export default function ResumePage() {
  function getResume() {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <main className={styles.container}>
      <div className={styles.resumeWrapper}>
        <div className={styles.resumePreview}>
          <Image
            src="/resume/resume.png"
            alt="Resume preview"
            width={1000}
            height={1414}
            priority
            className={styles.resumeImage}
          />

          <button
            type="button"
            className={styles.resumeDownload}
            onClick={getResume}
            aria-label="دانلود رزومه به صورت PDF"
          >
            <Image
              src="/download.svg"
              alt=""
              width={24}
              height={24}
              className={styles.downloadIcon}
            />

            <span>دانلود PDF</span>
          </button>
        </div>

        <Link
          href="https://drive.google.com/file/d/1JA8XZvtrvRig5UON6-fZHqJAVU28kpLZ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
        >
          <span className={styles.linkIcon}>↗</span>
          <span>مشاهده رزومه آنلاین</span>
        </Link>
      </div>
    </main>
  );
}


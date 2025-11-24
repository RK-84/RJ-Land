import React from "react";
import Carusel from "./Carusel";
import styles from "./SlideCarousel.module.scss";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { TransitionWrapper } from "../Loading/TransitionWrapper";

const SlideCarousel = ({ PRD }) => {
  return (
    <section className={styles.Container}>
      <div className={styles.contentContainer}>
        <pre className={styles.offerText}>
          𝓡𝓙
          <br />
          𝕆𝕗𝕗
          <i>％ </i>
        </pre>
        <TransitionWrapper href="/Product/specialCategory/incredibleOffers">
          <div className={styles.ShowAllIncredibleOffers}>
            نمایش همه
            <AiOutlineLeft className={styles.AiOutlineLeft} />
          </div>
        </TransitionWrapper>
      </div>

      <div className={styles.ContainerCarousel}>
        <Carusel data={PRD} />
      </div>
    </section>
  );
};

export default SlideCarousel;

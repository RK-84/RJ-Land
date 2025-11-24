import React from 'react'
import styles from "./EmptyBasket.module.css"
const EmptyBasket = () => {
  return (
    <section>
      <div className={styles.EmptyBasketContainer}>
        <p>سبد خرید</p>
        <span>(</span>

        <span>خالی</span>
          <span>)</span>

      </div>
    </section>
  )
}

export default EmptyBasket
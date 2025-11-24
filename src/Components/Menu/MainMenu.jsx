import styles from "./MainMenu.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { LuBadgePercent, LuFlame } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { TransitionWrapper } from "../Loading/TransitionWrapper";
const MainMenu = () => {
  return (
    <nav className={styles.menuContainer}>
      <div className={styles.productCategoriesContainer}>
        <div className={styles.productCategories}>
          <div className={styles.AiOutlineMenu}>
            <AiOutlineMenu />
          </div>
          <span>دسته بندی محصولات</span>
        </div>

        <div className={styles.layer}>
          <MobileMenu />
        </div>
      </div>

      <TransitionWrapper href="/Product/specialCategory/incredibleOffers">
        <div className={styles.headerTitles}>
          <LuBadgePercent className={styles.MLogo} />
          <span>شگفت‌انگیزها</span>
        </div>
      </TransitionWrapper>

      <TransitionWrapper href="/Product/specialCategory/bestSelling">
        <div className={styles.headerTitles}>
          <LuFlame className={styles.MLogo} />
          <span>پرفروش‌ ترین‌ها</span>
        </div>
      </TransitionWrapper>
    </nav>
  );
};

export default MainMenu;

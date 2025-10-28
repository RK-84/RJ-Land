"use client";
import React, { Suspense, useRef, useState } from "react";
import Card from "./Card";
import styles from "./CardDetails.module.scss";
import { CgReorder } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import Loading from "../Loading/Loading";

const CardDetails = ({ product }) => {
  const [state, setState] = useState("");
  const [showProduct, setShowProduct] = useState(product);
  const [showSorting, SetshowSorting] = useState(false);
  const [showFilter, SetshowFilter] = useState(false);

  let cats = [];
  product.forEach((item) => {
    if (cats.length == 0) {
      cats.push(item.category);
    } else {
      let found = cats.find((item2) => {
        return item2 == item.category;
      });
      if (!found) {
        cats.push(item.category);
      }
    }
  });
  let minProducts = showProduct;
  let minResult = [];
  while (minProducts.length !== 0) {
    for (let index1 = 0; index1 < minProducts.length; index1++) {
      let a = -1;
      for (let index2 = 0; index2 < minProducts.length; index2++) {
        let resultPrWA =
          minProducts[index1].priceWithDiscount === 0
            ? minProducts[index1].price
            : minProducts[index1].priceWithDiscount;
        let resultPrWB =
          minProducts[index2].priceWithDiscount === 0
            ? minProducts[index2].price
            : minProducts[index2].priceWithDiscount;
        if (minProducts[index1].stock == 0) {
          minResult.push(minProducts[index1]);
          minProducts = minProducts.filter((item) => {
            return item !== minProducts[index1];
          });
          a = -1;
          break;
        } else if (resultPrWA >= resultPrWB) {
          a = minProducts[index1];
        } else {
          a = -1;
          break;
        }
      }
      if (a !== -1) {
        minResult.unshift(a);
        minProducts = minProducts.filter((item) => {
          return item !== a;
        });
        break;
      }
    }
  }

  let maxProducts = showProduct;
  let maxResult = [];
  while (maxProducts.length !== 0) {
    for (let index1 = 0; index1 < maxProducts.length; index1++) {
      let a = -1;

      for (let index2 = 0; index2 < maxProducts.length; index2++) {
        let resultPrWA =
          maxProducts[index1].priceWithDiscount === 0
            ? maxProducts[index1].price
            : maxProducts[index1].priceWithDiscount;
        let resultPrWB =
          maxProducts[index2].priceWithDiscount === 0
            ? maxProducts[index2].price
            : maxProducts[index2].priceWithDiscount;
        if (maxProducts[index1].stock == 0) {
          maxResult.push(maxProducts[index1]);
          maxProducts = maxProducts.filter((item) => {
            return item !== maxProducts[index1];
          });
          a = -1;
          break;
        } else if (resultPrWA <= resultPrWB) {
          a = maxProducts[index1];
        } else {
          a = -1;
          break;
        }
      }
      if (a !== -1) {
        maxResult.unshift(a);
        maxProducts = maxProducts.filter((item) => {
          return item !== a;
        });
        break;
      }
    }
  }
  const checkboxQ = useRef();

  const availablePrds = () => {
    const availableResult = product.filter((item) => {
      return item.stock !== 0;
    });
    if (checkboxQ.current.checked === true) {
      setShowProduct(availableResult);
    } else {
      setShowProduct(product);
    }
  };

  const [showCategories, setShowCategories] = useState([]);
  const IsExistInSelectedCats = (props, SelectedCats) => {
    let exist = -1;
    for (let index = 0; index < SelectedCats.length; index++) {
      if (SelectedCats[index] == props) {
        exist = index;
      }
    }
    return exist;
  };
  const clickHandler = (props) => {
    let SelectedCats = showCategories;
    let result = [];
    const exist = IsExistInSelectedCats(props, SelectedCats);
    if (exist == -1) {
      SelectedCats.push(props);
    } else {
      SelectedCats.splice(exist, 1);
    }
    for (let index = 0; index < SelectedCats.length; index++) {
      const ProductsCats = product.filter((item) => {
        return item.category.includes(SelectedCats[index]);
      });
      result.push(...ProductsCats);
    }
    {
      showCategories.length === 0
        ? setShowProduct(product)
        : setShowProduct(result);
    }
    setShowCategories(SelectedCats);
  };

  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
  };

  return (
    <div className={styles.cardDetailsConrainer}>
      <Suspense>
        <div className={styles.showModalContainer}>
          <div className={styles.showModal}>
            <div
              className={styles.showFilter}
              onClick={() => SetshowFilter(!showFilter)}
            >
              <VscSettings className={styles.sfIcon} />
              <span>فیلتر</span>
            </div>
            <div
              className={styles.showSorting}
              onClick={() => SetshowSorting(!showSorting)}
            >
              <CgReorder className={styles.sfIcon} />
              <span>مرتب سازی</span>
            </div>
          </div>
        </div>
        {showFilter && (
          <div className={styles.containerModal}>
            <div className={styles.childModal}>
              <div className={styles.modalHeader}>
                <p>فیلتر ها </p>

                <RxCross2
                  className={styles.Cross}
                  onClick={() => SetshowFilter(!showFilter)}
                />
              </div>

              <div className={styles.availableG}>
                <p>فقط کالا های موجود</p>
                <label className={styles.switch} onClick={availablePrds}>
                  <input type="checkbox" ref={checkboxQ} />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div
                className={`${styles.categoriesTitle} ${styles.modalContent}`}
              >
                <p>برند ها</p>
                <MdKeyboardArrowDown />
              </div>
              <div className={styles.categoryDropdown}>
                {cats.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        onClick={() => clickHandler(item)}
                        className={styles.categoryCheckbox}
                      />
                      <label
                        className={
                          item === state.item
                            ? styles.cats
                            : styles.itemCategorys
                        }
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {showSorting && (
          <div className={styles.containerModal}>
            <div className={styles.childModal}>
              <div className={styles.modalHeader}>
                <p> مرتب سازی بر اساس</p>
                <RxCross2
                  className={styles.Cross}
                  onClick={() => SetshowSorting(!showSorting)}
                />
              </div>
              <div
                className={styles.modalContent}
                onClick={() => setShowProduct(product)}
              >
                <p>پربازدیدترین</p>
              </div>
              <div
                className={styles.modalContent}
                onClick={() => setShowProduct(maxResult)}
              >
                <p>بیشترین قیمت</p>
              </div>
              <div
                className={styles.modalContent}
                onClick={() => setShowProduct(minResult)}
              >
                <p>کمترین قیمت</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles.filterSectionContainer}>
          <div className={styles.filterSection}>
            <div className={styles.filterLogo}>
              <BsFilter className={styles.FilterIcon} />
              <p>فیلترها</p>
            </div>

            <div className={styles.categories}>
              <div className={styles.availableG}>
                <p>فقط کالا های موجود</p>
                <label className={styles.switch} onClick={availablePrds}>
                  <input type="checkbox" ref={checkboxQ} />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div>
                <div className={styles.categoriesTitle}>
                  <p>برند ها</p>
                  <MdKeyboardArrowDown />
                </div>

                <div className={styles.categoryDropdown}>
                  {cats.map((item, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          onClick={() => clickHandler(item)}
                          className={styles.categoryCheckbox}
                        />
                        <label
                          className={
                            item === state.item
                              ? styles.cats
                              : styles.itemCategorys
                          }
                        >
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.mainDropdown}></div>
          </div>
        </div>
      </Suspense>
      <Suspense>
        <div className={styles.cardContainer}>
          <div className={styles.sortingContainer}>
            <div className={styles.sorting}>
              <div className={styles.title}>
                <CgReorder className={styles.order} />

                <span>مرتب سازی:</span>
              </div>
              <div onClick={() => setShowProduct(product)}>
                <p>پر بازدیدترین</p>
              </div>
              <div onClick={() => setShowProduct(maxResult)}>
                <p>بیشترین قیمت</p>
              </div>
              <div onClick={() => setShowProduct(minResult)}>
                <p>کمترین قیمت</p>
              </div>
            </div>
            <div className={styles.length}>
              <span>{product.length}</span>
              <p>کالا</p>
            </div>
          </div>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <div className={styles.Card} onClick={showLoading}>
                {showProduct.map((item) => {
                  return <Card product={item} key={item.id} />;
                })}
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default CardDetails;

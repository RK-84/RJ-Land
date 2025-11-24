"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ImageModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const ImageModal = ({ images, namePrd, mainImage }) => {
  const [modal, setModal] = useState(false);
  const [slideImag, setSlideImag] = useState(0);
  const nextSlideImage = () => {
    setSlideImag(slideImag === images.length - 1 ? 0 : slideImag + 1);
  };

  const prevSlideImage = () => {
    setSlideImag(slideImag === 0 ? images.length - 1 : slideImag - 1);
  };

  const clickToModal = () => {
    setModal(!modal);
  };

  return (
    <section className={styles.imagesProduct}>
      {modal && (
        <>
          <div className={styles.containerModalIMages}>
            <div className={styles.childModalIMages}>
              <div className={styles.closeModalIMagesContainer}>
                <div className={styles.closeModalIMagesChild}>
                  <div className={styles.officialImages}>
                    <h3>تصاویر رسمی</h3>
                  </div>

                  <div className={styles.closeIcon}>
                    <AiOutlineCloseCircle onClick={clickToModal} />
                  </div>
                </div>

                <div className={styles.bunchPhotos}>
                  <p>عکس</p>
                </div>
              </div>
              <div className={styles.containerModalSlideIMages}>
                <div className={styles.childModalSlideIMages}>
                  <div className={styles.rightsideContainer}>
                    <p className={styles.nameProduct}>{namePrd}</p>
                    <div className={styles.rightside}>
                      {images.map((item, index) => {
                        return (
                          <div
                            key={item.id}
                            className={
                              slideImag !== index
                                ? styles.slideImage
                                : `${styles.slideImage} ${styles.selectedImage}`
                            }
                            onClick={() => setSlideImag(index)}
                          >
                            <Image
                              src={item.original}
                              alt={namePrd}
                              width={70}
                              height={70}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.leftSildeContainer}>
                    <div className={styles.mainModalIMages}>
                      <div className={styles.leftArrow}>
                        <BiChevronRight
                          onClick={prevSlideImage}
                          className={styles.Arrow}
                        />
                      </div>
                      <div className={styles.productImages}>
                        {images.map((item, index) => {
                          return (
                            <Image
                              key={index}
                              src={item.original}
                              alt="productImage"
                              width={400}
                              height={400}
                              className={
                                slideImag === index
                                  ? styles.slide
                                  : `${styles.slide} ${styles.slideHidden}`
                              }
                            />
                          );
                        })}
                      </div>

                      <div className={styles.rightArrow}>
                        <BiChevronLeft
                          onClick={nextSlideImage}
                          className={styles.Arrow}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.mainImage}>
        {images.map((item) => {
          return (
            <div key={item.id}>
              <div onClick={clickToModal} className={styles.showMore}>
                <Image
                  src={item.original}
                  alt={namePrd}
                  width={70}
                  height={70}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageModal;

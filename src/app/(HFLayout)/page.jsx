import styles from "./page.module.css";
import IncCarusel from "@/Components/Carusel/IncCarusel";
import ProductCarusel from "@/Components/Product/ProductCarusel";
import * as repository from "../../../RestConfig/RestRequest";
import SixIcon from "@/Components/SixIcon/SixIcon";
import { Suspense } from "react";
import MainSlider from "@/Components/Slider/MainSlider";



async function getAllProduct() {
  const response = await repository.Get("myProducts");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
async function getAllHomeImages() {
  const response = await repository.Get("HomeImages");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
export default async function Home() {
  const data = await getAllProduct();
  const homeImages = await getAllHomeImages();
  return (
    <>
      <Suspense>
        <MainSlider/>
      </Suspense>
      <div className={styles.PdContainer}>
        <Suspense>
          <SixIcon />
        </Suspense>
        <Suspense>
          <IncCarusel />
        </Suspense>
        <Suspense>
          <ProductCarusel data={data} homeImagesData={homeImages} />
        </Suspense>
      </div>
    </>
  );
}

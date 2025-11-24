import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import SlideCarousel from "../Carusel/SlideCarousel";

async function getAllProductInc() {
  const response = await repository.Get("myProducts/incredibleOffers");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const IncCarusel = async () => {
  const PrdData = await getAllProductInc();

  return (
    <div>
      <SlideCarousel PRD={PrdData} />
    </div>
  );
};

export default IncCarusel;

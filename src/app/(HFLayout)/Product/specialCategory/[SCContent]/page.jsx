import React from "react";
import * as repository from "../../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllProduct(props) {
  const response = await repository.Get(`myProducts/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const SCContent = async (props) => {
  const context = await props.params;
  const data = await getAllProduct(context.SCContent);
 

  return (
    <>
      <div>
          <CardDetails product={data} />
      </div>
    </>
  );
};

export default SCContent;

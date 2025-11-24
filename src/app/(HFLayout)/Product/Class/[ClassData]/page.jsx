import React from "react";
import * as repository from "../../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllProduct(props) {
  const response = await repository.Get(`myProducts/type/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const ClassData = async (props) => {
  const context = await props.params;
  const SearchParams = await props.searchParams;
  const data = await getAllProduct(context.ClassData);
const gamingResult=data.filter(item=>{
  return item.gaming === true
})
  return (
    <>
        {SearchParams.tl === "Xgaming" ?
        <CardDetails product={gamingResult} />
        :<CardDetails product={data} />
       }
    </>
  );
};

export default ClassData;

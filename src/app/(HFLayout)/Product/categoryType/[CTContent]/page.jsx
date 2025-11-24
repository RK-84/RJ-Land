import React from "react";
import * as repository from "../../../../../../RestConfig/RestRequest";
import CardDetails from "@/Components/Card/CardDetails";
async function getAllCategoryType(props) {
  const response = await repository.Get(`myProducts/category/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const CTContent = async (props) => {
  const context = await props.params; 
  const SearchParams = await props.searchParams;
  const data = await getAllCategoryType(context.CTContent);
  const result = data.filter((item) => {
    return item.type.includes(SearchParams.class);

  });
  return (
    <div>
      {SearchParams.class ? <CardDetails product={result} /> :  <CardDetails product={data} />}
     
    </div>
  );
};

export default CTContent;

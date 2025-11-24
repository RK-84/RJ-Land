import React from "react";
import * as repository from "../../../../../RestConfig/RestRequest";
import Image from "next/image";
import CardDetails from "@/Components/Card/CardDetails";
import styles from "./SearchResult.module.css";
async function getSearchResult(props) {
  const response = await repository.Get(`myProducts/search/${props}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}
const SearchResult = async (props) => {
  const context = await props.params;
  const data = await getSearchResult(context.searchResult);

  return (
    <div>
      {data.length === 0 ? (
        <div className={styles.notFoundProduct}>
          <Image
            src="/images/not-found-product.png"
            alt="notFoundProduct"
            width={282}
            height={255}
            className={styles.notFoundProductImg}

          />
          <h3 className={styles.titleText}>کالایی یافت نشد.</h3>
          <p className={styles.text}>
            لطفا فیلترها را ویرایش کنید یا واژه دیگری را جستجو کنید.
          </p>
        </div>
      ) : (
        <div>
          <CardDetails product={data} />
        </div>
      )}
    </div>
  );
};

export default SearchResult;

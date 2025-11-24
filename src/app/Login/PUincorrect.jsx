import React from "react";
import styles from "./PUincorrect.module.css";
import { PiSealWarningDuotone } from "react-icons/pi";

const PUincorrect = ({ErrorMessage , searchParamsStyle}) => {
  return (
    <div className={styles.inc}>
      <PiSealWarningDuotone className={styles.PiSealWarning}/>
      {searchParamsStyle ? <p className={styles.errorMessage}>{ErrorMessage}</p> :  <span> {ErrorMessage}</span>}
     
    </div>
  );
};

export default PUincorrect;

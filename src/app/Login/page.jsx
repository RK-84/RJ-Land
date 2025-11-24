"use client";
import React, { useState, useTransition } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";
import * as repository from "../../../RestConfig/RestRequest";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import PUincorrect from "./PUincorrect";
import Loading from "@/Components/Loading/Loading";
import { useDispatch } from "react-redux";
import { setToken } from "@/Redux/Slices/UserSlice";
import { FaRegEyeSlash } from "react-icons/fa";

const LogIn = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const validation = Yup.object({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("پسورد  خود را وارد کنید"),
  });
  const FormFields = {
    username: "",
    password: "",
  };
  const [incorrect, setIncorrect] = useState(false);
  const [status, setStatus] = useState(false);
  const submitHandler = (values) => {
    try {
      repository
        .Post("users/login", values)
        .then((response) => {
          return response;
        })
        .then((mainResponse) => {
          setStatus(true);
          dispatch(setToken(mainResponse.data.token));
          router.back(1);
        })
        .catch((err) => {
          setIncorrect(true);
          setTimeout(() => {
            setIncorrect(false);
          }, 3000);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.FieldContainer}>
        {incorrect && (
          <PUincorrect ErrorMessage="نام کاربری یا رمزعبور نادرست است" />
        )}

        <p className={styles.title}>ورود </p>
        <Formik
          onSubmit={submitHandler}
          initialValues={FormFields}
          validationSchema={validation}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <div className={styles.form__group}>
              <Field
                name="username"
                type="text"
                className={styles.form__field}
                placeholder="نام کاربری"
              />
              <ErrorMessage
                name="username"
                component={"p"}
                className={styles.ErrorMessage}
              />
            </div>

            <div className={`${styles.form__group} ${styles.password__field}`}>
              <Field
                name="password"
                type={show ? "text" : "password"}
                className={styles.form__field}
                placeholder="کلمه عبور"
              />

              {show ? (
                <FaRegEyeSlash 
                   className={styles.eyeIcon}
                  onClick={() => setShow(!show)}/>
              ) : (
                <FaRegEye
                  className={styles.eyeIcon}
                  onClick={() => setShow(!show)}
                />
              )}
              <ErrorMessage
                name="password"
                component={"p"}
                className={styles.ErrorMessage}
              />
            </div>

            <button> {status ? "در حال انجام عملیات ..." : "ورود"}</button>

            <div className={styles.goSign}>
              <span>حساب کاربری ندارید؟</span>
              <Link href="/Signup">ثبت نام</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default LogIn;








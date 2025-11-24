"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import * as repository from "../../../RestConfig/RestRequest";
import styles from "./Signup.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setToken } from "@/Redux/Slices/UserSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PUincorrect from "../Login/PUincorrect";
const SignUp = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const validation = Yup.object({
    name: Yup.string()
      .min(2, "تعداد حروف کم است ! ")
      .max(10, "تعداد حروف زیاد است ! !")
      .required("نام خود را وارد کنید"),
    lastname: Yup.string()
      .min(3, "تعداد حروف کم است ! ")
      .max(15, "تعداد حروف زیاد است ! !")
      .required("نام خانوادگی خود را وارد کنید"),
    username: Yup.string()
      .min(2, "تعداد حروف کم است ! ")
      .max(20, "تعداد حروف زیاد است ! !")
      .required("نام کاربری خود را وارد کنید"),
    mobilenumber: Yup.number().required("شماره همراه خود را وارد کنید"),
    password: Yup.string().required("پسورد  خود را وارد کنید"),
    email: Yup.string()
      .email("فرمت ایمیل را به درستی وارد کنید !!")
      .required("ایمیل  خود را وارد کنید"),
  });

  const FormFields = {
    name: "",
    lastname: "",
    username: "",
    mobilenumber: "",
    password: "",
    email: "",
  };
  const [incorrect, setIncorrect] = useState(false);
  const [status, setStatus] = useState(false);

  const submitHandler = (values) => {
    console.log(values);
    repository
      .Post("users/register", values)

      .then((response) => {
        console.log(response.data);
        if (response.data.id === 0) {
          setIncorrect(true);
          setTimeout(() => {
            setIncorrect(false);
          }, 3000);
        } else {
          setStatus(true);
          repository
            .Post("users/login", values)

            .then((loginResponse) => {
              dispatch(setToken(loginResponse.data.token));
              router.back(1);
            });
        }
      });
  };
  const [show, setShow] = useState(false);

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.MainFieldContainer}>
          {incorrect && <PUincorrect ErrorMessage="نام کاربری موجود هست" />}
          <p className={styles.title}> ثبت نام </p>

          <Formik
            onSubmit={submitHandler}
            initialValues={FormFields}
            validationSchema={validation}
            validateOnBlur={false}
            validateOnChange={false}
          >
            <Form>
              <div className={styles.FieldContainer}>
                <div className={styles.form__group}>
                  <Field
                    name="name"
                    type="text"
                    className={styles.form__field}
                    placeholder="نام"
                  />
                  <ErrorMessage
                    name="name"
                    component={"p"}
                    className={styles.ErrorMessage}
                  />
                </div>

                <div className={styles.form__group}>
                  <Field
                    name="lastname"
                    type="text"
                    className={styles.form__field}
                    placeholder="نام خانوادگی"
                  />
                  <ErrorMessage
                    name="lastname"
                    component={"p"}
                    className={styles.ErrorMessage}
                  />
                </div>

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

                <div className={styles.form__group}>
                  <Field
                    name="mobilenumber"
                    type="number"
                    className={styles.form__field}
                    placeholder="شماره همراه"
                  />
                  <ErrorMessage
                    name="mobilenumber"
                    component={"p"}
                    className={styles.ErrorMessage}
                  />
                </div>

                <div
                  className={`${styles.form__group} ${styles.password__field}`}
                >
                  <Field
                    name="password"
                    type={show ? "text" : "password"}
                    className={styles.form__field}
                    placeholder="کلمه عبور"
                  />
                  {show ? (
                    <FaRegEyeSlash
                      className={styles.eyeIcon}
                      onClick={() => setShow(!show)}
                    />
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

                <div className={styles.form__group}>
                  <Field
                    name="email"
                    type="text"
                    className={styles.form__field}
                    placeholder="ایمیل"
                  />
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className={styles.ErrorMessage}
                  />
                </div>
              </div>

              <button>{status ? "در حال انجام عملیات ..." : "ثبت نام"}</button>

              <div className={styles.goSign}>
                <span>حساب کاربری دارید؟</span>
                <Link href="/Login">ورود</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </main>
    </>
  );
};

export default SignUp;

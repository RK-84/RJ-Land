import localFont from "next/font/local";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import MainMenu from "@/Components/Menu/MainMenu";
import React, { Suspense } from "react";
import LowerPart from "@/Components/LowerPart/LowerPart";

const layout = ({ children }) => {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>
      <LowerPart />
      <Suspense>
        <MainMenu />
      </Suspense>
      {children}
      <Footer />
    </div>
  );
};

export default layout;

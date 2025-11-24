"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

export const TransitionWrapper = ({ children, href }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push(href);
    });
  };
  return (
    <>
      <div onClick={handleClick}>
        {children}
      </div>
      {isPending && <Loading />}
    </>
  );
};

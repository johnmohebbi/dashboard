"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";
import { useState } from "react";

const Pagination = ({ count }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams();
  const item_per_page = 2;
  const hasNext = item_per_page + item_per_page * (parseInt(page) - 1) >= count;
  const hasPrev = item_per_page * (parseInt(page) - 1) <= 0;

  const prevButtonHandler = (e) => {
    // if (page > (count+ 1) / 2 ) {
    //   params.set("page", (count+ 1) / 2);
    // } else {
    //   const numberP = parseInt(page) - 1;
    //   params.set("page", numberP);
    // }
    const numberP = parseInt(page) - 1;
    params.set("page", numberP);
    router.replace(`${pathName}?${params}`);
  };
  const nextButtonHandler = (e) => {
    const numberP = parseInt(page) + 1;
    params.set("page", numberP);
    router.replace(`${pathName}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.previewButton}
        disabled={hasPrev}
        onClick={prevButtonHandler}
      >
        prev
      </button>
      <button
        className={styles.nextButton}
        disabled={hasNext}
        onClick={nextButtonHandler}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;

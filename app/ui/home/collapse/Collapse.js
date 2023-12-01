"use client";
import { FaPlus, FaMinus } from "react-icons/fa6";
//css
import styles from "./Collapse.module.css";
import { useState } from "react";
const Collapse = ({ title }) => {
  const Components = {
    minus: FaMinus,
    plus: FaPlus,
  };
  const [Icon, setIcon] = useState("plus");
  const clickHandler = (e) => {
    console.log(e);
    const content = e.target.nextElementSibling;
    if (!!content.style.maxHeight) {
      e.target.style.borderBottom = null;

      content.style.maxHeight = null;
      setIcon("plus");
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      e.target.style.borderBottom = '1px solid #5758e0';
      setIcon("minus");
    }
  };
  return (
    <>
      <div className={styles.collapsible} onClick={clickHandler}>
        <h4>{title}</h4>
        {Icon === "plus" && <Components.plus size={21} />}
        {Icon === "minus" && <Components.minus size={21} />}
      </div>
      <div className={`${styles.content}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
};

export default Collapse;

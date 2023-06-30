import React, { useState } from "react";
import css from "./Works.module.scss";
import Webdesign from "../../Component/Webdesign/Webdesign";
import Development from "../../Component/Development/Development";
import ProductDesign from "../../Component/ProductDesign/ProductDesign";

function Works() {
  const data = [
    "Web Design",
    "Development",
    "Ilustration",
    "Product Design",
    "Social Media",
  ];
  const [work,setWork] = useState("Web Design")

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.list}>
            {data.map((item) => (
              <div
                className={css.list_item}
                style={{
                  '--content': `'${item}'`,
                  '--color': 'pink', // Modify color as needed
                  '--fontSize': '50px', // Modify fontSize as needed
                }}
                key={item}
                onClick={() => setWork(item) }
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={css.right}>
          {work === "Web Design" ? (<Webdesign/>) : work === "Development" ? (<Development/>) : <ProductDesign/>}
        </div>
      </div>
    </div>
  );
}

export default Works;

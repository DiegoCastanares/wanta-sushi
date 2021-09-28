import React from "react";
import "./Item.css";
import ItemCount from "./ItemCount";
import atun from "../imagenes/atun.jpg";

const Item = () => {
  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="inner-card">
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>Roll de Atún</h4>
          </div>
          <img width="100%" src={atun} alt="" />{" "}
          <div className="mt-2 px-2">
            {" "}
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              convallis purus ligula, sed elementum massa pellentesque sed.
              Vivamus quis tempor quam. Integer nec dignissim tellus.
            </small>{" "}
          </div>
          <div className="px-2 mt-3">
            <h3>$500</h3>
          </div>
          <div className="px-2 mt-3">
            {" "}
            <ItemCount stock="20" initial="1" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

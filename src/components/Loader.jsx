import React from "react";
import "./sass/loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

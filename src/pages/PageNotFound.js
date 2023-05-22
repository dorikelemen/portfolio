import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div
      className="extendedContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <h1>Ooooopsss...</h1>
      <p>Page is not ready yet</p>
      <Link to="/">
        <button className="simpleButton">Take me somewhere safe</button>
      </Link>
    </div>
  );
}

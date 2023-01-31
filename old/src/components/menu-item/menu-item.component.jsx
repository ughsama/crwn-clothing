import React from "react";

function MenuItem({ title, subtitle }) {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default MenuItem;

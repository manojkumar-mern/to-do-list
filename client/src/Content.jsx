import React from "react";
import ItemssList from "./ItemssList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemssList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />) : (
        <p style={{ color: "white", backgroundColor: "black" }} className="empty">
          Your list is empty
        </p>
      )}
    </>
  );
};

export default Content;

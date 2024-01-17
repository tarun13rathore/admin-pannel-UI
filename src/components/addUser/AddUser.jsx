import React from "react";
import "./AddUser.scss";

const AddUser = ({ setOpen, slug, columns }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main_add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h3>Add New {`${slug}`}</h3>
        <form onSubmit={() => submitHandler}>
          {columns
            ?.filter((item) => item.field !== "id" && item.field !== "img")
            .map((col) => {
              return (
                <>
                  <div className="item">
                    <label>{col.headerName}</label>
                    <input type={col.type} placeholder={col.field} />
                  </div>
                </>
              );
            })}
        </form>
      </div>
    </div>
  );
};

export default AddUser;

import React, { useState } from "react";
import "./product.scss";
import DataTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/addModal/Add";
import { productData } from "../../components/menu/Data";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          className="avatarImg"
          alt="avatar"
        />
      );
    },
  },
  { field: "title", headerName: "Title", width: 100 },
  { field: "color", headerName: "Color", width: 100 },
  { field: "price", headerName: "Price", width: 100 },
  // {
  //   field: "price",
  //   headerName: "Price",
  //   type: "number",
  //   width: 90,
  // },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 100,
  },
  { field: "inStock", headerName: "In Stock", width: 100, type: "boolean" },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="products">
          <div className="info">
            <h1>Product</h1>
            <button onClick={() => setOpen(true)}>Add New Product</button>
          </div>
        </div>
        <div>
          <DataTable columns={columns} rows={productData} slug="product" />
        </div>
        {open && <AddUser slug="Product" columns={columns} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Products;

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./user.scss";
import DataTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/addUser/AddUser";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Avatar",
    width: 70,
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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "status", headerName: "Status", width: 100, type: "boolean" },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, status: true },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: true,
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, status: true },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, status: false },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    status: true,
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, status: true },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: false,
  },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, status: true },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, status: false },
];

const User = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="users">
          <div className="info">
            <h1>Users</h1>
            <button onClick={() => setOpen(true)}>Add New Users</button>
          </div>
        </div>
        <div>
          <DataTable columns={columns} rows={rows} slug="users" />
        </div>
        {open && <AddUser slug="user" columns={columns} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default User;

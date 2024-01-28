import React from "react";
import "./DataTable.scss";
import { GridOverlay, DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const DataTable = ({ columns, rows, slug }) => {
  const handlerDelete = (id) => {
    console.log(id + "id has been deleted");
  };
  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: (params) => {
      return (
        <div>
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          <Link to="#" onClick={() => handlerDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete" />
          </Link>
        </div>
      );
    },
  };
  return (
    <>
      <div className="mainTable">
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={[...columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableColumnFilter
          disableColumnSelector
          disableRowSelectionOnClick
          disableDensitySelector
        />
      </div>
    </>
  );
};

export default DataTable;

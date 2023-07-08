// CustomTable.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const CustomTable = ({ data }) => {
  const columns = [
    { field: "name", headerName: "Name", minWidth: 150, flex: 1 },
    { field: "client", headerName: "Client", minWidth: 150, flex: 1 },
    { field: "owner", headerName: "Owner", minWidth: 150, flex: 1 },
    {
      field: "dueDate",
      headerName: "Due Date",
      minWidth: 150,
      flex: 1,
      type: "date",
      valueGetter: (params) => new Date(params.value),
    },
  ];

  return (
    <Box height={500} width="100%">
      <DataGrid rows={data} columns={columns} pageSize={10} />
    </Box>
  );
};

export default CustomTable;

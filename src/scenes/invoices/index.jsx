import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockDataInvoices } from "../../data/mockData";
import { Suspense, lazy } from "react";

const ListComponent = lazy(() => import("../../components/ListComponent"));

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ mt: "15px" }} color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
   <Suspense fallback={<div>Loading...</div>}>
 <ListComponent title={"INVOICE"} subtitle={"List of Invoice Balance"} rows={mockDataInvoices} columns={columns} colors={colors} />
   </Suspense>
  );
};

export default Invoices;

import { Typography, useMediaQuery,Box, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockDataInvoices } from "../../data/mockData";
import { Suspense, lazy } from "react";
import Header from "../../components/Header";

const ListComponent = lazy(() => import("../../components/ListComponent"));

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:559px)");
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
  const mobileColumns = columns.filter((col) =>
    ["id", "name", "email"].includes(col.field),
  );

  return (
    <Box m="20px">
      <Header title={"INVOICE"} subtitle={"List of Invoice Balance"} />
      <Suspense fallback={<div>Loading...</div>}>
        <ListComponent
          rows={mockDataInvoices}
          columns={isMobile ? mobileColumns : columns}
          colors={colors}
        />
      </Suspense>
    </Box>
  );
};

export default Invoices;

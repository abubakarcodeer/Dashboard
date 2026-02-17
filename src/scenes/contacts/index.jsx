import { tokens } from "../../Theme";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { lazy, Suspense } from "react";

const ListComponent = lazy(() => import("../../components/ListComponent"));

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width:559px)");

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
  const mobileColumns = columns.filter((col) =>
    ["id", "name", "phone"].includes(col.field),
  );

  return (
    <Box m="20px">
      <Header
        title={"CONTACTS"}
        subtitle={"List of Contacts for Future Reference"}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ListComponent
          rows={mockDataContacts}
          columns={isMobile ? mobileColumns : columns}
          colors={colors}
          isShowToolBar={true}
          isCheckedBox={false}
        />
      </Suspense>
    </Box>
  );
};

export default Contacts;

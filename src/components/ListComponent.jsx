import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";
import { Box } from "@mui/material";

const ListComponent = ({
  title,
  subtitle,
  rows,
  columns,
  isCheckedBox = true,
  isShowToolBar = false,
  colors
}) => {
  return (
    <Box m="20px">
      <Header title={title} subtitle={subtitle} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="99%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader, .MuiDataGrid-scrollbarFiller, .MuiDataGrid-columnSeparator":
            {
              backgroundColor: `${colors.blueAccent[700]} !important`,
              borderBottom: "none",
            },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
           "& .MuiDataGrid-toolbar":{
            background: `${colors.primary[400]} !important`,
            borderBottom: 'none'
          }
        }}
      >
        <DataGrid
          checkboxSelection={isCheckedBox}
          rows={rows}
          columns={columns}
          showToolbar={isShowToolBar}
        />
      </Box>
    </Box>
  );
};

export default ListComponent;

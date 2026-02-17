import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Box from "@mui/material/Box";
import dataGridStyles from "./dataGridStyle";

const ListComponent = ({
  rows,
  columns,
  colors,
  isCheckedBox = true,
  isShowToolBar = false,
}) => {
  return (
      <Box
        sx={dataGridStyles(colors)}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={isCheckedBox}
          showToolbar={isShowToolBar}
        />
      </Box>
  );
};

export default ListComponent;

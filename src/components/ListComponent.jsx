import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";
import { Box } from "@mui/material";
import dataGridStyles from "./dataGridStyle";

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
        sx={dataGridStyles(colors)}
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

const dataGridStyles = (colors) => ({
  height: "75vh",
  width: "100%",

  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .name-column--cell": {
    color: colors.greenAccent[300],
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-scrollbarFiller, .MuiDataGrid-columnSeparator": {
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
  "& .MuiDataGrid-toolbar": {
    background: `${colors.primary[400]} !important`,
    borderBottom: "none",
  },
});

export default dataGridStyles;

import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../Theme";
import { lazy, Suspense } from "react";

const GeographyChart = lazy(()=>import("../../components/GeographyChart"))

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Suspense fallback={<div>Loading...</div>}>
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
          <GeographyChart />
      </Box>
        </Suspense>
    </Box>
  );
};

export default Geography;
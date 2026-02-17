import { Box } from "@mui/material";
import Header from "../../components/Header";

import { lazy, Suspense } from "react";
const BarChart = lazy(()=>import("../../components/BarChart"))

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Suspense fallback={<div>Loading...</div>}>
          <BarChart />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Bar;
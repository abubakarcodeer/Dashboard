import { Box } from "@mui/material";
import Header from "../../components/Header";
import { lazy, Suspense } from "react";

const LineChart = lazy(()=>import("../../components/LineChart"))

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
       <Suspense fallback={<div>Loading...</div>}>
          <LineChart />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Line;
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { lazy, Suspense } from "react";

const PieChart = lazy(()=>import("../../components/PieChart"))

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Suspense fallback={<div>Loading...</div>}>
          <PieChart />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Pie;
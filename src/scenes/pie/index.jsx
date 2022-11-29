import { Box } from "@mui/material";
import AdminHeader from "../../components/AdminHeader";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <AdminHeader title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;

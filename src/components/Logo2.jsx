import React from "react";
import { Box, Typography } from "@mui/material";
import Logo2 from "./Logo2"; // Adjust the path if needed

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: 172,
        height: 164,
        p: 2,
        background: "#FFF9F2",
        boxShadow: "0px 7px 14px -2px rgba(145, 158, 171, 0.12)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* Logo2 as an icon */}
      <Logo2 fontSize="large" sx={{ fontSize: 48 }} />

      {/* Earnings amount */}
      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "#212B36",
          textAlign: "center",
        }}
      >
        ₹ 3.23K
      </Typography>

      {/* Total Earnings Label */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          color: "#FF8C00",
          textAlign: "center",
        }}
      >
        Total Earnings
      </Typography>
    </Box>
  );
};

export default Dashboard;

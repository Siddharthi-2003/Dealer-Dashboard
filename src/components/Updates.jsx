import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link"; // Import Link icon
import FiberNewIcon from '@mui/icons-material/FiberNew';

const Updates = () => {
  return (
    <Box mt={3}>
      <Typography variant="h6" fontWeight={600}>Updates</Typography>

      <Paper
        sx={{
          p: 2,
          mt: 1,
          borderRadius: "10px",
          background: "#F1F4FF",
          position: "relative", // Needed to position the icon
        }}
      >
        {/* Link Icon at the top right */}
        <Link
          href="#"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#A1A1A1",
          }}
        >
          <LinkIcon />
        </Link>

        <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
          <h3> • 11-Nov-2024 • 11:00 pm</h3>
        </Typography>
        <Typography variant="body1">
          Dealers can easily check their shared earnings through the platform. This quick and convenient feature ensures transparency and helps you stay updated on your earnings without the need to contact support.
        </Typography>
      </Paper>

      <Paper
        sx={{
          p: 2,
          mt: 3,
          borderRadius: "10px",
          background: "#F1F4FF",
          position: "relative", // Needed to position the icon
        }}
      >
        {/* Link Icon at the top right */}
        <Link
          href="#"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#A1A1A1",
          }}
        >
          <LinkIcon />
        </Link>

        <Typography variant="body1" sx={{ color: "#A1A1A1" }}>
          <h3> • 11-Nov-2024 • 11:00 pm</h3>
        </Typography>
        <Typography variant="body1">
          Track your shared earnings effortlessly. The platform allows dealers to quickly access their earning history, keeping you updated and eliminating the need for support assistance.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Updates;

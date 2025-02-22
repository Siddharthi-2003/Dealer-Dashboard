import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Avatar } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../assets/Group 1000005056.png"; // Logo

const Sidebar = ({ scrollToFAQs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: "border-box", bgcolor: "#f8f9fa" },
      }}
    >
      {/* Sidebar Header */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        {/* Larger Logo */}
        <img
          src={profile}
          alt="Indiazona Logo"
          style={{
            width: 130, // Increased width
            height: 85, // Increased height
            objectFit: "contain",
            marginBottom: "1px", // Reduced space below logo
          }}
        />
        <Avatar src="/profile.jpg" alt="Dealer" sx={{ width: 60, height: 60, mx: "auto", mt: 0.5 }} />
        <Typography variant="body1" fontWeight={600} sx={{ mt: 0.5 }}> {/* Reduced space above name */}
          Debas Kumar
        </Typography>
        <Typography variant="body2" color="gray">dealer@example.com</Typography>
      </Box>

      {/* Sidebar Menu */}
      <List>
        <ListItemButton
          onClick={() => navigate("/")}
          sx={{ bgcolor: location.pathname === "/" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}
        >
          <ListItemIcon><HomeRoundedIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/sellers")}
          sx={{ bgcolor: location.pathname === "/sellers" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}
        >
          <ListItemIcon><MedicalServicesRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="Sellers" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/support")}
          sx={{ bgcolor: location.pathname === "/support" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}
        >
          <ListItemIcon><HeadsetMicRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton
          onClick={scrollToFAQs}
          sx={{ bgcolor: location.pathname === "/faq" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}
        >
          <ListItemIcon><CampaignRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="FAQ & Update" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;

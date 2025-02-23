import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Avatar, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../assets/Group 1000005056.png"; 

const Sidebar = ({ scrollToFAQs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const sidebarContent = (
    <Box sx={{ width: 250, bgcolor: "#f8f9fa", height: "100vh" }}>
     
      <Box sx={{ p: 2, textAlign: "center" }}>
        <img
          src={profile}
          alt="Indiazona Logo"
          style={{
            width: 130,
            height: 85,
            objectFit: "contain",
            marginBottom: "1px",
          }}
        />
        <Avatar src="/profile.jpg" alt="Dealer" sx={{ width: 60, height: 60, mx: "auto", mt: 0.5 }} />
        <Typography variant="body1" fontWeight={600} sx={{ mt: 0.5 }}>
          Debas Kumar
        </Typography>
        <Typography variant="body2" color="gray">dealer@example.com</Typography>
      </Box>

     
      <List>
        <ListItemButton onClick={() => navigate("/")} sx={{ bgcolor: location.pathname === "/" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}>
          <ListItemIcon><HomeRoundedIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/sellers")} sx={{ bgcolor: location.pathname === "/sellers" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}>
          <ListItemIcon><MedicalServicesRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="Sellers" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/support")} sx={{ bgcolor: location.pathname === "/support" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}>
          <ListItemIcon><HeadsetMicRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>

        <ListItemButton onClick={scrollToFAQs} sx={{ bgcolor: location.pathname === "/faq" ? "#E6EDFF" : "transparent", borderRadius: "8px" }}>
          <ListItemIcon><CampaignRoundedIcon color="action" /></ListItemIcon>
          <ListItemText primary="FAQ & Update" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      
      {isMobile && (
        <IconButton onClick={toggleDrawer(true)} sx={{ position: "absolute", top: 16, left: 16, zIndex: 1300 }}>
          <MenuIcon />
        </IconButton>
      )}

      
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={toggleDrawer(false)}
        sx={{
          width: isMobile ? 0 : 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: "border-box", bgcolor: "#f8f9fa" },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default Sidebar;

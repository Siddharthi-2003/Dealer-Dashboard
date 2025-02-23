import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Menu, MenuItem, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profilePic from "../assets/Mask Group.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "white", color: "black", boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "23.44px",
            letterSpacing: "0%",
            color: "#3F59A3",
          }}
        >
          Dashboard
        </Typography>

        
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Button variant="outlined" startIcon={<TranslateIcon />} endIcon={<ArrowDropDownIcon />}>
            Eng
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          >
            <Avatar
              src={profilePic}
              alt="Dealer"
              sx={{
                width: 40,
                height: 40,
              }}
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#3F59A3",
                }}
              >
                Debas Kumar
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                Dealer
              </Typography>
            </Box>
          </Box>
        </Box>

        
        
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

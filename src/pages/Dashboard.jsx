import React, { useState, useRef } from "react";
import { Box, Stack, Card, Typography, Button, Divider, useMediaQuery, useTheme, Modal, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EarningsCard from "../components/EarningsCard";
import SellerTable from "../components/SellerTable";
import EarningsGraph from "../components/EarningsGraph";
import Updates from "../components/Updates";
import FAQs from "../components/FAQs";
import Logo from "../components/Logo";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; 

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const faqRef = useRef(null);
  const [openInvite, setOpenInvite] = useState(false);

  const scrollToFAQs = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "white", minHeight: "100vh" }}>
      <Sidebar scrollToFAQs={scrollToFAQs} />

      <Box sx={{ flexGrow: 1, p: isMobile ? 2 : 4 }}>
        <Header />

        {/* Stats Section */}
        <Stack spacing={2} direction={isMobile ? "column" : "row"} mt={3}>
          <EarningsCard title="Total Sellers" value="4" icon={<Logo />} bgcolor="#E6EDFF" />
          <EarningsCard title="Total Earnings" value="₹ 3.23K" icon={<ShowChartOutlinedIcon sx={{ width: 40, height: 40, color: "orange" }} />} bgcolor="#FFF9F2" />

          {/* Dealer Code Card */}
          <Card
            sx={{
              flex: 1,
              textAlign: "center",
              alignItems: "center", 
    justifyContent: "center",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "150px",
              "&:hover": { border: "1px solid #00A533" }
            }}
          >
             <AddCircleOutlineIcon
              sx={{
                fontSize: 60,
                color: "#FFEACC",
                mb: 1,
                alignContent:"centre"
              }}
            />
            <Typography variant="h6" fontWeight={600} sx={{color:"#3F59A3"}}>
              Dealer Code: ID2012
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{
                mt: "auto",
                "&:hover": { backgroundColor: "#FFA726" }
              }}
              onClick={() => setOpenInvite(true)}
            >
              Invite Seller
            </Button>
          </Card>

          {/* Download Dealer Agreement Card - Updated */}
          <Card
            sx={{
              flex: 1,
              textAlign: "left",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "150px",
              backgroundColor: "#FFF9F2",
              boxShadow: "0px 7.39px 14.78px -2.46px rgba(145, 158, 171, 0.12)",
              borderRadius: "6.5px",
              "&:hover": { border: "1px solid #FF9800" }
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="h6" fontWeight={600} sx={{ color: "#FF9800" }}>
                Download Dealer Agreement
              </Typography>
              <EventNoteRoundedIcon sx={{ color: "#FF9800", fontSize: 40 }} />
            </Box>
            <Typography sx={{ fontSize: "14px", lineHeight: "21px", color: "#A1A1A1", mt: 1 }}>
              You can download your dealer agreement here.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: "auto",
                color: "#FF9800",
                borderColor: "#FF9800",
                "&:hover": { borderColor: "#E68900", color: "#E68900" }
              }}
            >
              Download
            </Button>
          </Card>

          {/* Updated Personal Details Card */}
          <Card
            sx={{
              flex: 1,
              textAlign: "left",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "150px",
              backgroundColor: "#E9FFF0",
              boxShadow: "0px 7.39px 14.78px -2.46px rgba(145, 158, 171, 0.12)",
              borderRadius: "6.5px",
              "&:hover": { border: "1px solid #00A533" }
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6" fontWeight={600} sx={{ color: "#00C53C", width: "300px", size: "16px" }}>
                Personal Details
              </Typography>
              <PersonOutlineRoundedIcon sx={{ color: "#00C53C", fontSize: 50 }} />
            </Box>
            <Typography sx={{ fontSize: "14px", lineHeight: "21px", color: "#A1A1A1", mt: 1 }}>
              View personal details and update your profile picture here.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: "auto",
                color: "#3F59A3",
                borderColor: "#3F59A3",
                "&:hover": { borderColor: "#1E3D8A", color: "#1E3D8A" }
              }}
            >
              View Profile
            </Button>
          </Card>
        </Stack>

        {/* Invite Seller Modal */}
        <Modal open={openInvite} onClose={() => setOpenInvite(false)}>
          <Paper
            sx={{
              width: "400px",
              p: 3,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              borderRadius: "8px",
              outline: "none"
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              🤝 Invite Sellers & Grow Your Team!
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
              Unity is power 💪, and teamwork makes the dream work! Invite sellers to join your team, help them earn 💰.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ContentCopyIcon />}
              fullWidth
              sx={{ "&:hover": { backgroundColor: "#1565C0" } }}
            >
              Copy Invite Link
            </Button>
          </Paper>
        </Modal>

        <Divider sx={{ width: "100%", height: "1px", mt: 3, bgcolor: "#E6EFF5" }} />

        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2, mt: 3 }}>
          <Box sx={{ flex: 1, minHeight: "300px", overflowX: "auto" }}>
            <SellerTable />
          </Box>
          <Box sx={{ flex: 1, minHeight: "300px", overflowX: "auto" }}>
            <EarningsGraph />
          </Box>
        </Box>

        <Updates />

        <Box ref={faqRef}>
          <FAQs />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

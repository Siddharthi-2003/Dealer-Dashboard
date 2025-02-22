import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";

const sellersData = [
  { id: "IZS098", name: "Shashi", mobile: "+91 6345687632", sales: "₹ 4,750", orders: 48, share: "₹ 483.34" },
  { id: "IZS099", name: "Urmila Devi", mobile: "+91 6345687632", sales: "₹ 3,200", orders: 32, share: "₹ 183.34" },
  { id: "IZS100", name: "Ramesh Gupta", mobile: "+91 6345687632", sales: "₹ 2,950", orders: 29, share: "₹ 234.20" },
  { id: "IZS101", name: "Sunita Sharma", mobile: "+91 6345687632", sales: "₹ 4,300", orders: 43, share: "₹ 126.10" },
  { id: "IZS102", name: "Ajay Patel", mobile: "+91 6345687632", sales: "₹ 3,700", orders: 37, share: "₹ 455.34" },
  { id: "IZS103", name: "Pooja Verma", mobile: "+91 6345687632", sales: "₹ 2,500", orders: 25, share: "₹ 76.32" },
  { id: "IZS104", name: "Neha Jain", mobile: "+91 6345687632", sales: "₹ 3,700", orders: 31, share: "₹ 127.34" },
  { id: "IZS105", name: "Arun Thakur", mobile: "+91 6345687632", sales: "₹ 3,100", orders: 28, share: "₹ 483.34" },
  { id: "IZS106", name: "Kavita Mehra", mobile: "+91 6345687632", sales: "₹ 4,800", orders: 48, share: "₹ 899.34" },
];

const SellerList = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ display: "flex", bgcolor: "#ffffff", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: "#ffffff" }}>
        <Header />

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Sellers
        </Typography>

        {/* Search Bar with Sort and Download Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          {/* Search Bar */}
          <TextField
            placeholder="Search via seller name"
            variant="outlined"
            sx={{ width: "700px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Right-Aligned Buttons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="primary">
              <ArrowDownwardIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={() => setOpen(true)} // Open popup
            >
              Download
            </Button>
          </Box>
        </Box>

        {/* Seller List Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><strong>Seller ID</strong></TableCell>
                <TableCell><strong>Seller Name</strong></TableCell>
                <TableCell><strong>Mobile</strong></TableCell>
                <TableCell><strong>Total Sales</strong></TableCell>
                <TableCell><strong>Total Orders</strong></TableCell>
                <TableCell><strong>Your Share</strong></TableCell>
                <TableCell><strong>Earning History</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sellersData.map((seller, index) => (
                <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? "#ffffff" : "#F6F8FF" }}>
                  <TableCell>{seller.id}</TableCell>
                  <TableCell>{seller.name}</TableCell>
                  <TableCell>{seller.mobile}</TableCell>
                  <TableCell>{seller.sales}</TableCell>
                  <TableCell>{seller.orders}</TableCell>
                  <TableCell>{seller.share}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => setOpen(true)}>Download</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Download Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: "bold" }}>Download Report</DialogTitle>
          <DialogContent>
            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
              <Tab label="Monthly" />
              <Tab label="Yearly" />
              <Tab label="Custom Range" />
            </Tabs>

            {/* Monthly Report */}
            {tab === 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography>Select the month for which you want to download the report.</Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"].map((month) => (
                    <Button key={month} variant="outlined" sx={{ color: "#BABABA" ,borderColor: "#BABABA","&:hover": { borderColor: "#85B5FF" }, 
      "&.Mui-selected": { borderColor: "#005FCC"}}}>
                      {month}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {/* Yearly Report */}
            {tab === 1 && (
              <Box sx={{ mt: 2 }}>
                <Typography>Select the year for which you want to download the report.</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  {["2024", "2023", "2022"].map((year) => (
                    <Button key={year} variant="outlined" sx={{ color: "#BABABA" ,borderColor: "#BABABA","&:hover": { borderColor: "#85B5FF" }, 
                    "&.Mui-selected": { borderColor: "#005FCC"}}}>
                      {year}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {/* Custom Range */}
            {tab === 2 && (
              <Box sx={{ mt: 2 }}>
                <Typography>Select a custom date range for your report.</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <TextField type="date" variant="outlined" sx={{ flex: 1 }} />
                  <TextField type="date" variant="outlined" sx={{ flex: 1 }} />
                </Box>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              color="primary"
              sx={{ mt: 2 }}
              startIcon={<DownloadIcon />}
            >
              Download
            </Button>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default SellerList;

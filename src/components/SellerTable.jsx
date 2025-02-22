import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from "@mui/material";

const sellers = [
  { name: "Shashi", shares: "₹ 7,150.78", history: "Download" },
  { name: "Urmila Devi", shares: "₹ 50.78", history: "Download" },
  { name: "Tanayveer", shares: "₹ 150.14", history: "Download" },
];

const SellerTable = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography variant="h6" fontWeight={600} mb={1}>Top Sellers List</Typography>
      <TableContainer component={Paper} sx={{ width: "100%", height: "90%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "60px" }}> {/* Increased header row height */}
              <TableCell sx={{ fontWeight: "bold" }}>Seller Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Your Shares</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Earning History</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller, index) => (
              <TableRow key={index} sx={{ height: "70px" }}> {/* Increased row height */}
                <TableCell sx={{ paddingY: 5 }}>{seller.name}</TableCell>
                <TableCell sx={{ paddingY: 5 }}>{seller.shares}</TableCell>
                <TableCell sx={{ paddingY: 5 }}>
                  <Link href="#" underline="hover">{seller.history}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SellerTable;

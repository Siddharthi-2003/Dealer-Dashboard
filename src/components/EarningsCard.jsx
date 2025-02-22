import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EarningsCard = ({ title, value, icon, bgcolor }) => {
  return (
    <Card
      sx={{
        flex: 1,
        textAlign: "center",
        p: 2,
        bgcolor: bgcolor || "white",
        boxShadow: "0px 7.39px 14.78px -2.46px #919EAB1F",
        '&:hover': {
          boxShadow: "0px 0px 1.23px 0px #919EAB33",
        }
      }}
    >
      <CardContent>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {icon} {/* Now accepts a React component instead of a string */}
        </div>
        <Typography variant="h4" fontWeight={600} mt={1}>{value}</Typography>
        <Typography variant="h6" color="#3F59A3" fontWeight={700}>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default EarningsCard;

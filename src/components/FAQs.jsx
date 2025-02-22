import React from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <Box mt={3}>
      <Typography variant="h6" fontWeight={600}>FAQs</Typography>
      <Accordion sx={{ bgcolor: "#F1F4FF", borderRadius: "10px", boxShadow: "none" }}> 
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I track my earnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>You can track earnings in the dashboard.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQs;

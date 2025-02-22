import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, MenuItem, Select, FormControl } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const EarningsGraph = () => {
  const [view, setView] = useState("monthly");

  // Mock Earnings Data
  const earningsData = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [50, 70, 40, 90, 100, 120, 80]
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [40, 60, 55, 80, 90, 70, 100, 180, 200, 110, 90, 95]
    },
    yearly: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      data: [1000, 1500, 1200, 1800, 2000, 2200]
    }
  };

  // State for chart data
  const [chartData, setChartData] = useState({
    labels: earningsData[view].labels,
    datasets: [
      {
        label: "Earnings (₹)",
        data: earningsData[view].data,
        backgroundColor: "rgba(0, 167, 111, 0.1)", // Light green fill
        borderColor: "#00A76F", // Green line
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true
      }
    ]
  });

  // Update chart when view changes
  useEffect(() => {
    setChartData({
      labels: earningsData[view].labels,
      datasets: [
        {
          label: `Earnings (₹) - ${view.charAt(0).toUpperCase() + view.slice(1)}`,
          data: earningsData[view].data,
          backgroundColor: "rgba(0, 167, 111, 0.1)",
          borderColor: "#00A76F",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true
        }
      ]
    });
  }, [view]);

  return (
    <Card sx={{ mt: 3, p: 2, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", height: 350 }}>
      <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={600}>Earning Graph</Typography>
          <FormControl size="small">
            <Select
              value={view}
              onChange={(e) => setView(e.target.value)}
              displayEmpty
              sx={{ bgcolor: "white", borderRadius: 1, fontSize: "14px" }}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Line Chart */}
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { display: false }, beginAtZero: true } } }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EarningsGraph;

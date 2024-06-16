import { Box, Container } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import PieChartHelpers from "../../helpers/PieChartHelpers";
import "./Form.css";

const StatsChart = ({ chartType, usersData }) => {
    const data =
        chartType === "gender"
            ? PieChartHelpers.getGenderDistribution(usersData)
            : PieChartHelpers.getActiveGenderDistribution(usersData);

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 1 }}>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: data?.maleCount || 0 },
                                        {
                                            id: 1,
                                            value: data?.femaleCount || 0,
                                        },
                                    ],
                                },
                            ]}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                marginBottom: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {chartType === "chat"
                                ? "Availability of chat"
                                : "Gender Distribution"}
                        </div>
                        <div>
                            <div>
                                <span
                                    style={{
                                        color: "#42A5F5",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ●
                                </span>{" "}
                                Female
                            </div>
                            <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                {data?.femalePer}%
                            </div>
                        </div>
                        <div style={{ marginTop: "16px" }}>
                            <div>
                                <span
                                    style={{
                                        color: "#81C784",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ●
                                </span>{" "}
                                Male
                            </div>
                            <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                {data?.malePer}%
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default StatsChart;

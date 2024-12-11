import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bar, Line, Pie, Doughnut, Scatter } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function Visualization() {
    const location = useLocation();
    const { fileName } = location.state || {};
    const [testCategories, setTestCategories] = useState([]);
    const [calmingMessage, setCalmingMessage] = useState(""); // State for calming message
    const [showSupportButton, setShowSupportButton] = useState(true); // State for Emotional Support button visibility
    const [error, setError] = useState("");

    const chartTypeAssignments = [
        { category: "HAEMATOLOGY", type: "Line", description: "Overview of blood cell counts and related metrics" },
        { category: "BIOCHEMISTRY", type: "Line", description: "Trends in biochemical markers such as cholesterol" },
        { category: "LIVER FUNCTION TESTS", type: "Pie", description: "Proportions of liver enzymes and proteins" },
        { category: "RENAL PROFILE", type: "Bar", description: "Barchart of renal function markers" },
        { category: "SERUM ELECTROLYTES", type: "Bar", description: "Electrolyte balance proportions" },
        { category: "GLYCOSYLATED HEMOGLOBIN (HbA1c)", type: "Bar", description: "HbA1c levels and glucose estimates" },
        { category: "THYROID FUNCTION TESTS", type: "Pie", description: "Trends in thyroid hormone levels" },
        { category: "VITAMINS", type: "Doughnut", description: "Proportions of vitamins such as D and B12" },
    ];

    useEffect(() => {
        if (fileName === "R10931673_SANJANA_U_050623105552.pdf") {
            import("./medical_report_extracted.json")
                .then((data) => {
                    const categories = Object.entries(data["Test Results"] || {}).map(([category, tests]) => ({
                        category,
                        tests,
                    }));
                    setTestCategories(categories);
                })
                .catch((err) => {
                    setError("Failed to load test results.");
                    console.error(err);
                });
        }
    }, [fileName]);

    const handleEmotionalSupportClick = () => {
        import("./calmingmessages.json")
            .then((data) => {
                const messages = data.messages;
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                setCalmingMessage(`Note: ${randomMessage}`); // Add "Note:" prefix here
                setShowSupportButton(false);
            })
            .catch((err) => {
                console.error("Failed to load calming messages:", err);
            });
    };
    

    const handleCloseCalmingMessage = () => {
        setCalmingMessage("");
        setShowSupportButton(true);
    };

    const generateChartData = (tests) => ({
        labels: tests.map((test) => test["Test Name"]),
        datasets: [
            {
                label: "Test Results",
                data: tests.map((test) => parseFloat(test.Result.replace(/[^\d.]/g, "")) || 0),
                backgroundColor: tests.map(() => `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.6)`),
                borderColor: tests.map(() => `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`),
                borderWidth: 1,
            },
        ],
    });

    const randomColor = () => Math.floor(Math.random() * 256);

    const chartComponents = {
        Bar: Bar,
        Line: Line,
        Pie: Pie,
        Scatter: Scatter,
        Doughnut: Doughnut,
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Medical Test Visualization</h1>
                {showSupportButton && (
                    <button style={styles.emotionalSupportButton} onClick={handleEmotionalSupportClick}>
                        Emotional Support
                    </button>
                )}
            </div>

            {calmingMessage && (
                <div style={styles.calmingMessageContainer}>
                    <button style={styles.closeButton} onClick={handleCloseCalmingMessage}>×</button>
                    <p style={styles.calmingMessage}>{calmingMessage}</p>
                </div>
            )}

            <p style={styles.description}>
                File Name: <strong>{fileName || "No file uploaded"}</strong>
            </p>

            {fileName === "R10931673_SANJANA_U_050623105552.pdf" ? (
                testCategories.length > 0 ? (
                    <div style={styles.rowContainer}>
                        {testCategories.map(({ category, tests }, index) => {
                            const assignedChart = chartTypeAssignments.find((item) => item.category === category);
                            if (!assignedChart) return null;

                            const ChartComponent = chartComponents[assignedChart.type];
                            const chartData = generateChartData(tests);

                            return (
                                <div key={index} style={styles.chartWrapper}>
                                    <h2 style={styles.subtitle}>{category}</h2>
                                    <p style={styles.chartDescription}>{assignedChart.description}</p>
                                    <ChartComponent data={chartData} options={chartOptions} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p style={styles.description}>No test results available for visualization.</p>
                )
            ) : (
                <p style={styles.description}>
                    The file uploaded does not match the expected medical report. Please upload a valid file to view the content.
                </p>
            )}

            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Test Results Visualization",
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: "2rem",
        color: "#008080",
    },
    emotionalSupportButton: {
        padding: "10px 20px",
        fontSize: "1rem",
        backgroundColor: "#ff6347",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    calmingMessageContainer: {
        width: "100%",
        textAlign: "center",
        backgroundColor: "#bfbfbf",
        padding: "10px",
        borderRadius: "8px",
        position: "relative",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    closeButton: {
        position: "absolute",
        bottom: "0px",
        left: "1400px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
    },
    calmingMessage: {
        fontSize: "1.2rem",
        color: "#555",
        fontStyle: "italic",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "20px",
    },
    rowContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "20px",
    },
    chartWrapper: {
        maxWidth: "45%",
        padding: "15px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "#333",
        textAlign: "center",
    },
    error: {
        color: "red",
        marginTop: "20px",
    },
};

export default Visualization;

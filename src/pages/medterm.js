import React, { useState, useEffect } from "react";

function MedicalTests() {
  const [terms, setTerms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [testsPerPage] = useState(3); // Set to 3 cards per page
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [expandedTest, setExpandedTest] = useState(null); // To track expanded test

  useEffect(() => {
    // Fetch terms from JSON
    fetch("/term3.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch terms");
        }
        return response.json();
      })
      .then((data) => setTerms(data))
      .catch((error) => console.error("Error fetching terms:", error));
  }, []);

  const handleSearchInput = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredQuestions([]);
      return;
    }
    const results = terms
      .filter((term) =>
        term.test_name.toLowerCase().includes(query.toLowerCase())
      )
      .map((term) => ({
        question: `What is ${term.test_name}?`,
        answer: term.description,
      }));
    setFilteredQuestions(results);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredTests.length / testsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleExplanation = (testName) => {
    setExpandedTest(expandedTest === testName ? null : testName); // Toggle expansion
  };

  const filteredTests = terms.filter(
    (term) => term.status === "High" || term.status === "Low"
  );
  const indexOfLastTest = currentPage * testsPerPage;
  const indexOfFirstTest = indexOfLastTest - testsPerPage;
  const currentTests = filteredTests.slice(indexOfFirstTest, indexOfLastTest);

  return (
    <div style={styles.container}>

      {/* Important Tests Window */}
      <section style={styles.testsWindow}>
        <h2 style={styles.sectionTitle}>🚨 Tests that require your attention</h2>
        {currentTests.map((term, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => toggleExplanation(term.test_name)}
          >
            <h3 style={styles.cardTitle}>
              {term.test_name} | <span style={styles.cardStatus}>{term.status}</span> |{" "}
              <span style={styles.cardValue}>{term.value} {term.unit}</span>
            </h3>
            <p style={styles.cardDescription}>{term.description}</p>
            {expandedTest === term.test_name && (
              <div style={styles.expandedContent}>
                <p style={styles.cardExplanation}>{term.explanation}</p>
              </div>
            )}
          </div>
        ))}
        <div style={styles.pagination}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={styles.paginationButton}
          >
            Previous
          </button>
          <span style={styles.pageNumber}>
            Page {currentPage} of {Math.ceil(filteredTests.length / testsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredTests.length / testsPerPage)}
            style={styles.paginationButton}
          >
            Next
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <h2 style={styles.searchTitle}>Or start typing to search for other terms ...</h2>
        <input
          type="text"
          placeholder="Search for tests..."
          value={searchQuery}
          onChange={(e) => handleSearchInput(e.target.value)}
          style={styles.searchInput}
        />
        {filteredQuestions.length > 0 && (
          <div style={styles.questionsList}>
            {filteredQuestions.map((q, index) => (
              <div key={index} style={styles.questionCard}>
                <strong>{q.question}</strong>
                <p>{q.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    padding: "20px",
    backgroundColor: "#f4f8fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    backgroundColor: "#2c7a7b",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "800px",
  },
  heading: {
    fontSize: "32px",
    margin: 0,
  },
  subheading: {
    fontSize: "16px",
    marginTop: "10px",
  },
  testsWindow: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#2d3748",
  },
  card: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#2d3748",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#718096",
  },
  cardStatus: {
    color: "#e53e3e",
    fontWeight: "bold",
  },
  cardValue: {
    color: "#4a5568",
  },
  expandedContent: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#e0f7f7",
    borderRadius: "5px",
  },
  cardExplanation: {
    fontSize: "14px",
    color: "#4a5568",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  paginationButton: {
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#2c7a7b",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  pageNumber: {
    fontSize: "16px",
    color: "#2d3748",
  },
  searchContainer: {
    marginTop: "20px",
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
  },
  searchTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#2d3748",
  },
  searchInput: {
    width: "100%",
    maxWidth: "500px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e0",
    fontSize: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  questionsList: {
    marginTop: "20px",
    textAlign: "left",
  },
  questionCard: {
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default MedicalTests;

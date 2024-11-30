import React, { useState, useEffect } from "react";

function Medterm() {
  const [terms, setTerms] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null); // For analogy card
  const [selectedQuestion, setSelectedQuestion] = useState(null); // For answer card

  useEffect(() => {
    // Mock fetch from JSON file
    fetch("/terms.json")
      .then((response) => response.json())
      .then((data) => {
        setTerms(data.terms);
        setQuestions(data.questions);
      });
  }, []);

  const handleSearchInput = (query) => {
    setSearchQuery(query);
    const results = questions.filter((q) =>
      q.question.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredQuestions(results);
  };

  const handleTermClick = (term) => {
    setSelectedTerm(term); // Show analogy card
  };

  const handleSuggestionClick = (question) => {
    setSelectedQuestion(question); // Show answer card
    setSearchQuery(""); // Clear the search query after selection
    setFilteredQuestions([]); // Clear suggestions
  };

  const closeAnalogyCard = () => {
    setSelectedTerm(null); // Close analogy card
  };

  const closeAnswerCard = () => {
    setSelectedQuestion(null); // Close answer card
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.heading}>Explore Medical Terms</h1>
        <div style={styles.termsContainer}>
          {terms.map((term, index) => (
            <div
              key={index}
              style={{
                ...styles.termCard,
                background: term.isAbnormal
                  ? "linear-gradient(135deg, #ffe4e6, #f87171)"
                  : "linear-gradient(135deg, #e6f7f9, #38b2ac)",
                borderColor: term.isAbnormal ? "#f87171" : "#38b2ac"
              }}
              onClick={() => handleTermClick(term)}
            >
              <img
                src={term.image}
                alt={`${term.name} icon`}
                style={styles.cardImage}
              />
              <div>
                <h3 style={styles.termName}>{term.name}</h3>
                <p style={styles.termDescription}>{term.description}</p>
                <p style={styles.reportText}>
                  <strong>Your report reads:</strong> {term.reportValue}
                </p>
                <p
                  style={{
                    ...styles.statusText,
                    color: term.isAbnormal ? "#e53e3e" : "#2f855a"
                  }}
                >
                  {term.isAbnormal ? "Needs Attention" : "Normal"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h1 style={styles.heading}>Search Medical Questions</h1>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for questions..."
            value={searchQuery}
            onChange={(e) => handleSearchInput(e.target.value)}
            style={styles.searchInput}
            aria-label="Search medical questions"
          />
          {filteredQuestions.length > 0 && (
            <div style={styles.suggestionsContainer}>
              {filteredQuestions.map((q, index) => (
                <div
                  key={index}
                  style={styles.suggestion}
                  onClick={() => handleSuggestionClick(q)}
                >
                  {q.question}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedTerm && (
        <div style={styles.analogyOverlay}>
          <div style={styles.analogyCard}>
            <h2 style={styles.analogyHeading}>{selectedTerm.name}</h2>
            <p style={styles.analogyText}>{selectedTerm.explanation}</p>
            <button onClick={closeAnalogyCard} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}

      {selectedQuestion && (
        <div style={styles.answerOverlay}>
          <div style={styles.answerCard}>
            <h2 style={styles.answerHeading}>Answer</h2>
            <p style={styles.answerText}>{selectedQuestion.answer}</p>
            <button onClick={closeAnswerCard} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    padding: "20px"
  },
  section: {
    marginBottom: "40px",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "20px"
  },
  termsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "10px"
  },
  termCard: {
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    textAlign: "center",
    overflow: "hidden"
  },
  cardImage: {
    width: "60px",
    height: "60px",
    marginBottom: "10px",
    borderRadius: "50%"
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left"
  },
  searchInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "25px",
    border: "1px solid #cbd5e0",
    outline: "none",
    fontSize: "16px"
  },
  suggestionsContainer: {
    position: "absolute",
    top: "100%",
    left: "0",
    right: "0",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    zIndex: "10",
    maxHeight: "200px",
    overflowY: "auto"
  },
  suggestion: {
    padding: "10px 15px",
    cursor: "pointer",
    borderBottom: "1px solid #e2e8f0",
    transition: "background-color 0.2s ease",
    ":hover": {
      backgroundColor: "#edf2f7"
    }
  },
  analogyOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10"
  },
  analogyCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    textAlign: "center"
  },
  analogyHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  analogyText: {
    fontSize: "16px",
    marginBottom: "20px"
  },
  closeButton: {
    padding: "10px 20px",
    backgroundColor: "#38b2ac",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  },
  answerOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10"
  },
  answerCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    textAlign: "center"
  },
  answerHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  answerText: {
    fontSize: "16px",
    marginBottom: "20px"
  }
};

export default Medterm;

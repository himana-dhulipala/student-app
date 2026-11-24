
import React from "react";

function Header() {
  return (
    <h1 style={styles.header}>
      Student Management System
    </h1>
  );
}

function StudentList() {
  const students = [
    { name: "Ravi", marks: 35 },
    { name: "Himana", marks: 90 },
    { name: "Ram", marks: 80 },
    { name: "Sita", marks: 90 },
    { name: "Lakshmi", marks: 95 }
  ];

  return (
    <div style={styles.listBox}>
      <h2 style={styles.title}>Student List</h2>

      <ul style={styles.list}>
        {students.map((student, index) => (
          <li key={index} style={styles.item}>
            <span>
              {student.name} - {student.marks} -
            </span>

            <span
              style={{
                color: student.marks >= 40 ? "green" : "red",
                fontWeight: "bold"
              }}
            >
              {student.marks >= 40 ? "Pass" : "Fail"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <h3 style={styles.footer}>
      Student Management System © 2026
    </h3>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "650px",
    margin: "50px auto",
    padding: "25px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },

  header: {
    backgroundColor: "#2563eb",
    color: "white",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    fontSize: "25px"
  },

  listBox: {
    padding: "15px"
  },

  title: {
    color: "#1e40af",
    borderBottom: "2px solid #2563eb",
    paddingBottom: "10px"
  },

  list: {
    padding: "0",
    listStyle: "none"
  },

  item: {
    backgroundColor: "white",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "7px",
    display: "flex",
    gap: "5px",
    alignItems: "center",
    fontSize: "16px",
    border: "1px solid #e2e8f0"
  },

  footer: {
    backgroundColor: "#1e293b",
    color: "white",
    textAlign: "center",
    padding: "15px",
    borderRadius: "8px",
    fontSize: "15px"
  }
};

export default App;

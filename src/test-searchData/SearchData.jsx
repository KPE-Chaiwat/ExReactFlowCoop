import React, { useState } from "react";

const SearchableList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Example list of items
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Mango",
    "Pineapple",
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    margin: "0",
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: "18px",
  },
};

export default SearchableList;

import React from "react";

const DataTable = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: "John Doe", age: 28, occupation: "Engineer" },
    { id: 2, name: "Jane Smith", age: 34, occupation: "Designer" },
    { id: 3, name: "Sam Brown", age: 22, occupation: "Developer" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>User Information</h2>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

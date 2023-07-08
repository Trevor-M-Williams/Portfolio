import React, { useState, useMemo } from "react";

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort("name")}>
            Name{" "}
            {sortConfig && sortConfig.key === "name" && (
              <span>{sortConfig.direction === "ascending" ? "🔼" : "🔽"}</span>
            )}
          </th>
          <th onClick={() => requestSort("dueDate")}>
            Due Date{" "}
            {sortConfig && sortConfig.key === "dueDate" && (
              <span>{sortConfig.direction === "ascending" ? "🔼" : "🔽"}</span>
            )}
          </th>
          <th onClick={() => requestSort("owner")}>
            Owner{" "}
            {sortConfig && sortConfig.key === "owner" && (
              <span>{sortConfig.direction === "ascending" ? "🔼" : "🔽"}</span>
            )}
          </th>
          <th onClick={() => requestSort("client")}>
            Client{" "}
            {sortConfig && sortConfig.key === "client" && (
              <span>{sortConfig.direction === "ascending" ? "🔼" : "🔽"}</span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.dueDate}</td>
            <td>{item.owner}</td>
            <td>{item.client}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

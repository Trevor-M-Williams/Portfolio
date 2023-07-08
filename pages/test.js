import React from "react";
import CustomTable from "../components/CustomTable";

const Test = () => {
  const data = [
    {
      id: 1,
      name: "Project 1",
      client: "Client A",
      owner: "Owner 1",
      dueDate: "2023-04-15",
    },
    {
      id: 2,
      name: "Project 2",
      client: "Client B",
      owner: "Owner 2",
      dueDate: "2023-05-01",
    },
    // Add more data here...
  ];

  return (
    <div>
      <CustomTable data={data} />
    </div>
  );
};

export default Test;

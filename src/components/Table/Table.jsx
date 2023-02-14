import React from "react";

import "./Table.css";
import TableRow from "./TableRow";

const person = { name: "Omebi", age: 38, height: "6ft" };
//map, filter
person.height = "6ft";

// Map
const Table = ({ bitcoin, linechart }) => {
  const tableData = [
    {
      img: bitcoin,
      coin: "Bitcoin",
      price: 40000,
      change: "+12",
      chart: linechart,
    },
    {
      img: bitcoin,
      coin: "Ethereum",
      price: 2500,
      change: "+7",
      chart: linechart,
    },
    {
      img: bitcoin,
      coin: "XRP",
      price: 0.4,
      change: "+1",
      chart: linechart,
    },
    {
      img: bitcoin,
      coin: "Doge",
      price: 20,
      change: "+12",
      chart: bitcoin,
    },
  ];
  return (
    <table className="table">
      <thead>
        <tr className="table-head">
          <th className="table-number">#</th>
          <th className="table-name">Name</th>
          <th className="table-price">Price</th>
          <th className="table-change">24h change</th>
          <th className="table-chart">Chart</th>
          <th className="table-trade">Trade</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <TableRow item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

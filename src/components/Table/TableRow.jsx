const TableRow = ({ item }) => {
  return (
    <tr className="table-row-body">
      <td className="table-number">1</td>
      <td className="table-name table-bitcoin">
        <tr className="table-bitcoin-text">
          <td>
            <img src={item.img} alt="bitcoin" className="bitcoin-pic" />
          </td>

          <td>
            <p className="bitcoin-text">{item.coin}</p>
          </td>
        </tr>
      </td>
      <td className="table-price">{item.price}</td>
      <td className="table-change">{item.change}</td>
      <td className="table-chart">
        <img src={item.chart} alt="linechart" />
      </td>
      <td className="table-trade">
        <button className="table-trade-button">Trade</button>
      </td>
    </tr>
  );
};

export default TableRow;

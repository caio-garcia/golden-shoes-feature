const columns = [
  {
    title: "Product ID",
    dataIndex: "ProductId",
    key: "ProductId",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
    key: "Quantity",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Picture",
    dataIndex: "imgURL",
    key: "imgURL",
    render: (text) => <p>{text}</p>,
  },
];

export default columns;

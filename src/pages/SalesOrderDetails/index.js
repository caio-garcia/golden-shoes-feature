import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";

import columns from "./columns";

export function SalesOrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const resOrder = await axios.get(
          `https://ironrest.herokuapp.com/sales-orders/${orderId}`
        );
        setOrder(resOrder.data);
        const resLines = await axios.get(
          `https://ironrest.herokuapp.com/sales-lines/`
        );
        setLines(resLines.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrderDetails();
  }, []);

  const dataSource = lines
    .filter((elem) => {
      return elem["Order No"] == order["Order No"];
    })
    .map((curr, index) => {
      let tkey;
      let imgURL;
      delete curr._id;
      tkey = index + 1;
      imgURL = (
        <img
          src={curr.imgURL}
          alt={curr.ProductName}
          style={{ width: "10rem", borderRadius: "8px" }}
        />
      );
      return { ...curr, key: tkey, imgURL: imgURL };
    });

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={{ margin: "5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h2>Order No.: {order["Order No"]}</h2>
          <p>Date: {order["Order Date"]}</p>
          <p>Shipping Status: {order["Shipping Status"]}</p>
          <p>Total: £{order["Total"]}</p>
        </div>
        <div>
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div style={{ paddingBottom: "1.2rem" }}>
          <h3>Issues with this Order?</h3>

          <Link to={`/incident/${order["Order No"]}`}>
            <p>Contact us</p>
          </Link>
        </div>
      </div>
    </>
  );
}

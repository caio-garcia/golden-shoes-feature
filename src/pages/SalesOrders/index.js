import axios from "axios";
import { useEffect, useState } from "react";

import { SalesOrdersCard } from "../../components/SalesOrdersCard";

export function SalesOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://ironrest.herokuapp.com/sales-orders"
        );
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={{ margin: "5rem" }}>
        <h1>You Orders</h1>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {orders.map((currElem, index) => {
            return (
              <div key={index}>
                <SalesOrdersCard
                  orderID={currElem._id}
                  orderNo={`Order No. ${currElem["Order No"]}`}
                  orderDate={`${currElem["Order Date"]}`}
                  shippingStatus={`${currElem["Shipping Status"]}`}
                  total={`${currElem["Total"]}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

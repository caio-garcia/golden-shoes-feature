import { Card } from "antd";
import { Link } from "react-router-dom";

export function SalesOrdersCard(props) {
  const { orderNo, orderDate, shippingStatus, total, orderID } = props;
  let shippingRef = "";
  if (shippingStatus === "Out for Delivery") {
    shippingRef = (
      <a href="https://www.royalmail.com/track-your-item" target="_blank">
        {shippingStatus}
      </a>
    );
  } else {
    shippingRef = shippingStatus;
  }
  return (
    <>
      <Card
        title={orderNo}
        extra={<Link to={`/order-details/${orderID}/`}> More Details</Link>}
        style={{ width: "25rem", fontSize: "1.2rem" }}
      >
        <p>
          <strong>Order Date: </strong>
          {orderDate}
        </p>
        <p>
          <strong>Shipping Status: </strong>
          {shippingRef}
        </p>
        <p>
          <strong>Shipping Speed:</strong> 2-5 business days
        </p>
        <p>
          <strong>Total: </strong>£{total}
        </p>
      </Card>
    </>
  );
}

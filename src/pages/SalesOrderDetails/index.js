import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <h1>Nene</h1>
      {lines
        .filter((elem) => {
          return elem["Order No"] == order["Order No"];
        })
        .map((currElem, index) => {
          return (
            <>
              <div key={index}>
                <h1>{currElem["ProductName"]}</h1>
                <h1>{currElem["Quantity"]}</h1>
                <h1>{currElem["Amount"]}</h1>
                <img src={currElem["imgURL"]} alt={currElem["ProductId"]} />
              </div>
            </>
          );
        })}
    </>
  );
}

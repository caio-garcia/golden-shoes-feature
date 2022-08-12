import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";

import { SalesOrders } from "./pages/SalesOrders";
import { SalesOrderDetail } from "./pages/SalesOrderDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-orders" element={<SalesOrders />} />
        <Route path="/order-details/:orderId" element={<SalesOrderDetail />} />
      </Routes>
    </>
  );
}

export default App;

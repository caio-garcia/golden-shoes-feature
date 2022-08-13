import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { SalesOrders } from "./pages/SalesOrders";
import { SalesOrderDetail } from "./pages/SalesOrderDetails";
import { IncidentPage } from "./pages/IncidentForm";
import { Incidents } from "./pages/Incidents";
import { IncidentDetail } from "./pages/IncidentDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/my-orders" element={<SalesOrders />} />
        <Route path="/order-details/:orderId" element={<SalesOrderDetail />} />
        <Route path="/incident/:orderNo" element={<IncidentPage />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/incident-details/:_id" element={<IncidentDetail />} />
      </Routes>
    </>
  );
}

export default App;

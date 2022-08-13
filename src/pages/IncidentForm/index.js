import { IncidentForm } from "../../components/IncidentForm";

import { useParams } from "react-router-dom";

export function IncidentPage() {
  const { orderNo } = useParams();

  return (
    <>
      <div style={{ margin: "5rem" }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <h1>New Customer Service Request</h1>
          <span>
            <strong>Order No.: </strong>
            {orderNo}
          </span>
        </div>

        <IncidentForm orderNo={orderNo} />
      </div>
    </>
  );
}

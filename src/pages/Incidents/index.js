import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Comment } from "antd";

export function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const res = await axios.get(
          "https://ironrest.herokuapp.com/sales-comments"
        );
        setIncidents(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIncidents();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={{ margin: "5rem" }}>
        <h1>List of Incidents</h1>
        {incidents.map((currElem, index) => {
          return (
            <div key={index} style={{ padding: "1rem" }}>
              <Comment
                author={`Order No.: ${currElem["tempOrderNo"]}`}
                content={<p>{currElem["issueDescription"]}</p>}
              />
              <Link to={`/incident-details/${currElem["_id"]}`}>
                <Button style={{ borderRadius: "8px" }} type="primary">
                  Details
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

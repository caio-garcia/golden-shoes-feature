import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { Form, Button, Comment, Input, List } from "antd";

const { TextArea } = Input;

export function IncidentDetail() {
  const { _id } = useParams();

  const [incident, setIncident] = useState({});
  const [loading, setLoading] = useState(true);

  let today = new Date();
  let clone = {
    text: "",
    date: "",
  };
  let now =
    today.getDate() +
    "/" +
    today.getMonth() +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  useEffect(() => {
    const fetchIncident = async () => {
      try {
        const res = await axios.get(
          `https://ironrest.herokuapp.com/sales-comments/${_id}`
        );
        setIncident(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIncident();
  }, []);

  const commitComment = async () => {
    delete incident._id;
    try {
      const send = await axios.put(
        `https://ironrest.herokuapp.com/sales-comments/${_id}`,
        incident
      );
      console.log(send);
    } catch (error) {
      console.log(error);
    }
    window.location.reload(true);
  };

  function addComment(values) {
    if (!values) {
      return;
    }
    setIncident({
      ...incident,
      comments: incident["comments"].push(clone),
    });
    setTimeout(() => {
      commitComment();
    }, 1000);
  }

  function handleChange(e) {
    clone = {
      text: e.target.value,
      date: now,
    };
  }

  function showInc() {
    console.log(incident);
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div style={{ margin: "5rem" }}>
        <div>
          <h2>Incident for Order No.: {incident["tempOrderNo"]}</h2>
          <p>
            <strong>Incident Category: </strong> {incident["issueCategory"]}
          </p>
          <p>
            <strong>Description:</strong>
          </p>
          <p>{incident["issueDescription"]}</p>
          <p>
            <strong>Comments:</strong>
          </p>
          {incident["comments"].length > 0 ? (
            incident["comments"].map((curr, index) => {
              return (
                <>
                  <div style={{ margin: "1rem" }} key={index}>
                    <p style={{ color: "grey" }}>
                      Comment added on: {curr["date"]} by USER ABC
                    </p>
                    <p>{curr["text"]}</p>
                  </div>
                </>
              );
            })
          ) : (
            <p style={{ color: "grey" }}>No comments </p>
          )}
        </div>
        <div style={{ margin: "1.2rem" }}>
          <h3>Add new Comment</h3>
          <Form onFinish={addComment} name="basic">
            <Form.Item name="comments">
              <TextArea
                rows={8}
                style={{ borderRadius: "8px" }}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ borderRadius: "8px" }}
                htmlType="submit"
                type="primary"
              >
                Add Comment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

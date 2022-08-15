import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useState } from "react";
import axios from "axios";

const { Option } = Select;
const { TextArea } = Input;

export function IncidentForm(props) {
  const navigate = useNavigate();
  const { orderNo } = props;

  const [form, setForm] = useState({
    issueCategory: "",
    issueDescription: "",
    tempOrderNo: orderNo,
    comments: [],
  });

  function handleChangeCategory(e) {
    setForm({ ...form, issueCategory: e });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://ironrest.herokuapp.com/sales-comments",
        form
      );
      navigate("/my-orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Form
          name="Customer Service Request"
          title="Customer Service Request"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Issue Category"
            name="issueCategory"
            required
            // onChange={handleChange}
          >
            <Select
              name="issueCategory"
              defaultValue="disabled"
              style={{
                width: 240,
              }}
              value={form.issueCategory}
              required
              onChange={handleChangeCategory}
            >
              <Option value="disabled" disabled>
                Please select a category
              </Option>
              <Option value="return-size">Return - Wrong Size</Option>
              <Option value="return-colour">Return - Wrong Colour</Option>
              <Option value="shipping">Query on Delivery Status</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Issue Description"
            name="issueDescription"
            required
            value={form.issueDescription}
            onChange={handleChange}
          >
            <TextArea
              name="issueDescription"
              rows={20}
              required
              style={{ borderRadius: "8px" }}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: "8px" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

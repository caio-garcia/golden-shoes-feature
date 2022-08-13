import { Breadcrumb, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
const { Header, Content, Footer } = Layout;

export function NavBar() {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Link to="/my-orders">Orders</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/incidents" />
              Incidents
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
}

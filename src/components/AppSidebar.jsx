import {
  DashboardOutlined,
  DollarOutlined,
  WalletOutlined,
  FileTextOutlined
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

function AppSidebar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          padding: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Ledger Pro
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
        //   {
        //     key: "1",
        //     icon: <DashboardOutlined />,
        //     label: "Dashboard",
        //   },

        //   {
        //     key: "2",
        //     icon: <DollarOutlined />,
        //     label: "Sales",
        //   },

        //   {
        //     key: "3",
        //     icon: <WalletOutlined />,
        //     label: "Expenses",
        //   },

        //   {
        //     key: "4",
        //     icon: <FileTextOutlined />,
        //     label: "Reports",
        //   },

            {
                key: "1",
                label: (
                    <Link to="/dashboard">
                    Dashboard
                    </Link>
                    )
            },

            {
            key: "2",
            label: (
                <Link to="/sales">
                Sales
                </Link>
            )
            },

            {
            key: "3",
            label: (
                <Link to="/expenses">
                Expenses
                </Link>
            )
            },

            {
            key: "4",
            label: (
                <Link to="/reports">
                Reports
                </Link>
            )
            },
        ]}
      />
    </Sider>
  );
}

export default AppSidebar;
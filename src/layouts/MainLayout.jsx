import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";

const { Header, Content } = Layout;

function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSidebar />

      <Layout>
        <Header
          style={{
            background: "#fff",
            fontWeight: 600,
            fontSize: 18,
          }}
        >
          Business Ledger
        </Header>

        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
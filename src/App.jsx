

// import { Layout } from "antd";

// import Dashboard from "./pages/Dashboard";
// import AppSidebar from "./components/AppSidebar";

// const { Header, Content } = Layout;

// function App() {
//   return (
//     <Layout>
//       <AppSidebar />

//       <Layout>
//         <Header
//           style={{
//             background: "#fff",
//             fontSize: 20,
//             fontWeight: 600,
//           }}
//         >
//           Business Ledger Dashboard
//         </Header>

//         <Content
//           style={{
//             padding: 24,
//             minHeight: "100vh",
//           }}
//         >
//           <Dashboard />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;


import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
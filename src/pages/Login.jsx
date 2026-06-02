import {
  Card,
  Input,
  Button,
  Typography,
} from "antd";

import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card style={{ width: 350 }}>
        <Title level={3}>
          Business Ledger
        </Title>

        <Input
          placeholder="Username"
          style={{ marginBottom: 10 }}
        />

        <Input.Password
          placeholder="Password"
          style={{ marginBottom: 20 }}
        />

        <Button
          type="primary"
          block
          onClick={login}
        >
          Login
        </Button>
      </Card>
    </div>
  );
}

export default Login;
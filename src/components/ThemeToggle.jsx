import { Switch } from "antd";

function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  );
}

export default ThemeToggle;
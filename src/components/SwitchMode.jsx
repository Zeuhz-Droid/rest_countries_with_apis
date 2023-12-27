import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${(props) => (props.font ? props.font : "1.4rem")};
`;

function SwitchMode() {
  const [mode, setMode] = useState("Dark");

  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  document.body.classList.toggle("dark-mode", isDarkMode);

  function handleModeToggle() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
    if (document.body.classList.contains("dark-mode")) setMode("Light");
    else setMode("Dark");
  }

  return (
    <Row onClick={handleModeToggle}>
      <span>{mode === "Light" ? <HiMoon /> : <HiSun />}</span>
      <span>{mode} Mode</span>
    </Row>
  );
}

export default SwitchMode;

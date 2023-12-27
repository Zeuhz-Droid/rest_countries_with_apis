import { useState, useEffect } from "react";
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

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark-mode") === "Dark";
    document.body.classList.toggle("dark-mode", isDarkMode);
    setMode(isDarkMode ? "Dark" : "Light");
  }, []);

  function handleModeToggle() {
    document.body.classList.toggle("dark-mode");
    const newMode = document.body.classList.contains("dark-mode")
      ? "Dark"
      : "Light";
    setMode(newMode);
    localStorage.setItem("dark-mode", newMode);
  }

  return (
    <Row onClick={handleModeToggle}>
      <span>{mode === "Light" ? <HiMoon /> : <HiSun />}</span>
      <span>{mode} Mode</span>
    </Row>
  );
}

export default SwitchMode;

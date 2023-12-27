import { HiMoon, HiSun } from "react-icons/hi2";

function SwitchMode({ mode }) {
  return (
    <>
      <span>{mode === "Light" ? <HiMoon /> : <HiSun />}</span>
      <span>{mode} Mode</span>
    </>
  );
}

export default SwitchMode;

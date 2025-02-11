import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ text, color = "primary" }) => {
  return <button className={`btn ${color}`}>{text}</button>;
};

export default Button;

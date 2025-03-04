import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Animation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for message from animation.html
    const handleMessage = (event) => {
      if (event.data === "animationComplete") {
        // Store final header position
        localStorage.setItem(
          "finalHeaderPosition",
          JSON.stringify({ x: -55, y: -45 })
        );
        navigate("/home"); // Redirect to landing page
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  return (
    <iframe
    src={`${window.location.origin}/Animation.html`} // Ensure it's using the correct case
    title="CrossIt Animation"
    style={{
      width: "100vw",
      height: "100vh",
      border: "none",
      position: "absolute",
      top: 0,
      left: 0,
    }}
  ></iframe>
  );
};

export default Animation;

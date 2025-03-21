import React, { useState, useEffect } from "react";
import OwnerDashboard from "./OwnerDashboard";
import EditorDashboard from "./EditorDashboard";

function Dashboard() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Fetch the stored role from localStorage or API (replace with actual authentication logic)
    const userRole = localStorage.getItem("userRole");
    setRole(userRole);
  }, []);

  if (!role) {
    return <h2 className="dashboard-message">Loading...</h2>;
  }

  return (
    <div className="dashboard-container">
      {role === "owner" ? <OwnerDashboard /> : <EditorDashboard />}
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";

function DriverList() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const storedDrivers =
      JSON.parse(localStorage.getItem("drivers")) || [];
    setDrivers(storedDrivers);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚗 Driver List</h2>

      {drivers.length === 0 ? (
        <p>No drivers registered yet.</p>
      ) : (
        <ul>
          {drivers.map((driver, index) => (
            <li key={index}>
              {driver.name} - {driver.vehicle} -{" "}
              <strong>{driver.status}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DriverList;
import { useNavigate } from "react-router-dom";

function AvailableLoads() {
  const navigate = useNavigate();

  const loads = [
    { id: 1, from: "Chennai", to: "Coimbatore", goods: "Steel" },
    { id: 2, from: "Madurai", to: "Bangalore", goods: "Electronics" }
  ];

  const acceptLoad = () => {
    alert("Load Accepted Successfully!");
    navigate("/driver-history");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Available Loads</h2>

      {loads.map((load) => (
        <div key={load.id} style={styles.card}>
          <p><strong>From:</strong> {load.from}</p>
          <p><strong>To:</strong> {load.to}</p>
          <p><strong>Goods:</strong> {load.goods}</p>
          <button onClick={acceptLoad}>Accept Load</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px auto",
    width: "300px"
  }
};

export default AvailableLoads;
import React, { useEffect, useState } from "react";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const determineVehicle = (goods, people) => {
    const p = Number(people);

    if (goods.includes("Small Bag") && p <= 2)
      return "2 Wheeler 🛵";

    if (goods.includes("Small Bag") && p <= 4)
      return "Auto Rickshaw 🚐";

    if (goods.includes("Furniture") && p <= 4)
      return "Mini Truck 🚚";

    if (goods.includes("Refrigerator") && p <= 6)
      return "Truck 🚛";

    if (p > 6)
      return "Container Truck 🚛🚛";

    return "";
  };

  const handleDelete = (index) => {
    const bookingToDelete = bookings[index];

    const drivers =
      JSON.parse(localStorage.getItem("drivers")) || [];

    const updatedDrivers = drivers.map(driver =>
      driver.email === bookingToDelete.driverEmail
        ? { ...driver, status: "Available" }
        : driver
    );

    localStorage.setItem("drivers", JSON.stringify(updatedDrivers));

    const updatedBookings =
      bookings.filter((_, i) => i !== index);

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedBooking(bookings[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = {
      ...editedBooking,
      [name]: value
    };

    if (name === "goods" || name === "people") {
      updated.vehicle = determineVehicle(
        name === "goods" ? value : updated.goods,
        name === "people" ? value : updated.people
      );
    }

    setEditedBooking(updated);
  };

  const handleSave = () => {
    const drivers =
      JSON.parse(localStorage.getItem("drivers")) || [];

    const oldDriverEmail = bookings[editIndex].driverEmail;

    const freedDrivers = drivers.map((driver) =>
      driver.email === oldDriverEmail
        ? { ...driver, status: "Available" }
        : driver
    );

    const newDriver = freedDrivers.find(
      (driver) =>
        driver.vehicle === editedBooking.vehicle &&
        driver.status === "Available"
    );

    if (!newDriver) {
      alert("❌ No Available Driver for this vehicle!");
      return;
    }

    const updatedDrivers = freedDrivers.map((driver) =>
      driver.email === newDriver.email
        ? { ...driver, status: "Booked" }
        : driver
    );

    localStorage.setItem("drivers", JSON.stringify(updatedDrivers));

    const updatedBookings = [...bookings];

    updatedBookings[editIndex] = {
      ...editedBooking,
      driverName: newDriver.name,
      driverPhone: newDriver.phone,
      driverEmail: newDriver.email
    };

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setEditIndex(null);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          📜 Booking History 🚚
        </h2>

        <p style={styles.total}>
          📊 Total Bookings: <strong>{bookings.length}</strong>
        </p>

        {bookings.length === 0 ? (
          <div style={styles.emptyBox}>
            😔 No bookings available.
          </div>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} style={styles.card}>
              <h3>🚚 Booking #{index + 1}</h3>

              {editIndex === index ? (
                <>
                  <input name="from" value={editedBooking.from} onChange={handleChange} style={styles.input} />
                  <input name="to" value={editedBooking.to} onChange={handleChange} style={styles.input} />

                  <select name="goods" value={editedBooking.goods} onChange={handleChange} style={styles.input}>
                    <option>Small Bag 🎒</option>
                    <option>Furniture 🛋</option>
                    <option>Refrigerator 🧊</option>
                  </select>

                  <input type="number" name="people" value={editedBooking.people} onChange={handleChange} style={styles.input} />

                  <p><strong>🚛 Vehicle:</strong> {editedBooking.vehicle}</p>

                  <input type="date" name="date" value={editedBooking.date} onChange={handleChange} style={styles.input} />
                  <input type="time" name="time" value={editedBooking.time} onChange={handleChange} style={styles.input} />

                  <button onClick={handleSave} style={styles.saveBtn}>💾 Save</button>
                </>
              ) : (
                <>
                  <p><strong>📍 From:</strong> {booking.from}</p>
                  <p><strong>🏁 To:</strong> {booking.to}</p>
                  <p><strong>🎒 Luggage:</strong> {booking.goods}</p>
                  <p><strong>🚛 Vehicle:</strong> {booking.vehicle}</p>
                  <p><strong>👥 People:</strong> {booking.people}</p>
                  <p><strong>📅 Date:</strong> {booking.date}</p>
                  <p><strong>⏰ Time:</strong> {booking.time}</p>
                  <p><strong>👤 Driver:</strong> {booking.driverName}</p>

                  <button onClick={() => handleEdit(index)} style={styles.editBtn}>✏ Edit</button>
                  <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>❌ Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
    color: "white"
  },
  container: {
    width: "700px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "28px",
    textShadow: "0 0 15px rgba(0,255,255,0.7)"
  },
  total: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "18px",
    opacity: 0.9
  },
  emptyBox: {
    textAlign: "center",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(0,255,255,0.4)"
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "18px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
    transition: "0.4s",
  },
  input: {
    display: "block",
    marginBottom: "12px",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.1)",
    color: "white"
  },
  editBtn: {
    marginRight: "10px",
    padding: "8px 14px",
    background: "linear-gradient(45deg, #f59e0b, #fbbf24)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #f59e0b"
  },
  deleteBtn: {
    padding: "8px 14px",
    background: "linear-gradient(45deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #ef4444"
  },
  saveBtn: {
    padding: "8px 14px",
    background: "linear-gradient(45deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #10b981"
  }
};

export default BookingHistory;
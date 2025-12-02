import React, { useState } from "react";

function FormSubmit() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }

    setSubmittedData(formData);
  }

  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "20px" }}>
      <h2>React Form Submit</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Show submitted result */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormSubmit;

import React from 'react';
import { modalOverlay } from "../JobPage/Animations";

export const CandidateModal = ({ candidate, onClose, onStatusUpdate }) => {
    const handleStatusChange = (e) => {
      const newStatus = e.target.value;
      candidate.status = newStatus;
      onStatusUpdate(candidate.id, newStatus);
    };

    if (!candidate) return null;

    return (
      <div style={modalOverlay}>
        <div
          style={{
            backgroundColor: "#2D3748",
            padding: "30px",
            borderRadius: "10px",
            width: "80%",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            zIndex: 1001,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ margin: 0, color: "#FFFFFF" }}>Candidate Details</h2>
            <button
              onClick={onClose}
              style={{
                padding: "5px 10px",
                backgroundColor: "#EF4444",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#374151",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#FFFFFF", marginBottom: "15px" }}>
                Personal Information
              </h3>
              <div style={{ color: "#FFFFFF" }}>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Name:</strong>{" "}
                  <span style={{ marginLeft: "8px" }}>{candidate.name}</span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Email:</strong>{" "}
                  <span style={{ marginLeft: "8px" }}>{candidate.email}</span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Phone:</strong>{" "}
                  <span style={{ marginLeft: "8px" }}>{candidate.phone}</span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Experience:</strong>{" "}
                  <span style={{ marginLeft: "8px" }}>
                    {candidate.experience}
                  </span>
                </p>
                <p style={{ marginBottom: "15px" }}>
                  <strong>Education:</strong>{" "}
                  <span style={{ marginLeft: "8px" }}>
                    {candidate.education}
                  </span>
                </p>
              </div>

              <h3
                style={{
                  color: "#FFFFFF",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}
              >
                Skills
              </h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {(candidate.skills || []).map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#3B82F6",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      fontSize: "0.9em",
                      color: "#FFFFFF",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#374151",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#FFFFFF", marginBottom: "15px" }}>
                Application Status
              </h3>
              <div style={{ marginBottom: "20px" }}>
                <select
                  value={candidate.status}
                  onChange={handleStatusChange}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    width: "200px",
                    backgroundColor: "#2D3748",
                    border: "1px solid #4B5563",
                    color: "#FFFFFF",
                  }}
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Scheduled">
                    Interview Scheduled
                  </option>
                  <option value="Assignment Given">Assignment Given</option>
                  <option value="Selected">Selected</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <h3 style={{ color: "#FFFFFF", marginBottom: "15px" }}>
                Resume Preview
              </h3>
              <div
                style={{
                  border: "1px solid #4B5563",
                  padding: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#2D3748",
                  height: "200px",
                  overflowY: "auto",
                  color: "#FFFFFF",
                }}
              >
                <p>Resume preview would be displayed here.</p>
                <p>
                  For actual implementation, you would need to integrate with a
                  document viewer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
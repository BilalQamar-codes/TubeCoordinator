import React, { useState } from "react";
import "./Dashboard.scss";

function OwnerDashboard() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "Travel Vlog", status: "Pending", uploader: "John Doe", date: "2025-03-22" },
    { id: 2, title: "Tech Review", status: "Approved", uploader: "Alice Smith", date: "2025-03-21" },
  ];

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li className="active">Videos</li>
          <li>Approvals</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="dashboard">
        <h1>Owner Dashboard</h1>
        <h2>Pending Videos</h2>

        <div className="video-list">
          {videos.map((video) => (
            <div key={video.id} className="video-item" onClick={() => handleSelectVideo(video)}>
              <span className="video-title">{video.title}</span>
              <span className={`status ${video.status.toLowerCase()}`}>{video.status}</span>
              {video.status === "Pending" && (
                <button className="approve-btn">Approve</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Details Panel */}
      {selectedVideo && (
        <div className="video-details">
          <h2>Video Details</h2>
          <p><strong>Title:</strong> {selectedVideo.title}</p>
          <p><strong>Uploader:</strong> {selectedVideo.uploader}</p>
          <p><strong>Upload Date:</strong> {selectedVideo.date}</p>
          <p><strong>Status:</strong> <span className={`status ${selectedVideo.status.toLowerCase()}`}>{selectedVideo.status}</span></p>
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default OwnerDashboard;

import React, { useState } from "react";
import "./Dashboard.scss";

function EditorDashboard() {
  const [videos, setVideos] = useState([
    { id: 1, title: "Travel Vlog", status: "Pending" },
    { id: 2, title: "Tech Review", status: "Approved" },
  ]);
  
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: "", description: "", file: null });
  const [filter, setFilter] = useState("All");

  const handleFileChange = (e) => {
    setNewVideo({ ...newVideo, file: e.target.files[0] });
  };

  const handleUpload = () => {
    if (!newVideo.title || !newVideo.description || !newVideo.file) {
      alert("Please fill out all fields.");
      return;
    }
    
    const uploadedVideo = {
      id: videos.length + 1,
      title: newVideo.title,
      status: "Pending",
    };
    
    setVideos([...videos, uploadedVideo]);
    setShowUploadModal(false);
    setNewVideo({ title: "", description: "", file: null });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Editor Panel</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => setShowUploadModal(true)}>Upload Video</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <div className="dashboard">
        <h1>Editor Dashboard</h1>

        {/* Filter Buttons */}
        <div className="filter-group">
          {["All", "Pending", "Approved"].map((status) => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? "active" : ""}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <h2>Your Uploaded Videos</h2>

        <div className="video-list">
          {videos
            .filter((video) => filter === "All" || video.status === filter)
            .map((video) => (
              <div key={video.id} className="video-item">
                <span className="video-title">{video.title}</span>
                <span className={`status ${video.status.toLowerCase()}`}>
                  {video.status}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Upload Video Modal */}
      {showUploadModal && (
        <div className="upload-modal">
          <h2>Upload New Video</h2>
          <label>
            Title:
            <input
              type="text"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={newVideo.description}
              onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
              required
            />
          </label>
          <label>
            Upload File:
            <input type="file" onChange={handleFileChange} required />
          </label>
          <button className="upload-btn" onClick={handleUpload}>Upload</button>
          <button className="close-btn" onClick={() => setShowUploadModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default EditorDashboard;

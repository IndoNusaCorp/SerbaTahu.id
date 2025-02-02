"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Workspace() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [lists, setLists] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Detect mobile screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Load lists from localStorage on component mount
  useEffect(() => {
    const savedLists = localStorage.getItem("workspaceLists");
    if (savedLists) {
      try {
        const parsedLists = JSON.parse(savedLists);
        setLists(parsedLists);
      } catch (error) {
        console.error("Error parsing saved lists:", error);
      }
    }
  }, []);

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workspaceLists", JSON.stringify(lists));
  }, [lists]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setListName("");
    setFile(null);
    setLink("");
    setEditIndex(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!listName.trim()) {
      alert("Please enter a list name.");
      return;
    }

    const newList = { name: listName, file, link };
    setLists([...lists, newList]);
    closePopup();
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!listName.trim()) {
      alert("Please enter a list name.");
      return;
    }

    if (editIndex !== null) {
      const updatedList = { name: listName, file, link };
      const newLists = [...lists];
      newLists[editIndex] = updatedList;
      setLists(newLists);
      closePopup();
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    const listToEdit = lists[index];
    setListName(listToEdit.name);
    setFile(listToEdit.file);
    setLink(listToEdit.link);
    openPopup();
  };

  const handleDelete = (index: number) => {
    setLists(lists.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background website */}
      <div
        className="background-website-wallpaper"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          src="/background-wallpaper.jpg"
          alt="background-wallpaper"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Navbar */}
      <nav
        className="navbar-container"
        style={{
          display: "flex",
          borderRadius: "25px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          opacity: "65%",
          padding: "10px 20px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo or Brand Name */}
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          My Workspace
        </div>
        {/* Navigation Links */}
        <div
          className="navbar-links"
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>
        </div>
      </nav>

      {/* Content Lists */}
      <div
        className="content-list-container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        {/* Existing List */}
        <div
          className="existing-list"
          style={{
            backgroundColor: "#D9D9D9",
            width: "300px",
            height: "205px",
            borderRadius: "25px",
            padding: "10px",
            boxSizing: "border-box",
            marginBottom: "20px",
            marginRight: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginLeft: "20px",
          }}
        >
          <div
            className="text-top"
            style={{
              textAlign: "center",
              color: "#000",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            Sat, 1 February 2025 (Perencanaan)
          </div>
          <div
            className="text-bottom"
            style={{
              textAlign: "left",
              color: "#000",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}
          >
            - Nugas
          </div>
          <div
            className="text-bottom"
            style={{
              textAlign: "left",
              color: "#000",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}
          >
            - Belanja
          </div>
          <div
            className="text-bottom"
            style={{
              textAlign: "left",
              color: "#000",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}
          >
            <Link href={"https://google.com"} style={{ color: "blue" }}>
              🔗 Google
            </Link>
          </div>
        </div>

        {/* New Lists */}
        {lists.map((list, index) => (
          <div
            key={index}
            className="new-list"
            style={{
              backgroundColor: "#D9D9D9",
              width: "300px",
              height: "230px",
              borderRadius: "25px",
              padding: "10px",
              boxSizing: "border-box",
              marginBottom: "20px",
              marginRight: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Nama List */}
            <div
              className="text-top"
              style={{
                textAlign: "center",
                color: "#000",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              {list.name}
            </div>
            {/* File (jika ada) */}
            {list.file && (
              <div
                style={{
                  textAlign: "left",
                  color: "#000",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                File: {list.file.name}
                {list.file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(list.file)}
                    alt={list.file.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100px",
                      marginTop: "10px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
            )}
            {/* Link (jika ada) */}
            {list.link && (
              <div
                className="text-bottom"
                style={{
                  textAlign: "left",
                  color: "#000",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                Link:{" "}
                <a href={list.link} target="_blank" rel="noopener noreferrer">
                  {list.link}
                </a>
              </div>
            )}
            {/* Tombol Edit dan Delete */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <button
                onClick={() => handleEdit(index)}
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  backgroundColor: "#DC3545",
                  color: "white",
                  border: "none",
                  padding: "5px 15px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add List Button */}
        <button
          onClick={openPopup}
          style={{
            display: "flex",
            cursor: "pointer",
            color: "black",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#007BFF",
            width: "300px",
            height: "35px",
            borderRadius: "25px",
            padding: "10px",
            boxSizing: "border-box",
            marginBottom: "20px",
            marginRight: "20px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          + Add List
        </button>
      </div>

      {/* Show pop up */}
      <Popup open={isPopupOpen} onClose={closePopup} closeOnDocumentClick>
        <form
          onSubmit={editIndex !== null ? handleUpdate : handleSubmit}
          style={{
            padding: "20px",
            background: "#F8F9FA",
            color: "black",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "400px",
          }}
        >
          <h3
            style={{
              color: "#007BFF",
              marginBottom: "20px",
            }}
          >
            {editIndex !== null ? "Edit List" : "Add New List"}
          </h3>
          <input
            type="text"
            placeholder="Enter list name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          />
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          />
          <textarea
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              height: "80px",
              marginBottom: "20px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "16px",
            }}
          >
            {editIndex !== null ? "Update List" : "Add List"}
          </button>
          <button
            type="button"
            onClick={closePopup}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6C757D",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Close
          </button>
        </form>
      </Popup>
    </div>
  );
}
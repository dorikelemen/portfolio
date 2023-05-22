import React from "react";
import { Fade, Modal } from "@mui/material";
import ContactForm from "./ContactForm";

export default function AnimatedModal({ isOpen, handleCloseModal }) {
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const paperStyle = {
    backgroundColor: "#242424",
    border: "2px solid var(--bottomBorder)",
    boxShadow: "var(--simpleShadow)",
    position: "relative",
    zIndex: 30,
    padding: "20px",
    color: "black",
  };

  const backdropStyle = {
    zIndex: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(2px)",
  };

  const closeButton = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "var(--softWhite)",
  };

  const jotFormCont = document.getElementsByClassName("formFooter");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalStyle}
        open={isOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: backdropStyle,
        }}
      >
        <Fade in={isOpen}>
          <div style={paperStyle}>
            <span
              style={closeButton}
              onClick={handleCloseModal}
              class="material-icons-outlined"
            >
              close
            </span>
            <h2
              style={{
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Title
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan odio enim.
            </p>

            <ContactForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

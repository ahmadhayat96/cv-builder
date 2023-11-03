import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import jsPDF from "jspdf";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CVBuilderForm({ open, handleClose }) {
  const [school, setSchool] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [additionalInfo, setAdditionalInfo] = React.useState("");

  const handleGenerateCV = () => {
    const pdf = new jsPDF();
    pdf.text(`School: ${school}`, 10, 10);
    pdf.text(`Past Experience: ${experience}`, 10, 20);
    pdf.text(`Additional Information: ${additionalInfo}`, 10, 30);
    pdf.save("my_cv.pdf");
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <form>
            <div className="mb-4">
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="experience">Past Experience</label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="border p-2"
              />
            </div>
            <button
              type="button"
              onClick={handleGenerateCV}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Generate CV
            </button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}

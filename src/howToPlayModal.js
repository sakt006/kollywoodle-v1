import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import CardMedia from "@mui/material/CardMedia";
import example from "./example.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function HowToPlayModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton color="primary" onClick={handleOpen}>
        <HelpRoundedIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <li> Find Movie of the day in 10 guesses </li>
            <li>
              Each guess reveals whether any of these match with Movie of the
              day - Director, Actor, Music, Year of Release{" "}
            </li>
            <li>
              {" "}
              In below example, Music and Year matched with Movie of the day{" "}
            </li>
            <CardMedia
              component="img"
              alt="how to play"
              height="100"
              image={example}
            />
            <li>
              {" "}
              Movie list contains around 300 popular movies released post 2000{" "}
            </li>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

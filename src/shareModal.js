import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Countdown from "react-countdown";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Divider, IconButton } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  WhatsappIcon
} from "react-share";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const shareUrl = "https://kollywoodle.vercel.app";
const title = "Kollywoodle";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export default function ShareModal(props) {
  const [open, setOpen] = React.useState(false);
  // const tomorrow = new Date().get

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(getShareText());
    console.log("Copied to clipboard");
    handleClickOpen();
    props.handleShareModalClose();
  };

  function getShareText() {
    let emojiRow = "🎬🕴🎵🔢";
    let emojiGrid = "";
    for (let i = 0; i <= props.currentGuess; i++) {
      let gridRow =
        getTile(props.directorMatch[i]) +
        getTile(props.actorMatch[i]) +
        getTile(props.musicMatch[i]) +
        getTile(props.yearMatch[i]);
      emojiGrid = emojiGrid + "\n" + gridRow;
    }

    return (
      getGameDay() +
      " " +
      getGuessCount() +
      "\n\n" +
      emojiRow +
      emojiGrid +
      "\n" +
      shareUrl
    );
  }

  function getTile(match) {
    return match ? "🟩" : "⬛";
  }

  function getGameDay() {
    return title + " #" + dateDiffInDays(new Date("2022-04-07"), new Date());
  }

  function getGuessCount() {
    let guessCount = props.gameWon ? parseInt(props.currentGuess + 1) : "X";
    return guessCount + "/10";
  }

  // a and b are javascript Date objects
  function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleShareModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        TransitionProps={{
          style: { transitionDelay: 500 }
        }}
      >
        <DialogTitle id="alert-dialog-title">{getGameDay()}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.status}
          </DialogContentText>
          {/* <Stack direction="row" spacing={2} paddingTop={2}>
            <WhatsappShareButton
              url={shareUrl}
              title={getShareText()}
              separator=" 
            
            "
            >
              <WhatsAppIcon color="success" />
            </WhatsappShareButton>
            <IconButton color="primary" onClick={handleShare}>
              <ContentCopyIcon />
            </IconButton>
          </Stack> */}
        </DialogContent>
        {/* <Countdown
              date={Date.now() + 10000}
              daysInHours={true}
            /> */}
        <DialogActions>
          {/* <WhatsappShareButton
            url={shareUrl}
            title={getShareText()}
            separator=" 
            
            "
          >
            <Typography color="success"> Whatsapp</Typography>
          </WhatsappShareButton> */}
          <Button onClick={handleShare}>Share as Text</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        onClose={handleClose}
        message="Copied to Clipboard"
      ></Snackbar>
    </div>
  );
}

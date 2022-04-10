import { Component } from "react";
import Guess2 from "./guess2";
import { MOVIE_LIST } from "./movieData";
import seedrandom from "seedrandom";
import { Collapse } from "@mui/material";
import ShareModal from "./shareModal";

const maxGuess = 10;

export default class MovieGame extends Component {
  constructor(props) {
    super(props);
    var isoDateString = new Date().toISOString().substr(0, 10);
    console.log("Today's date : " + isoDateString);
    let rng = seedrandom(isoDateString);
    this.winner = MOVIE_LIST[Math.floor(rng() * MOVIE_LIST.length)];
    this.handleClick = this.handleClick.bind(this);
    this.handleShareModalClose = this.handleShareModalClose.bind(this);
    let disabledArray = Array(maxGuess).fill(true);
    disabledArray[0] = false;

    this.state = {
      guessList: Array(maxGuess).fill(null),
      guesses: Array(maxGuess).fill(null),
      disabled: disabledArray,
      currentGuess: 0,
      directorMatch: Array(maxGuess).fill(false),
      actorMatch: Array(maxGuess).fill(false),
      yearMatch: Array(maxGuess).fill(false),
      musicMatch: Array(maxGuess).fill(false),
      gameWon: false,
      isShareModalOpen: false,
      gameLost: false
    };

    // this.addToGuessList(0);

    console.log("Guess list" + this.state.guessList);
  }

  handleClick(value) {
    const guesses = this.state.guesses.slice();
    let disabled = this.state.disabled.slice();
    const directorMatch = this.state.directorMatch.slice();
    const actorMatch = this.state.actorMatch.slice();
    const yearMatch = this.state.yearMatch.slice();
    const musicMatch = this.state.musicMatch.slice();
    let gameWon = this.state.gameWon;
    let showShareModal = this.state.isShareModalOpen;
    let gameLost = this.state.gameLost;

    let currentGuess = this.state.currentGuess;

    guesses[currentGuess] = value;
    disabled[currentGuess] = true;

    directorMatch[currentGuess] = value["director"] === this.winner["director"];
    actorMatch[currentGuess] = value["actor"] === this.winner["actor"];
    yearMatch[currentGuess] = value["year"] === this.winner["year"];
    musicMatch[currentGuess] = value["music"] === this.winner["music"];

    if (this.calculateWinner(value)) {
      gameWon = true;
      disabled = Array(maxGuess).fill(true);
    }

    if (!gameWon) {
      if (this.isGameLost(currentGuess + 1)) {
        gameLost = true;
      } else {
        currentGuess = currentGuess + 1;
        disabled[currentGuess] = false;
      }
    }

    if (gameWon || gameLost) {
      showShareModal = true;
    }

    this.setState({
      guesses: guesses,
      currentGuess: currentGuess,
      disabled: disabled,
      directorMatch: directorMatch,
      actorMatch: actorMatch,
      yearMatch: yearMatch,
      musicMatch: musicMatch,
      gameWon: gameWon,
      isShareModalOpen: showShareModal,
      gameLost: gameLost
    });
  }

  buildGuessList(n) {
    let guessList = [];
    for (let i = 0; i < n; i++) {
      guessList.push(this.renderGuess(i));
    }
    return guessList;
  }

  renderGuess(i) {
    return (
      <div key={i}>
        <Collapse in={this.state.currentGuess >= i}>
          <Guess2
            key={i}
            index={i}
            value={this.state.guesses[i]}
            onClick={this.handleClick}
            disabled={this.state.disabled[i]}
            directorMatch={this.state.directorMatch[i]}
            actorMatch={this.state.actorMatch[i]}
            yearMatch={this.state.yearMatch[i]}
            musicMatch={this.state.musicMatch[i]}
          />
        </Collapse>
      </div>
    );
  }

  render() {
    let status = this.state.gameLost
      ? "Game Over! Today's movie was : " + this.winner["title"]
      : this.state.gameWon
      ? "You won in " + parseInt(this.state.currentGuess + 1) + " guess(es)"
      : "";

    return (
      <div>
        <div className="board-row">{this.buildGuessList(maxGuess)}</div>
        {/* <div className="status">{status}</div> */}
        <ShareModal
          open={this.state.isShareModalOpen}
          status={status}
          handleShareModalClose={this.handleShareModalClose}
          directorMatch={this.state.directorMatch}
          actorMatch={this.state.actorMatch}
          yearMatch={this.state.yearMatch}
          musicMatch={this.state.musicMatch}
          currentGuess={this.state.currentGuess}
          gameWon={this.state.gameWon}
        />
      </div>
    );
  }

  handleShareModalClose() {
    this.setState({ isShareModalOpen: false });
  }

  calculateWinner(value) {
    if (value["id"] === this.winner["id"]) {
      return true;
    }
    return null;
  }

  isGameLost(currentGuess) {
    return currentGuess >= maxGuess;
  }
}

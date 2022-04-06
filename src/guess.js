import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MOVIE_LIST } from "./movieData";

export default function Guess(props) {
  return (
    <div>
      <div>
        <Autocomplete
          id="movie-select-demo"
          options={MOVIE_LIST}
          autoHighlight={false}
          sx={{ width: 300 }}
          disabled={props.disabled}
          getOptionLabel={(option) => option.title}
          renderOption={(option) => (
            <React.Fragment>{option.title}</React.Fragment>
          )}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a movie"
              variant="outlined"
              fullWidth
              inputProps={{
                ...params.inputProps
              }}
            />
          )}
        />
      </div>
      <div>
        <label>
          Director: {props.value === null ? "" : props.value["director"]}{" "}
        </label>
        <label
          style={{ backgroundColor: props.directorMatch ? "green" : "red" }}
        >
          {" "}
          {props.directorMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}{" "}
        </label>
      </div>
      <div>
        <label>
          {" "}
          Actor: {props.value === null ? "" : props.value["actor"]}{" "}
        </label>
        <label style={{ backgroundColor: props.actorMatch ? "green" : "red" }}>
          {" "}
          {props.actorMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}{" "}
        </label>
      </div>
      <div>
        <label>
          {" "}
          Music: {props.value === null ? "" : props.value["music"]}{" "}
        </label>
        <label style={{ backgroundColor: props.musicMatch ? "green" : "red" }}>
          {" "}
          {props.musicMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}{" "}
        </label>
      </div>
      <div>
        <label> Year: {props.value === null ? "" : props.value["year"]} </label>
        <label style={{ backgroundColor: props.yearMatch ? "green" : "red" }}>
          {" "}
          {props.yearMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}{" "}
        </label>
      </div>
    </div>
  );

  function handleChange(event, value) {
    props.onClick(value);
  }
}

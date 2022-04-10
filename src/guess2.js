import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MOVIE_LIST } from "./movieData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Collapse } from "@mui/material";

export default function Guess2(props) {
  return (
    <div>
      <Divider>
        <Chip
          label={"Guess " + ++props.index}
          size="small"
          color="primary"
          variant="outlined"
        />
      </Divider>
      <p> </p>
      <div>
        <Autocomplete
          id="movie-select-demo"
          options={MOVIE_LIST}
          // size="small"
          autoHighlight={false}
          disablePortal
          blurOnSelect="touch"
          // sx={{ minWidth: 450 }}
          disabled={props.disabled}
          // fullWidth={false}
          getOptionLabel={(option) => option.title}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a Movie"
              variant="outlined"
              fullWidth
              inputProps={{
                ...params.inputProps
              }}
            />
          )}
        />
      </div>
      {/* <div>
        <label>
          Director: {props.value === null ? "" : props.value["director"]}
        </label>
        <label>
          {props.directorMatch === true
            ? "✅"
            : props.value === null
            ? ""
            : "❌"}
        </label>
      </div>
      <div>
        <label>
          
          Actor: {props.value === null ? "" : props.value["actor"]}
        </label>
        <label style={{ backgroundColor: props.actorMatch ? "green" : "red" }}>
          
          {props.actorMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}
        </label>
      </div>
      <div>
        <label>
          
          Music: {props.value === null ? "" : props.value["music"]}
        </label>
        <label style={{ backgroundColor: props.musicMatch ? "green" : "red" }}>
          
          {props.musicMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}
        </label>
      </div>
      <div>
        <label> Year: {props.value === null ? "" : props.value["year"]} </label>
        <label style={{ backgroundColor: props.yearMatch ? "green" : "red" }}>
          {props.yearMatch === true
            ? "O"
            : props.value === null
            ? ""
            : "X"}
        </label>
      </div> */}
      <p> </p>
      <Collapse in={props.value !== null}>
        <TableContainer component={Paper}>
          <Table aria-label="a dense table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Director</TableCell>
                <TableCell align="center">Actor</TableCell>
                <TableCell align="center">Music</TableCell>
                <TableCell align="center">Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow key="1">
              <TableCell align="left">Director</TableCell>
              <TableCell
                align="center"
                sx={{
                  // color: 'success.dark',
                  // display: 'inline',
                  fontWeight: "bold",
                  borderBottom: 4,
                  borderBottomColor: "error.main",
                  borderRadius: "15px"
                  // mx: 0.5,
                  // fontSize: 14,
                }}
                // style={{
                //   backgroundColor:
                //     props.directorMatch === true
                //       ? "green"
                //       : props.value === null
                //       ? ""
                //       : "red"
                // }}
              >
                {props.value === null ? "" : props.value["director"]}
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell align="left">Male Lead</TableCell>
              <TableCell
                align="center"
                sx={{
                  // color: 'success.dark',
                  // display: 'inline',
                  fontWeight: "bold",
                  borderBottom: 4,
                  borderBottomColor: "error.main",
                  // mx: 0.5,
                  // fontSize: 14,
                }}
                // style={{
                //   backgroundColor:
                //     props.actorMatch === true
                //       ? "green"
                //       : props.value === null
                //       ? ""
                //       : "red"
                // }}
              >
                {props.value === null ? "" : props.value["actor"]}
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell align="left">Music</TableCell>
              <TableCell
                align="center"
                // style={{
                //   backgroundColor:
                //     props.musicMatch === true
                //       ? "green"
                //       : props.value === null
                //       ? ""
                //       : "red"
                // }}
                sx={{
                  // color: 'success.dark',
                  // display: 'inline',
                  fontWeight: "bold",
                  borderBottom: 4,
                  borderBottomColor: "error.main",
                  borderRadius: "15px",
                  // mx: 0.5,
                  // fontSize: 14,
                }}
              >
                {props.value === null ? "" : props.value["music"]}
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell align="left">Year</TableCell>
              <TableCell
                align="center"
                // style={{
                //   backgroundColor:
                //     props.yearMatch === true
                //       ? "green"
                //       : props.value === null
                //       ? ""
                //       : "red"
                // }}
                sx={{
                  // color: 'success.dark',
                  // display: 'inline',
                  fontWeight: "bold",
                  borderBottom: 4,
                  borderBottomColor: "success.main",
                  borderRadius: "15px"
                  // mx: 0.5,
                  // fontSize: 14,
                }}
              >
                {props.value === null ? "" : props.value["year"]}
              </TableCell>
            </TableRow> */}
              <TableRow key="5">
                <TableCell
                  align="center"
                  // style={{
                  //   backgroundColor:
                  //     props.musicMatch === true
                  //       ? "green"
                  //       : props.value === null
                  //       ? ""
                  //       : "red"
                  // }}
                  sx={{
                    // color: 'success.dark',
                    // display: 'inline',
                    fontWeight: "bold",
                    borderBottom: 4,
                    borderBottomColor:
                      props.directorMatch === true
                        ? "success.main"
                        : "error.main"
                    // borderRadius: "15px"
                    // mx: 0.5,
                    // fontSize: 14,
                  }}
                >
                  {props.value === null ? "" : props.value["director"]}
                </TableCell>
                <TableCell
                  align="center"
                  // style={{
                  //   backgroundColor:
                  //     props.musicMatch === true
                  //       ? "green"
                  //       : props.value === null
                  //       ? ""
                  //       : "red"
                  // }}
                  sx={{
                    // color: 'success.dark',
                    // display: 'inline',
                    fontWeight: "bold",
                    borderBottom: 4,
                    borderBottomColor:
                      props.actorMatch === true ? "success.main" : "error.main"
                    // borderRadius: "15px",
                    // mx: 0.5,
                    // fontSize: 14,
                  }}
                >
                  {props.value === null ? "" : props.value["actor"]}
                </TableCell>
                <TableCell
                  align="center"
                  // style={{
                  //   backgroundColor:
                  //     props.musicMatch === true
                  //       ? "green"
                  //       : props.value === null
                  //       ? ""
                  //       : "red"
                  // }}
                  sx={{
                    // color: 'success.dark',
                    // display: 'inline',
                    fontWeight: "bold",
                    borderBottom: 4,
                    borderBottomColor:
                      props.musicMatch === true ? "success.main" : "error.main"
                    // borderRadius: "15px"
                    // mx: 0.5,
                    // fontSize: 14,
                  }}
                >
                  {props.value === null ? "" : props.value["music"]}
                </TableCell>
                <TableCell
                  align="center"
                  // style={{
                  //   backgroundColor:
                  //     props.yearMatch === true
                  //       ? "green"
                  //       : props.value === null
                  //       ? ""
                  //       : "red"
                  // }}
                  sx={{
                    // color: 'success.dark',
                    // display: 'inline',
                    fontWeight: "bold",
                    borderBottom: 4,
                    borderBottomColor:
                      props.yearMatch === true ? "success.main" : "error.main"
                    // borderRadius: "15px"
                    // mx: 0.5,
                    // fontSize: 14,
                  }}
                >
                  {props.value === null ? "" : props.value["year"]}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
      <p> </p>
    </div>
  );

  function handleChange(event, value) {
    props.onClick(value);
  }
}

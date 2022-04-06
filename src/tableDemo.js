import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "Director",
    "Nelson Dilipkumar",
    "Anirudh",
    "2020+"
  ),
  createData(
    "Frozen yoghurt",
    "Male Lead",
    "Sivakarthikeyan",
    "Anirudh",
    "2020+"
  ),
  createData("Frozen yoghurt", "Music", "Anirudh", "Anirudh", "2020+"),
  createData("Frozen yoghurt", "Year", "2005-2009", "Anirudh", "2020+")
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table" size="small">
        {/* <TableHead>
          <TableRow>
            <TableCell align="center">Director</TableCell>
            <TableCell align="center">Male Lead</TableCell>
            <TableCell align="center">Music</TableCell>
            <TableCell align="center">Year</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          <TableRow key="s">
            <TableCell align="center" style={{ backgroundColor: "green" }}>
              Director
            </TableCell>
            <TableCell align="center" style={{ backgroundColor: "green" }}>
              Santosh
            </TableCell>
          </TableRow>
          <TableRow key="a">
            <TableCell align="center">Director</TableCell>
            <TableCell align="center" style={{ backgroundColor: "green" }}>
              Santosh
            </TableCell>
          </TableRow>
          <TableRow key="v">
            <TableCell align="center">Director</TableCell>
            <TableCell align="center" style={{ backgroundColor: "green" }}>
              "Santosh"
            </TableCell>
          </TableRow>
          <TableRow key="ty">
            <TableCell align="center">Director</TableCell>
            <TableCell align="center" style={{ backgroundColor: "green" }}>
              "Santosh"
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

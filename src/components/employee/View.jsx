import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Tooltip,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";

const View = () => {
  return (
    <>
      <Box textAlign="center" p={2}>
        <Typography variant="h4">Employee Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">IDdfgg</TableCell>
              <TableCell align="center">Nameee</TableCell>
              <TableCell align="center">Emailll</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Link to={`/`}>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default View;

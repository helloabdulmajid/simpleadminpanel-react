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

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "green", color: "white" }}
        textAlign="center"
        p={2}
      >
        <Typography variant="h4">Employee List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Am</TableCell>
              <TableCell align="center">am@example</TableCell>
              <TableCell align="center">
                <Tooltip title="View">
                  <IconButton>
                    <Link to={`/employee/view/:id`}>
                      <VisibilityIcon color="primary" />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton>
                    <Link to={`/employee/edit/:id`}>
                      <EditIcon color="warning" />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Am</TableCell>
              <TableCell align="center">am@example</TableCell>
              <TableCell align="center">
                <Tooltip title="View">
                  <IconButton>
                    <VisibilityIcon color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon color="warning" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;

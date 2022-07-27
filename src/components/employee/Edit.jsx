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

const Edit = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "green", color: "white" }}
        textAlign="center"
        p={2}
        mb={2}
      >
        <Typography variant="h2">
          React CRUD with API Call (Employee)
        </Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            textAlign="center"
            p={2}
            sx={{ backgroundColor: "yellow", color: "white" }}
            mb={2}
          >
            <Typography variant="h4">Edit Employee</Typography>
          </Box>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value="jhh"
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  value="hhh"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value="sfdfs"
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Link to={`/`}>
              <Button variant="contained" color="primary">
                Back to Home
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;

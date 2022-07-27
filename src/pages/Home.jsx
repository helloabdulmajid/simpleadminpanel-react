import React from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
// import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core";
// import { deepOrange,deepPurple ,green,red} from "@mui/material/colors";imp
import List from "../../src/components/employee/List";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>

      <Box
        sx={{ backgroundColor: "orange", color: "white" }}
        textAlign="center"
        p={2}
        mb={2}
      >
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{ backgroundColor: "green", color: "white" }}
            textAlign="center"
            p={2}
            mb={2}
          >
            <Typography variant="h4">Add Employee</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="empname"
                  name="empname"
                  variant="outlined"
                  required
                  fullWidth
                  id="empname"
                  label="Name"
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
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

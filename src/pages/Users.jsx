
import { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data);
    });
  },[]);

  return (
    <>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value) => (
            <TableRow
              key={value.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.id}
              </TableCell>
              <TableCell align="right">{value.username}</TableCell>
              <TableCell align="right">{value.name}</TableCell>
              <TableCell align="right">{value.email}</TableCell>
              <TableCell align="right">{value.phone}</TableCell>
              <TableCell align="right"><Button variant="text">Edit</Button></TableCell>
              <TableCell align="right"><Button variant="text">Delete</Button></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </>
  );
}

export default Users;
